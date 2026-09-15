import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { HRD_CORP_INFO } from '../data/workshopData';
import { LANG_LABELS, Lang, useLanguage } from '../i18n';

/**
 * EN / 中文 switcher. Both options are always shown rather than one toggle
 * button, so a Chinese-reading visitor can see at a glance that their language
 * is available instead of having to guess what the button would switch to.
 */
const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { lang, setLang, t } = useLanguage();
  const options: Lang[] = ['en', 'zh'];

  return (
    <div
      role="group"
      aria-label={t.header.languageLabel}
      className={`inline-flex items-center rounded-lg border border-[#DCD8CF] bg-white p-0.5 ${className}`}
    >
      {options.map((option) => {
        const isActive = lang === option;
        return (
          <button
            key={option}
            type="button"
            lang={option === 'zh' ? 'zh-Hans' : 'en'}
            onClick={() => setLang(option)}
            aria-pressed={isActive}
            className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-colors ${
              isActive
                ? 'bg-[#0284C7] text-white shadow-xs'
                : 'text-[#666562] hover:text-[#111113] hover:bg-[#F2EFE8]'
            }`}
          >
            {LANG_LABELS[option]}
          </button>
        );
      })}
    </div>
  );
};

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/85 backdrop-blur-md border-b border-[#E6E3DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-3">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 min-w-0 group">
            <img
              src="./yk-logo.png"
              alt="YK Group"
              width={402}
              height={216}
              className="h-9 w-auto flex-shrink-0"
            />
            <span className="min-w-0">
              <span className="block text-sm font-extrabold text-[#111113] leading-tight truncate group-hover:text-[#0284C7] transition-colors">
                {HRD_CORP_INFO.registeredCourseTitle}
              </span>
              <span className="hidden sm:block text-[11px] font-medium text-[#777672] leading-tight truncate">
                {t.header.brandSubline}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label={t.header.navLabel} className="hidden xl:flex items-center gap-1">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-xs font-semibold text-[#555450] rounded-lg hover:text-[#111113] hover:bg-[#EFEBE2] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            <a
              href="#register-interest"
              className="hidden sm:flex px-4 py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-extrabold rounded-xl shadow-sm transition-colors items-center gap-1.5 whitespace-nowrap"
            >
              {t.header.registerCta} <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? t.header.closeMenu : t.header.openMenu}
              className="xl:hidden p-2 rounded-lg text-[#333230] hover:bg-[#EFEBE2] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label={t.header.navLabel}
            className="xl:hidden pb-4 border-t border-[#E6E3DB] pt-3 flex flex-col gap-1"
          >
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-[#333230] rounded-lg hover:bg-[#EFEBE2] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register-interest"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-extrabold rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
            >
              {t.header.registerCta} <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
