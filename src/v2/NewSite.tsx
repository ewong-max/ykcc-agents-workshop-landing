import React, { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  CheckCircle2,
  ChevronDown,
  FileText,
  Gift,
  Landmark,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Sparkles,
  Users,
  X
} from 'lucide-react';
import {
  BATCHES,
  BatchId,
  DEFAULT_BATCH,
  HRD_CORP_INFO,
  ORGANIZER_INFO,
  PRICING,
  WORKSHOP_VENUE,
  isBatchFull
} from '../data/workshopData';
import { LANG_LABELS, Lang, useLanguage } from '../i18n';
import { buildLead, isSubmissionConfigured, submitLeadToSheet } from '../lib/leadSubmission';
import { InterestRegistration } from '../types';
import { CategoryId, V2 } from './content';

const money = (n: number) => `${PRICING.currency}${n.toLocaleString('en-MY')}`;

const batchFromQuery = (): BatchId => {
  try {
    const wanted = new URLSearchParams(window.location.search).get('batch');
    const match = BATCHES.find((b) => b.id === wanted);
    return match && !match.full ? match.id : DEFAULT_BATCH;
  } catch {
    return DEFAULT_BATCH;
  }
};

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  paymentMethod: 'HRDC' as 'HRDC' | 'Cash',
  batch: DEFAULT_BATCH as BatchId
};

const CAT_STYLE: Record<CategoryId, { icon: React.ElementType; tint: string; chip: string }> = {
  paper: { icon: FileText, tint: 'from-sky-500 to-blue-600', chip: 'bg-sky-100 text-sky-800' },
  finance: { icon: Landmark, tint: 'from-emerald-500 to-teal-600', chip: 'bg-emerald-100 text-emerald-800' },
  inbox: { icon: Mail, tint: 'from-violet-500 to-indigo-600', chip: 'bg-violet-100 text-violet-800' },
  build: { icon: Laptop, tint: 'from-orange-500 to-rose-500', chip: 'bg-orange-100 text-orange-800' },
  brain: { icon: Brain, tint: 'from-fuchsia-500 to-purple-600', chip: 'bg-fuchsia-100 text-fuchsia-800' }
};

const BONUS_ICONS = [Gift, BookOpen, FileText, Sparkles];

const inputCls =
  'w-full px-3.5 py-3 bg-white rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none';

