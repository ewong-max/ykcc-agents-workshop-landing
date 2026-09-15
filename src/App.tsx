import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { HRD_CORP_INFO, ORGANIZER_INFO } from './data/workshopData';
import { LanguageProvider, useLanguage } from './i18n';

// Contact details are language-neutral, so the rows are built once here and the
// footer only supplies the wording around them.
const CONTACT_ENTRIES = [
  { icon: Mail, value: ORGANIZER_INFO.email, href: `mailto:${ORGANIZER_INFO.email}` },
  { icon: Phone, value: ORGANIZER_INFO.phone, href: `tel:${ORGANIZER_INFO.phone}` },
  { icon: Globe, value: ORGANIZER_INFO.website, href: `https://${ORGANIZER_INFO.website}` },
  { icon: MapPin, value: ORGANIZER_INFO.address, href: null }
].filter((entry) => entry.value);

const Site: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans antialiased selection:bg-sky-500 selection:text-white">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:bg-[#0284C7] focus:text-white focus:rounded-lg focus:text-sm focus:font-bold"
      >
        {t.header.skipToContent}
      </a>

      <Header />

      <main>
        <LandingPage />
      </main>

      <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-3">
                {/* White chip: the logo's letterforms are knocked out, so it needs a light
                    backing to stay legible on the dark footer. */}
                <span className="inline-flex items-center justify-center bg-white rounded-lg px-2.5 py-1.5">
                  <img src="./yk-logo.png" alt={t.footer.logoAlt} className="h-5 w-auto" />
                </span>
                <span className="font-bold text-slate-100 text-sm">{ORGANIZER_INFO.brandName}</span>
              </div>
              <p className="leading-relaxed max-w-md text-slate-400">{t.tagline}</p>
              <p className="text-slate-500 text-[11px]">{t.footer.pdpaLine}</p>
            </div>

            {/* Quick links */}
            <div>
              <h2 className="text-slate-200 font-bold mb-3 text-[11px] uppercase tracking-widest">
                {t.footer.exploreHeading}
              </h2>
              <ul className="space-y-2">
                {t.nav.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-sky-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#register-interest" className="hover:text-sky-400 transition-colors">
                    {t.header.registerCta}
                  </a>
                </li>
              </ul>
            </div>

            {/* Workshop facts */}
            <div>
              <h2 className="text-slate-200 font-bold mb-3 text-[11px] uppercase tracking-widest">
                {t.footer.workshopHeading}
              </h2>
              <ul className="space-y-2">
                <li className="text-sky-400 font-semibold">
                  {t.schedule.datesLabel} · {t.schedule.timeLabel}
                </li>
                {t.footer.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>

              {CONTACT_ENTRIES.length > 0 && (
                <ul className="space-y-2 mt-4 pt-4 border-t border-slate-800">
                  {CONTACT_ENTRIES.map(({ icon: Icon, value, href }) => (
                    <li key={value} className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      {href ? (
                        <a href={href} className="hover:text-sky-400 transition-colors break-all">
                          {value}
                        </a>
                      ) : (
                        <span>{value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3 flex-shrink-0">
              <img
                src="./hrd-corp-claimable.png"
                alt={t.registration.claimableBadgeAlt}
                className="h-12 w-12 sm:h-14 sm:w-14"
              />
              <img
                src="./hrd-corp-registered.png"
                alt={t.registration.registeredBadgeAlt}
                className="h-12 w-12 sm:h-14 sm:w-14"
              />
            </div>
            <div className="text-[11px] text-slate-400 leading-relaxed">
              <div className="font-bold text-slate-200">
                {t.footer.programmeNoLabel} {HRD_CORP_INFO.programmeNo}
              </div>
              <div>
                {t.footer.claimableLine} {HRD_CORP_INFO.scheme} · {t.registration.mycoidLabel}{' '}
                {HRD_CORP_INFO.mycoid}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
            <span>{t.footer.copyright(new Date().getFullYear())}</span>
            <span>{t.footer.signOff}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
