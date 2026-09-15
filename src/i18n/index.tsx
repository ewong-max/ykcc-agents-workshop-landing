import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Lang, SiteContent } from './types';
import { en } from './en';
import { zh } from './zh';

export type { Lang, SiteContent } from './types';

export const CONTENT: Record<Lang, SiteContent> = { en, zh };

/** What each language calls itself, for the switcher. */
export const LANG_LABELS: Record<Lang, string> = { en: 'EN', zh: '中文' };

const STORAGE_KEY = 'ykcc-agents-lang';
const QUERY_KEY = 'lang';

const isLang = (value: unknown): value is Lang => value === 'en' || value === 'zh';

/**
 * Where the initial language comes from, in order of authority:
 *   1. ?lang= in the URL   — so a Chinese link can be shared directly on WhatsApp
 *   2. the visitor's previous choice, remembered in localStorage
 *   3. the browser's own language setting
 *   4. English
 */
const detectInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'en';

  try {
    const fromQuery = new URLSearchParams(window.location.search).get(QUERY_KEY);
    if (isLang(fromQuery)) return fromQuery;
  } catch {
    /* malformed query string — fall through */
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    /* private mode or blocked storage — fall through */
  }

  const browser = window.navigator?.language?.toLowerCase() ?? '';
  if (browser.startsWith('zh')) return 'zh';

  return 'en';
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  const t = CONTENT[lang];

  // Keep the document itself in step with the choice: <html lang> for screen
  // readers and search engines, plus the tab title and meta description.
  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.documentTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.metaDescription);
  }, [t]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);

    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — the choice simply will not persist */
    }

    // Reflect the choice in the URL without adding a history entry, so whatever
    // the visitor copies out of the address bar opens in the same language.
    try {
      const url = new URL(window.location.href);
      url.searchParams.set(QUERY_KEY, next);
      window.history.replaceState({}, '', url);
    } catch {
      /* non-standard URL — skip */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside a LanguageProvider.');
  }
  return context;
};