const LangSwitch: React.FC<{ dark?: boolean }> = ({ dark }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`inline-flex rounded-lg p-0.5 ${dark ? 'bg-white/10' : 'bg-slate-100'}`}>
      {(['zh', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${
            lang === l ? 'bg-amber-400 text-slate-900' : dark ? 'text-white/80 hover:text-white' : 'text-slate-600'
          }`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
};

export const NewSite: React.FC = () => {
  const { lang, t } = useLanguage();
  const c = V2[lang];
  const r = t.registration;

  const [menuOpen, setMenuOpen] = useState(false);
  const [cat, setCat] = useState<CategoryId | 'all'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [missing, setMissing] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState(() => ({ ...EMPTY_FORM, batch: batchFromQuery() }));
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<InterestRegistration | null>(null);

  const openBatch = t.schedule.batches.find((b) => !isBatchFull(b.id as BatchId)) ?? t.schedule.batches[0];
  const cases = c.cases.items.filter((u) => cat === 'all' || u.cat === cat);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const lead = buildLead(form);
    try {
      await submitLeadToSheet(lead);
      setDone(lead);
    } catch (err) {
      setError(err instanceof Error ? err.message : r.genericError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#F7F5F0] text-slate-900 antialiased pb-20 sm:pb-0">
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-40 bg-[#0B1B3F]/95 backdrop-blur text-white">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-3 min-w-0">
            <span className="bg-white rounded-md px-1.5 py-1 flex-shrink-0">
              <img src="./yk-logo.png" alt="YK Group" className="h-6 w-auto" />
            </span>
            <span className="font-extrabold text-sm truncate" lang="en">
              {HRD_CORP_INFO.registeredCourseTitle}
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {c.nav.map((n) => (
              <a key={n.href} href={n.href} className="px-3 py-2 text-sm text-white/80 hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch dark />
            <a
              href="#register"
              className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 text-sm font-extrabold"
            >
              {c.registerCta} <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              className="lg:hidden p-2"
              aria-label="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="lg:hidden border-t border-white/10 px-4 pb-4 pt-2 flex flex-col">
            {[...c.nav, { label: c.registerCta, href: '#register' }].map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="py-2.5 text-white/90">
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-[#0B1B3F] text-white">
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,#F59E0B55,transparent_45%),radial-gradient(circle_at_10%_90%,#3B82F655,transparent_45%)]" />
        <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold">{c.hero.badge}</span>
              <span className="px-3 py-1 rounded-full bg-rose-500 text-xs font-extrabold">🔥 {c.hero.fullTag}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-[1.15] tracking-tight whitespace-pre-line">
              {c.hero.titleTop}
              <br />
              <span className="text-amber-400">{c.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-xl">{c.hero.sub}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-base shadow-lg shadow-amber-500/30"
              >
                {c.hero.ctaPrimary} <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#cases" className="px-5 py-3.5 rounded-2xl border border-white/30 font-bold hover:bg-white/10">
                {c.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <span className="font-extrabold text-amber-300">
                📅 {openBatch.datesLabel} · {t.schedule.timeLabel}
              </span>
              {c.hero.chips.map((ch) => (
                <span key={ch} className="text-white/80 flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-400" /> {ch}
                </span>
              ))}
            </div>
            <div className="mt-4 text-sm text-white/70">
              <strong className="text-white">HRDC {money(PRICING.hrdc)}</strong> ·{' '}
              <strong className="text-white">CASH {money(PRICING.cash)}</strong>
            </div>
          </div>

          {/* Collage of real outputs */}
          <div className="relative h-[380px] sm:h-[460px]">
            <img
              src="./img/v2/office-portal.webp"
              alt=""
              className="absolute right-0 top-0 w-[88%] rounded-2xl shadow-2xl ring-1 ring-white/20"
            />
            <img
              src="./img/v2/trainer-teach.webp"
              alt=""
              className="absolute left-0 bottom-0 w-[38%] aspect-[3/4] object-cover object-top rounded-2xl shadow-2xl ring-4 ring-[#0B1B3F]"
            />
            <img
              src="./img/v2/hr-questionnaire-zh.webp"
              alt=""
              className="absolute right-2 bottom-2 w-[54%] rounded-2xl shadow-2xl ring-4 ring-[#0B1B3F]"
            />
          </div>
        </div>
      </section>

      {/* ---------- Proof strip ---------- */}
      <section className="bg-amber-400">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {c.proof.map((p) => (
            <div key={p.small}>
              <div className="text-3xl sm:text-4xl font-black text-[#0B1B3F]">{p.big}</div>
              <div className="text-sm font-bold text-[#0B1B3F]/80">{p.small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Before / After ---------- */}
      <section id="results" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHead eyebrow={c.beforeAfter.eyebrow} heading={c.beforeAfter.heading} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.beforeAfter.items.map((b) => (
              <div key={b.task} className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-slate-200">
                <div className="font-extrabold text-lg leading-snug mb-4">{b.task}</div>
                <div className="flex items-start gap-2 text-slate-500 text-sm">
                  <X className="w-4 h-4 mt-0.5 text-rose-500 flex-shrink-0" />
                  <span className="line-through decoration-rose-300">{b.before}</span>
                </div>
                <div className="flex items-start gap-2 mt-2 text-sm font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{b.after}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-600">✋ {c.beforeAfter.note}</p>
        </div>
      </section>

      {/* ---------- Journey ---------- */}
      <section id="journey" className="py-16 sm:py-20 bg-[#0B1B3F] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHead eyebrow={c.journey.eyebrow} heading={c.journey.heading} sub={c.journey.sub} dark />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.journey.steps.map((s, i) => (
              <li
                key={s.title}
                className={`relative rounded-3xl p-6 ${
                  i === c.journey.steps.length - 1 ? 'bg-amber-400 text-slate-900' : 'bg-white/5 ring-1 ring-white/10'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`w-10 h-10 rounded-full grid place-items-center font-black ${
                      i === c.journey.steps.length - 1 ? 'bg-[#0B1B3F] text-amber-400' : 'bg-amber-400 text-slate-900'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-70">{s.day}</span>
                </div>
                <div className="font-extrabold text-xl mb-1">{s.title}</div>
                <p className="text-sm opacity-80 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Use cases ---------- */}
      <section id="cases" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHead eyebrow={c.cases.eyebrow} heading={c.cases.heading} sub={c.cases.sub} />
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(['all', ...Object.keys(c.cases.categories)] as (CategoryId | 'all')[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setCat(k)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  cat === k ? 'bg-[#0B1B3F] text-white' : 'bg-white ring-1 ring-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {k === 'all' ? c.cases.all : c.cases.categories[k]}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map((u) => {
              const st = CAT_STYLE[u.cat];
              const Icon = st.icon;
              return (
                <article key={u.title} className="bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-slate-200 flex flex-col">
                  {u.img && !missing[u.img] ? (
                    <div className="h-44 overflow-hidden bg-slate-100 border-b border-slate-200">
                      {/* A screenshot not yet saved into public/img/v2 falls back to the icon header. */}
                      <img src={u.img} alt={u.title} loading="lazy" className="w-full h-full object-cover object-top"
                        onError={() => setMissing((m) => ({ ...m, [u.img as string]: true }))} />
                    </div>
                  ) : (
                    <div className={`h-24 bg-gradient-to-br ${st.tint} grid place-items-center`}>
                      <Icon className="w-10 h-10 text-white/90" />
                    </div>
                  )}
                  <div className="p-5 flex-1">
                    <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full mb-2 ${st.chip}`}>
                      {c.cases.categories[u.cat]}
                    </span>
                    <h3 className="font-extrabold text-lg leading-snug">{u.title}</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{u.line}</p>
                  </div>
                </article>
              );
            })}
            <article className="rounded-3xl p-6 bg-amber-400 flex flex-col justify-center">
              <Rocket className="w-9 h-9 mb-3 text-[#0B1B3F]" />
              <h3 className="font-black text-xl text-[#0B1B3F]">{c.cases.finale.title}</h3>
              <p className="text-sm text-[#0B1B3F]/80 mt-1">{c.cases.finale.text}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Bonus ---------- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHead eyebrow={c.bonus.eyebrow} heading={c.bonus.heading} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.bonus.items.map((b, i) => {
              const Icon = BONUS_ICONS[i];
              return (
                <div
                  key={b.title}
                  className={`rounded-3xl p-6 ${i === 0 ? 'bg-[#0B1B3F] text-white ring-4 ring-amber-400' : 'bg-[#F7F5F0]'}`}
                >
                  <Icon className={`w-8 h-8 mb-3 ${i === 0 ? 'text-amber-400' : 'text-[#0B1B3F]'}`} />
                  <div className="font-extrabold text-lg">{b.title}</div>
                  <p className={`text-sm mt-1 leading-relaxed ${i === 0 ? 'text-white/80' : 'text-slate-600'}`}>{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Trainer ---------- */}
      <section id="trainer" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-5 gap-3">
            <img
              src="./img/v2/class-group.webp"
              alt={c.trainer.classCaption}
              className="col-span-5 rounded-3xl shadow-lg w-full aspect-[4/3] object-cover"
            />
            <img src="./img/v2/trainer-teach.webp" alt="" className="col-span-2 rounded-2xl h-40 w-full object-cover object-top" />
            <img src="./img/v2/class-room.webp" alt="" className="col-span-3 rounded-2xl h-40 w-full object-cover" />
            <p className="col-span-5 text-xs text-slate-500 text-center">{c.trainer.classCaption}</p>
          </div>
          <div>
            <div className="text-sm font-extrabold uppercase tracking-wider text-amber-600">{c.trainer.eyebrow}</div>
            <h2 className="text-3xl sm:text-4xl font-black mt-1">{c.trainer.name}</h2>
            <div className="text-lg font-bold text-slate-600 mt-1">{c.trainer.role}</div>
            <p className="mt-4 text-slate-700 leading-relaxed">{c.trainer.bio}</p>
            <ul className="mt-5 space-y-2">
              {c.trainer.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Register ---------- */}
      <section id="register" className="py-16 sm:py-20 bg-[#0B1B3F] text-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="text-sm font-extrabold uppercase tracking-wider text-amber-400">{c.pricing.eyebrow}</div>
            <h2 className="text-3xl sm:text-4xl font-black mt-1">{c.pricing.heading}</h2>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500 text-xs font-extrabold">
              <Users className="w-4 h-4" /> {c.pricing.smallClass}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-xs font-bold text-amber-300">{c.pricing.hrdc}</div>
                <div className="text-3xl font-black">{money(PRICING.hrdc)}</div>
                <div className="text-xs text-white/60">{c.pricing.perPax}</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-xs font-bold text-amber-300">{c.pricing.cash}</div>
                <div className="text-3xl font-black">{money(PRICING.cash)}</div>
                <div className="text-xs text-white/60">{c.pricing.perPax}</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-amber-200 font-semibold">🎁 {c.pricing.group}</p>

            <ul className="mt-5 space-y-2 text-sm">
              {c.pricing.includes.map((i) => (
                <li key={i} className="flex gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5" /> {i}
                </li>
              ))}
            </ul>

            <div className="mt-6 text-sm text-white/70 space-y-1">
              {t.schedule.batches.map((b) =>
                isBatchFull(b.id as BatchId) ? (
                  <div key={b.id}>
                    <span className="line-through">{b.datesLabel}</span> · {r.batchFullLabel}
                  </div>
                ) : (
                  <div key={b.id} className="text-amber-300 font-bold">
                    📅 {b.datesLabel} · {b.languageLabel} · {t.schedule.timeLabel}
                  </div>
                )
              )}
              <div className="flex gap-2 pt-1">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" /> {WORKSHOP_VENUE.address}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-white/60">
              <img src="./hrd-corp-registered.png" alt={r.registeredBadgeAlt} className="h-12 w-12 bg-white rounded-lg p-1" />
              <div>
                <div className="font-bold text-white/80">
                  {r.programmeNoLabel} {HRD_CORP_INFO.programmeNo}
                </div>
                <div>
                  {HRD_CORP_INFO.scheme} · {r.mycoidLabel} {HRD_CORP_INFO.mycoid}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {done ? (
              <div className="text-center space-y-4 py-6">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-black">{r.thankYou(done.fullName)}</h3>
                <p className="text-sm text-slate-600">
                  {r.recordedFor}
                  <strong lang="en">{HRD_CORP_INFO.registeredCourseTitle}</strong>
                  {r.recordedSuffix} {done.trainingDate}
                </p>
                <p className="text-sm bg-amber-50 border border-amber-200 rounded-xl p-4 text-left">
                  <strong className="block mb-1">{r.nextTitle}</strong>
                  {c.nextBody}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDone(null);
                    setForm({ ...EMPTY_FORM, batch: batchFromQuery() });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#0B1B3F] text-white text-sm font-bold"
                >
                  {r.registerAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                {!isSubmissionConfigured && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs">{r.notConfiguredBody}</div>
                )}
                {error && (
                  <div role="alert" className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-900 flex gap-2">
                    <AlertTriangle className="w-4 h-4 mt-0.5" />
                    <span>
                      <strong>{r.errorTitle}</strong> {error}
                    </span>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field id="f-name" label={r.labels.fullName}>
                    <input id="f-name" required autoComplete="name" className={inputCls} placeholder={r.placeholders.fullName}
                      value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
                  </Field>
                  <Field id="f-email" label={r.labels.email}>
                    <input id="f-email" type="email" required autoComplete="email" className={inputCls} placeholder={r.placeholders.email}
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </Field>
                  <Field id="f-phone" label={r.labels.phone}>
                    <input id="f-phone" type="tel" required autoComplete="tel" className={inputCls} placeholder={r.placeholders.phone}
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </Field>
                  <Field id="f-company" label={r.labels.company}>
                    <input id="f-company" required autoComplete="organization" className={inputCls} placeholder={r.placeholders.company}
                      value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} />
                  </Field>
                </div>

                <fieldset>
                  <legend className="text-sm font-bold mb-2">{r.labels.batch} *</legend>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {t.schedule.batches.map((b) => {
                      const full = isBatchFull(b.id as BatchId);
                      const on = form.batch === b.id;
                      return (
                        <label
                          key={b.id}
                          className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 text-sm ${
                            full ? 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
                              : on ? 'border-amber-400 bg-amber-50 cursor-pointer' : 'border-slate-200 cursor-pointer'
                          }`}
                        >
                          <input type="radio" name="batch" disabled={full} checked={on} className="accent-amber-500"
                            onChange={() => setForm({ ...form, batch: b.id as BatchId })} />
                          <span>
                            <span className={`font-bold ${full ? 'line-through' : ''}`}>{b.datesLabel}</span>
                            <span className="block text-xs">{full ? r.batchFullLabel : b.languageLabel}</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-sm font-bold mb-2">{r.labels.paymentMethod} *</legend>
                  <div className="grid grid-cols-2 gap-3">
                    {(['HRDC', 'Cash'] as const).map((m) => {
                      const on = form.paymentMethod === m;
                      return (
                        <label key={m} className={`flex items-center justify-between gap-2 px-4 py-3 rounded-xl border-2 text-sm cursor-pointer ${on ? 'border-amber-400 bg-amber-50' : 'border-slate-200'}`}>
                          <span className="flex items-center gap-2">
                            <input type="radio" name="pay" checked={on} className="accent-amber-500"
                              onChange={() => setForm({ ...form, paymentMethod: m })} />
                            <span className="font-bold">{m === 'HRDC' ? r.paymentHrdc : r.paymentCash}</span>
                          </span>
                          <span className="font-black">{money(m === 'HRDC' ? PRICING.hrdc : PRICING.cash)}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-slate-900 font-black text-lg flex items-center justify-center gap-2"
                >
                  {submitting ? r.submitting : r.submitIdle} {!submitting && <ArrowRight className="w-5 h-5" />}
                </button>
                <p className="text-xs text-slate-500 text-center">{r.pdpaNote}</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-8">{c.faq.heading}</h2>
          <div className="space-y-3">
            {c.faq.items.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="bg-white rounded-2xl ring-1 ring-slate-200">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-bold"
                  >
                    {f.q}
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-br from-amber-400 to-orange-500 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B3F]">{c.closing.heading}</h2>
          <p className="mt-2 text-[#0B1B3F]/80 font-semibold">{c.closing.text}</p>
          <a
            href="#register"
            className="mt-6 inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#0B1B3F] text-white font-extrabold text-lg"
          >
            {c.registerCta} · {openBatch.datesShort} <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-[#08142E] text-white/60 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-white rounded-md px-1.5 py-1">
                <img src="./yk-logo.png" alt="YK Group" className="h-5 w-auto" />
              </span>
              <span className="font-bold text-white">{ORGANIZER_INFO.brandName}</span>
            </div>
            <p>{c.footer.tagline}</p>
          </div>
          <div className="space-y-1.5 sm:text-right">
            <a href={`tel:${ORGANIZER_INFO.phone}`} className="flex sm:justify-end items-center gap-2 hover:text-white">
              <Phone className="w-4 h-4" /> {ORGANIZER_INFO.phone}
            </a>
            <a href={`mailto:${ORGANIZER_INFO.email}`} className="flex sm:justify-end items-center gap-2 hover:text-white">
              <Mail className="w-4 h-4" /> {ORGANIZER_INFO.email}
            </a>
            <div className="text-xs">
              {r.programmeNoLabel} {HRD_CORP_INFO.programmeNo} · {HRD_CORP_INFO.scheme}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 text-center text-xs py-4">
          © {new Date().getFullYear()} YKCC · {c.footer.rights} · {c.footer.signOff}
        </div>
      </footer>

      {/* Mobile sticky register bar */}
      <a
        href="#register"
        className="sm:hidden fixed bottom-3 left-3 right-3 z-40 py-3.5 rounded-2xl bg-amber-400 text-slate-900 font-black text-center shadow-xl"
      >
        {c.registerCta} · {openBatch.datesShort}
      </a>
    </div>
  );
};

const SectionHead: React.FC<{ eyebrow: string; heading: string; sub?: string; dark?: boolean }> = ({
  eyebrow,
  heading,
  sub,
  dark
}) => (
  <div className="text-center max-w-2xl mx-auto mb-10">
    <div className={`text-sm font-extrabold uppercase tracking-wider ${dark ? 'text-amber-400' : 'text-amber-600'}`}>
      {eyebrow}
    </div>
    <h2 className="text-3xl sm:text-4xl font-black mt-1 leading-tight">{heading}</h2>
    {sub && <p className={`mt-3 ${dark ? 'text-white/70' : 'text-slate-600'}`}>{sub}</p>}
  </div>
);

const Field: React.FC<{ id: string; label: string; children: React.ReactNode }> = ({ id, label, children }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-bold mb-1">
      {label} *
    </label>
    {children}
  </div>
);
