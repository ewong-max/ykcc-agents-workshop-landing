import React, { useState } from 'react';
import { HRD_CORP_INFO, PRICING, WORKSHOP_VENUE } from '../data/workshopData';
import { useLanguage } from '../i18n';
import { InterestRegistration } from '../types';
import { isSubmissionConfigured, buildLead, submitLeadToSheet } from '../lib/leadSubmission';
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Brain,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  Clock,
  FileSpreadsheet,
  HelpCircle,
  Landmark,
  Layers,
  Play,
  Plug,
  RefreshCw,
  ScrollText,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
  Zap
} from 'lucide-react';

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  paymentMethod: 'HRDC' as 'HRDC' | 'Cash'
};

/** Icons for the four parts of an AI colleague, in the same order as t.agentParts. */
const AGENT_PART_ICONS = [ScrollText, Sparkles, Plug, Brain];

/** Icons for the audience cards, in the same order as t.audienceRoles. */
const AUDIENCE_ICONS = [FileSpreadsheet, Building2, Users, Landmark];

/** Imagery is language-neutral, so it is index-matched to t.featuredLabs rather than duplicated. */
const LAB_IMAGES = [
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80'
];

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80';

const money = (amount: number) => `${PRICING.currency}${amount.toLocaleString('en-MY')}`;

export const LandingPage: React.FC = () => {
  const { t } = useLanguage();

  // Registration form state
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastSubmittedLead, setLastSubmittedLead] = useState<InterestRegistration | null>(null);

  // FAQ expand/collapse
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');

  // Interactive lab preview
  const [selectedLab, setSelectedLab] = useState(0);

  // Agenda day selector
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const agendaDay = t.workshopDays.find((day) => day.dayNumber === activeDay) || t.workshopDays[0];

  // Registrations go straight into the workshop Google Sheet through the Apps Script
  // endpoint — nothing is kept in the visitor's browser.
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.companyName) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const lead = buildLead(formData);

    try {
      await submitLeadToSheet(lead);
      setLastSubmittedLead(lead);
      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : t.registration.genericError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegisterAnother = () => {
    setFormData(EMPTY_FORM);
    setFormSubmitted(false);
    setLastSubmittedLead(null);
    setSubmitError(null);
  };

  const lab = t.featuredLabs[selectedLab];

  return (
    <div className="bg-[#FAF8F5] text-[#1C1C1F] min-h-screen font-sans">

      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-[#E6E3DB] bg-gradient-to-b from-white to-[#FAF8F5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: headline */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0284C7]/10 text-[#0284C7] font-bold text-xs tracking-wider uppercase mb-3 border border-[#0284C7]/20">
                  <Bot className="w-4 h-4" /> {t.hero.badge}
                </div>
                {/* Title stays in English in both languages: HRD Corp only allows a
                    claimable course to be marketed under its registered title. */}
                <h1
                  lang="en"
                  className="text-3xl sm:text-5xl font-extrabold text-[#111113] tracking-tight leading-tight mb-3"
                >
                  {t.courseTitleLead} <span className="text-[#0284C7]">{t.courseTitleAccent}</span>
                </h1>
                <p className="text-base sm:text-xl font-semibold text-[#3D3C42] mb-4">
                  {t.subtitle}
                </p>

                <div className="bg-[#262629] text-[#F3F2EE] p-5 rounded-2xl shadow-lg border border-[#3A3A3E] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284C7]/20 blur-3xl rounded-full pointer-events-none" />
                  <p className="text-sm sm:text-base leading-relaxed font-normal text-[#E0DFDC]">
                    “{t.heroQuote}”
                  </p>
                  <div className="mt-3 pt-3 border-t border-[#404046] flex items-center justify-between gap-3 text-xs text-sky-300">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" /> {t.hero.quoteFooter}
                    </span>
                    <span className="text-[#A5A4A0] whitespace-nowrap">YKCC</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white border-2 border-[#E5E1D8] p-5 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-4 shadow-sm">
                <a
                  href="#register-interest"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-base font-extrabold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {t.hero.ctaPrimary} <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#agenda"
                  className="w-full sm:w-auto px-6 py-3.5 text-[#333230] text-sm font-bold rounded-xl border border-[#DCD8CF] hover:bg-[#F2EFE8] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                {t.hero.stats.map((stat, index) => (
                  <div
                    key={stat.value}
                    className="p-3 bg-white rounded-xl border border-[#E6E3DB] text-center shadow-xs"
                  >
                    <div
                      className={`text-xl sm:text-2xl font-extrabold ${
                        index === 0
                          ? 'text-[#0284C7]'
                          : index === 1
                            ? 'text-[#111113]'
                            : 'text-emerald-600'
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-[#666562]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: visual + takeaways */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E6E3DB] shadow-2xl group bg-[#262629]">
                <img
                  src={HERO_IMAGE}
                  alt={t.hero.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.visibility = 'hidden';
                  }}
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/90 via-[#111113]/40 to-transparent p-6 flex flex-col justify-end text-white">
                  <h2 className="text-lg sm:text-xl font-bold leading-tight text-white mb-1">
                    {t.hero.visualTitle}
                  </h2>
                  <p className="text-xs text-[#D8D7D3] leading-relaxed">{t.hero.visualBody}</p>
                </div>
              </div>

              <div className="bg-[#262629] text-white p-5 rounded-2xl border border-[#38383D] shadow-md space-y-3">
                <div className="flex items-center justify-between gap-3 border-b border-[#3D3D42] pb-2 text-xs font-bold text-sky-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />{' '}
                    {t.hero.takeawaysTitle}
                  </span>
                  <span className="text-[#A0A0A5] text-[11px] text-right">
                    {t.hero.takeawaysNote}
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-[#D0CFCA]">
                  {t.hero.takeaways.map((item) => (
                    <li key={item.lead} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                      <span>
                        <strong>{item.lead}</strong> {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANATOMY — the four parts, and the five-part recipe */}
      <section id="anatomy" className="py-12 sm:py-16 border-b border-[#E6E3DB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              {t.anatomy.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              {t.anatomy.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">{t.anatomy.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {t.agentParts.map((part, index) => {
              const Icon = AGENT_PART_ICONS[index];
              return (
                <div
                  key={part.technicalName}
                  className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E6E3DB] hover:border-[#0284C7]/50 hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#262629] text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-[#777672] uppercase tracking-widest">
                      {t.anatomy.partLabel(index + 1)}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#111113] mb-2">{part.technicalName}</h3>
                  <p className="text-xs text-[#555450] leading-relaxed flex-1">{part.meaning}</p>
                  <p className="mt-4 pt-3 border-t border-[#E6E3DB] text-[11px] text-[#777672] italic leading-relaxed">
                    {t.anatomy.humanEquivalentPrefix} {part.humanEquivalent}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Five-part recipe */}
          <div className="bg-[#202024] text-white rounded-3xl p-6 sm:p-8 border border-[#38383D] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284C7]/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                    {t.recipe.eyebrow}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    {t.recipe.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B5B4B0] mt-1 max-w-2xl">
                    {t.recipe.intro}
                  </p>
                </div>
                <span className="text-[11px] text-[#888890] whitespace-nowrap">
                  {t.recipe.sideNote}
                </span>
              </div>

              <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
                {t.promptRecipe.map((part) => (
                  <li
                    key={part.number}
                    className="bg-[#141416] rounded-2xl p-4 border border-[#2B2B30] flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-[#0284C7] text-white text-[11px] font-black flex items-center justify-center flex-shrink-0">
                        {part.number}
                      </span>
                      <span className="text-sm font-bold text-white">{part.name}</span>
                    </div>
                    <p className="text-[11px] text-sky-300 font-semibold">{part.question}</p>
                    <p className="text-[11px] text-[#B5B4B0] leading-relaxed italic">
                      “{part.example}”
                    </p>
                  </li>
                ))}
              </ol>

              <div className="mt-6 p-4 bg-amber-950/40 border border-amber-500/30 rounded-2xl text-xs text-amber-200 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400" />
                <span>
                  <strong className="block mb-0.5 text-amber-100">{t.recipe.warningTitle}</strong>
                  {t.recipe.warningBody}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LABS */}
      <section id="labs" className="py-12 sm:py-16 border-b border-[#E6E3DB] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
              {t.labs.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              {t.labs.heading}
            </h2>
            {/* The company is introduced here rather than in the hero, so that "its" below
                has something to refer back to. */}
            <p className="text-sm sm:text-base text-[#555450] mt-2">
              {t.labs.introLead}{' '}
              <strong className="text-[#111113]">{t.runningExample.company}</strong>.{' '}
              {t.runningExample.summary} {t.runningExample.yourRole}
            </p>
            <p className="text-xs sm:text-sm text-[#777672] mt-2">{t.runningExample.arc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: selector */}
            <div
              role="tablist"
              aria-label={t.labs.tablistLabel}
              aria-orientation="vertical"
              className="lg:col-span-5 space-y-3"
            >
              {t.featuredLabs.map((item, index) => {
                const isSelected = selectedLab === index;
                return (
                  <button
                    key={item.code}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedLab(index)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-white border-[#0284C7] shadow-md ring-2 ring-[#0284C7]/20'
                        : 'bg-white border-[#E6E3DB] hover:border-[#B0ADA4] hover:bg-slate-50'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs flex-shrink-0 ${
                        isSelected ? 'bg-[#0284C7] text-white shadow-xs' : 'bg-[#262629] text-white'
                      }`}
                    >
                      0{index + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded border border-sky-100 whitespace-nowrap">
                          {item.code} · {item.day}
                        </span>
                        <span className="text-[11px] font-semibold text-[#777672] truncate">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#111113] line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#666562] line-clamp-1 mt-0.5">
                        {item.keyOutcome}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: detail */}
            <div
              role="tabpanel"
              aria-live="polite"
              className="lg:col-span-7 bg-[#202024] text-white rounded-3xl p-6 sm:p-8 border border-[#38383D] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284C7]/10 blur-3xl rounded-full pointer-events-none" />

              <div className="relative space-y-6">
                <div className="relative rounded-2xl overflow-hidden h-48 border border-[#3A3A3E] bg-[#141416]">
                  <img
                    src={LAB_IMAGES[selectedLab]}
                    alt=""
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.style.visibility = 'hidden';
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/50 to-transparent p-4 flex flex-col justify-end">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 bg-[#0284C7] text-white font-extrabold text-xs rounded-md uppercase tracking-wider whitespace-nowrap">
                        {lab.code} · {lab.day}
                      </span>
                      <span className="text-xs font-semibold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-500/30 whitespace-nowrap">
                        ⏱ {lab.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                    {lab.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">{lab.title}</h3>
                  <p className="text-xs sm:text-sm text-[#D5D4D0] mt-2 leading-relaxed">
                    {lab.description}
                  </p>
                </div>

                <div className="bg-[#141416] p-4 rounded-xl border border-[#333338] space-y-2">
                  <div className="flex items-center justify-between gap-2 text-xs font-bold text-amber-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-amber-400 flex-shrink-0" />{' '}
                      {t.labs.promptBoxTitle}
                    </span>
                    <span className="text-[10px] text-[#777672] whitespace-nowrap">
                      {t.labs.promptBoxNote}
                    </span>
                  </div>
                  <pre className="text-[11px] sm:text-xs text-[#E0DFDC] bg-[#1C1C20] p-3 rounded-lg overflow-x-auto whitespace-pre-wrap font-mono border border-[#2B2B30]">
                    {lab.samplePrompt}
                  </pre>
                </div>

                <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 font-semibold flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.labs.checkpointLabel}</strong>
                    {lab.keyOutcome}
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <a
                    href="#register-interest"
                    className="px-5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
                  >
                    {t.labs.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-[#888890] whitespace-nowrap">
                    {t.labs.counter(selectedLab + 1, t.featuredLabs.length)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-12 sm:py-16 border-b border-[#E6E3DB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              {t.benefits.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              {t.benefits.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">{t.benefits.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.courseHighlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E6E3DB] hover:border-[#0284C7]/50 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#262629] text-white flex items-center justify-center text-sm font-bold shadow-xs flex-shrink-0">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-bold text-[#0284C7] bg-[#0284C7]/10 px-2.5 py-0.5 rounded-full text-right">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111113] group-hover:text-[#0284C7] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#0284C7] mb-3">{item.subtitle}</div>
                  <p className="text-xs text-[#555450] leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-[#E6E3DB] text-[11px] text-[#777672] font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  {item.metricLabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#E6E3DB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              {t.agenda.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              {t.agenda.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">{t.agenda.intro}</p>
          </div>

          {/* Day selector */}
          <div className="flex justify-center mb-8">
            <div
              role="tablist"
              aria-label={t.agenda.daySelectLabel}
              className="bg-white p-1.5 rounded-xl border border-[#E6E3DB] inline-flex items-center gap-2 shadow-xs"
            >
              {t.workshopDays.map((day) => (
                <button
                  key={day.dayNumber}
                  role="tab"
                  aria-selected={activeDay === day.dayNumber}
                  onClick={() => setActiveDay(day.dayNumber)}
                  className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeDay === day.dayNumber
                      ? 'bg-[#0284C7] text-white shadow-xs'
                      : 'text-[#555450] hover:text-[#111113] hover:bg-[#EAE7DF]'
                  }`}
                >
                  <Calendar className="w-4 h-4" /> {t.agenda.dayLabel(day.dayNumber)}
                </button>
              ))}
            </div>
          </div>

          {/* Day overview */}
          <div className="bg-[#202024] text-white rounded-3xl p-6 sm:p-8 border border-[#38383D] shadow-xl relative overflow-hidden mb-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284C7]/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                {t.agenda.dayLabel(agendaDay.dayNumber)}
              </span>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white mt-1">
                {agendaDay.theme}
              </h3>
              <p className="text-xs sm:text-sm text-sky-200 font-semibold mt-1">
                {agendaDay.subTitle}
              </p>
              <p className="text-xs sm:text-sm text-[#D5D4D0] mt-3 leading-relaxed">
                {agendaDay.description}
              </p>

              <div className="mt-5 pt-4 border-t border-[#3A3A3E] flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#B5B4B0]">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-sky-400" />
                  <strong className="text-white">
                    {agendaDay.modules.filter((m) => !m.isBreak).length}
                  </strong>{' '}
                  {t.agenda.sessionsLabel}
                </span>
                <span className="flex items-center gap-1.5">
                  <Play className="w-4 h-4 text-emerald-400" />
                  <strong className="text-white">
                    {agendaDay.modules.reduce((total, m) => total + m.stages.length, 0)}
                  </strong>{' '}
                  {t.agenda.stagesLabel}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  {agendaDay.modules[0]?.startTime} –{' '}
                  {agendaDay.modules[agendaDay.modules.length - 1]?.endTime}
                </span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <ol className="space-y-3">
            {agendaDay.modules.map((module) =>
              module.isBreak ? (
                <li key={module.id} className="flex items-center gap-3 px-1 py-1">
                  <span className="w-16 sm:w-28 flex-shrink-0 text-[11px] font-semibold text-[#8A8983]">
                    {module.startTime}
                  </span>
                  <span className="flex-1 border-t border-dashed border-[#DCD8CF]" />
                  <span className="text-[11px] font-semibold text-[#8A8983] whitespace-nowrap">
                    {module.breakType === 'lunch' ? t.agenda.lunchBreak : t.agenda.teaBreak} ·{' '}
                    {module.startTime}–{module.endTime}
                  </span>
                  <span className="flex-1 border-t border-dashed border-[#DCD8CF] hidden sm:block" />
                </li>
              ) : (
                <li
                  key={module.id}
                  className="bg-white rounded-2xl border border-[#E6E3DB] p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-5 hover:border-[#0284C7]/50 hover:shadow-md transition-all"
                >
                  <div className="sm:w-28 flex-shrink-0 space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#0284C7] bg-sky-50 border border-sky-200 rounded-lg px-2.5 py-1.5 whitespace-nowrap">
                      <Clock className="w-3.5 h-3.5" />
                      {module.startTime}–{module.endTime}
                    </span>
                    <span className="hidden sm:block text-[10px] font-semibold text-[#8A8983] uppercase tracking-wider">
                      {t.agenda.formatLabels[module.format]}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-sm font-bold text-[#111113]">{module.title}</h3>
                      {module.handoutSource && (
                        <span className="text-[10px] font-semibold text-[#777672] bg-[#FAF8F5] border border-[#E6E3DB] px-2 py-0.5 rounded">
                          {t.agenda.handoutLabel}
                          {module.handoutSource}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#555450] leading-relaxed">{module.objective}</p>

                    {module.stages.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {module.stages.map((stage) => (
                          <span
                            key={stage.id}
                            title={`${stage.title} — ${stage.description}`}
                            className="text-[10px] font-bold text-[#0284C7] bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-md"
                          >
                            {stage.promptCode} · {stage.durationMinutes} {t.agenda.minuteSuffix}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              )
            )}
          </ol>

          <div className="mt-8 p-5 bg-white rounded-2xl border border-[#E6E3DB] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-[#555450]">
              {t.agenda.footnote}{' '}
              <strong className="text-[#111113]">{t.agenda.footnoteDates}</strong>
            </p>
            <a
              href="#register-interest"
              className="px-6 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-extrabold rounded-xl shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              {t.agenda.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="register-interest" className="py-12 sm:py-16 bg-white border-b border-[#E6E3DB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {t.registration.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-2 tracking-tight">
              {t.registration.heading}
            </h2>
            <p className="text-xs sm:text-sm text-[#555450] mt-2">
              <span className="bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-md border border-emerald-200 shadow-xs inline-block">
                {t.schedule.datesLabel} · {t.schedule.timeLabel}
              </span>{' '}
              {t.registration.introAt} {WORKSHOP_VENUE.address}
              {t.registration.introVenueSuffix} {t.registration.introSuffix}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#E6E3DB]">
              <div className="text-xs font-bold text-[#0284C7] uppercase tracking-widest mb-2">
                {t.registration.feeTitle}
              </div>
              <div className="space-y-1 text-sm text-[#333230]">
                <div>
                  <strong className="text-[#111113]">{money(PRICING.hrdcClaimable)}</strong>{' '}
                  {t.registration.feeHrdcSuffix} ({HRD_CORP_INFO.scheme})
                </div>
                <div>
                  <strong className="text-[#111113]">{money(PRICING.selfFunded)}</strong>{' '}
                  {t.registration.feeCashSuffix}
                </div>
              </div>
              <p className="text-[11px] text-[#777672] mt-2">{t.registration.groupDiscountNote}</p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#E6E3DB] flex items-center gap-4">
              <img
                src="./hrd-corp-claimable.png"
                alt={t.registration.claimableBadgeAlt}
                className="h-16 w-16 flex-shrink-0"
              />
              <img
                src="./hrd-corp-registered.png"
                alt={t.registration.registeredBadgeAlt}
                className="h-16 w-16 flex-shrink-0"
              />
              <div className="text-[11px] text-[#555450] leading-relaxed min-w-0">
                <div className="font-bold text-[#111113]">
                  {t.registration.programmeNoLabel}
                  {HRD_CORP_INFO.programmeNo}
                </div>
                <div>{HRD_CORP_INFO.scheme}</div>
                <div>
                  {t.registration.mycoidLabel}
                  {HRD_CORP_INFO.mycoid}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border-2 border-[#E6E3DB] shadow-lg">
            {formSubmitted && lastSubmittedLead ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#111113]">
                  {t.registration.thankYou(lastSubmittedLead.fullName)}
                </h3>
                <p className="text-sm text-[#44433F] max-w-lg mx-auto">
                  {t.registration.recordedFor}
                  <strong lang="en">{HRD_CORP_INFO.registeredCourseTitle}</strong>
                  {t.registration.recordedSuffix}
                </p>

                <div className="bg-white p-5 rounded-2xl border border-[#E6E3DB] max-w-md mx-auto text-left text-xs space-y-2 text-[#333230]">
                  <div className="font-bold text-sm text-[#0284C7] border-b pb-2 mb-2 flex items-center justify-between gap-2">
                    <span>{t.registration.summaryTitle}</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      {t.registration.summaryLabels.id}
                      {lastSubmittedLead.id}
                    </span>
                  </div>
                  <div>
                    <strong>{t.registration.summaryLabels.name}</strong>
                    {lastSubmittedLead.fullName}
                  </div>
                  <div>
                    <strong>{t.registration.summaryLabels.email}</strong>
                    {lastSubmittedLead.email}
                  </div>
                  <div>
                    <strong>{t.registration.summaryLabels.phone}</strong>
                    {lastSubmittedLead.phone}
                  </div>
                  <div>
                    <strong>{t.registration.summaryLabels.company}</strong>
                    {lastSubmittedLead.companyName}
                  </div>
                  <div>
                    <strong>{t.registration.summaryLabels.paymentMethod}</strong>
                    {lastSubmittedLead.paymentMethod === 'HRDC'
                      ? t.registration.paymentHrdc
                      : t.registration.paymentCash}
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 max-w-md mx-auto space-y-2 text-left">
                  <strong className="block">{t.registration.nextTitle}</strong>
                  <p>{t.registration.nextBody}</p>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={handleRegisterAnother}
                    className="px-6 py-2.5 bg-[#262629] text-white text-xs font-bold rounded-lg hover:bg-[#38383D] transition-all shadow-sm"
                  >
                    {t.registration.registerAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-5">
                {!isSubmissionConfigured && (
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-700" />
                    <span>
                      <strong className="block mb-0.5">{t.registration.notConfiguredTitle}</strong>
                      {t.registration.notConfiguredBody}
                    </span>
                  </div>
                )}

                {submitError && (
                  <div
                    role="alert"
                    className="p-4 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-900 flex items-start gap-2.5"
                  >
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
                    <span>
                      <strong className="block mb-0.5">{t.registration.errorTitle}</strong>
                      {submitError}
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reg-fullname" className="block text-xs font-bold text-[#222126] mb-1">
                      {t.registration.labels.fullName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="reg-fullname"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={t.registration.placeholders.fullName}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-email" className="block text-xs font-bold text-[#222126] mb-1">
                      {t.registration.labels.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="reg-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={t.registration.placeholders.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reg-phone" className="block text-xs font-bold text-[#222126] mb-1">
                      {t.registration.labels.phone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="reg-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      required
                      autoComplete="tel"
                      placeholder={t.registration.placeholders.phone}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-company" className="block text-xs font-bold text-[#222126] mb-1">
                      {t.registration.labels.company} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="reg-company"
                      name="companyName"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder={t.registration.placeholders.company}
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#222126] mb-2">
                    {t.registration.labels.paymentMethod} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      htmlFor="reg-payment-hrdc"
                      className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-colors ${
                        formData.paymentMethod === 'HRDC'
                          ? 'border-[#0284C7] bg-sky-50'
                          : 'border-[#DCD8CF] bg-white hover:bg-[#F7F5F0]'
                      }`}
                    >
                      <span className="flex items-center gap-2 text-xs font-bold text-[#222126]">
                        <input
                          id="reg-payment-hrdc"
                          type="radio"
                          name="paymentMethod"
                          value="HRDC"
                          checked={formData.paymentMethod === 'HRDC'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'HRDC' })}
                          className="accent-[#0284C7]"
                        />
                        {t.registration.paymentHrdc}
                      </span>
                      <span className="text-xs font-extrabold text-[#0284C7] whitespace-nowrap">
                        {money(PRICING.hrdcClaimable)}
                      </span>
                    </label>

                    <label
                      htmlFor="reg-payment-cash"
                      className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-colors ${
                        formData.paymentMethod === 'Cash'
                          ? 'border-[#0284C7] bg-sky-50'
                          : 'border-[#DCD8CF] bg-white hover:bg-[#F7F5F0]'
                      }`}
                    >
                      <span className="flex items-center gap-2 text-xs font-bold text-[#222126]">
                        <input
                          id="reg-payment-cash"
                          type="radio"
                          name="paymentMethod"
                          value="Cash"
                          checked={formData.paymentMethod === 'Cash'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'Cash' })}
                          className="accent-[#0284C7]"
                        />
                        {t.registration.paymentCash}
                      </span>
                      <span className="text-xs font-extrabold text-[#0284C7] whitespace-nowrap">
                        {money(PRICING.selfFunded)}
                      </span>
                    </label>
                  </div>
                  <p className="text-[11px] text-[#777672] mt-2">{t.registration.groupDiscountNote}</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6E3DB]">
                  <div className="text-[11px] text-[#777672]">{t.registration.pdpaNote}</div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-[#0284C7] hover:bg-[#0369A1] disabled:bg-[#7FB8D8] disabled:cursor-not-allowed text-white text-xs font-extrabold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" /> {t.registration.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> {t.registration.submitIdle}
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* BEFORE YOU START */}
      <section id="prepare" className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#E6E3DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              {t.prepare.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              {t.prepare.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">{t.prepare.intro}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <ul className="lg:col-span-7 space-y-3">
              {t.prerequisites.map((item) => (
                <li
                  key={item.requirement}
                  className="bg-white rounded-2xl border border-[#E6E3DB] p-4 sm:p-5 flex items-start gap-3"
                >
                  <ClipboardList className="w-5 h-5 text-[#0284C7] flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#111113]">{item.requirement}</h3>
                    <p className="text-xs text-[#555450] leading-relaxed mt-1">{item.why}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#202024] text-white rounded-3xl p-6 border border-[#38383D] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0284C7]/10 blur-3xl rounded-full pointer-events-none" />
                <div className="relative space-y-3">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                    {t.prepare.folderEyebrow}
                  </span>
                  <h3 className="text-lg font-extrabold text-white">{t.prepare.folderTitle}</h3>
                  <p className="text-xs text-[#C5C4C0] leading-relaxed">
                    {t.prepare.folderBodyBefore}
                    <code className="text-sky-300">Documents</code>
                    {t.prepare.folderBodyMiddle}
                    <strong className="text-white">AI Workshop</strong>
                    {t.prepare.folderBodyAfter}
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    {t.prepare.folderItems.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center gap-2 bg-[#141416] border border-[#2B2B30] rounded-lg px-3 py-2"
                      >
                        <span className="font-mono text-sky-300 font-bold whitespace-nowrap">
                          {item.name}
                        </span>
                        <span className="text-[#9A9995]">{item.note}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-[#9A9995] leading-relaxed">
                    {t.prepare.folderNote}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-amber-300 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-extrabold text-amber-800 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" /> {t.prepare.switchTitle}
                </div>
                <p className="text-xs text-[#44433F] leading-relaxed">
                  {t.prepare.switchBodyBefore}
                  <strong>{t.prepare.switchBodyPath}</strong>
                  {t.prepare.switchBodyAfter}
                </p>
                <p className="text-[11px] text-[#777672] leading-relaxed">{t.prepare.switchNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="audience" className="py-12 sm:py-16 bg-white border-b border-[#E6E3DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              {t.audience.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-2 tracking-tight">
              {t.audience.heading}
            </h2>
            <p className="text-xs sm:text-sm text-[#555450] mt-1">{t.targetAudience}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.audienceRoles.map((role, index) => {
              const IconComp = AUDIENCE_ICONS[index];
              return (
                <div
                  key={role.title}
                  className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#E6E3DB] shadow-xs hover:border-[#0284C7] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0284C7] flex items-center justify-center mb-4 border border-sky-100">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#111113] mb-2">{role.title}</h3>
                  <p className="text-xs text-[#555450] leading-relaxed">{role.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-[#FAF8F5] rounded-2xl border border-[#E6E3DB] p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4">
            <Smartphone className="w-6 h-6 text-[#0284C7] flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#44433F] leading-relaxed">
              <strong className="text-[#111113]">{t.audience.managerNoteTitle}</strong>{' '}
              {t.audience.managerNoteBody}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 sm:py-16 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              {t.faq.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-2 tracking-tight">
              {t.faq.heading}
            </h2>
            <p className="text-xs sm:text-sm text-[#555450] mt-1">{t.faq.intro}</p>
          </div>

          <div className="space-y-4">
            {t.faqItems.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E6E3DB] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-panel`}
                    className="w-full p-5 text-left font-bold text-sm text-[#111113] flex items-center justify-between gap-4 hover:bg-[#F7F5F0]"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#777672] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#777672] flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div
                      id={`${faq.id}-panel`}
                      role="region"
                      className="px-5 pb-5 pt-4 text-xs text-[#555450] leading-relaxed border-t border-[#E8E5DC] bg-[#FAF8F5]"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-[#202024] text-white rounded-3xl p-6 sm:p-8 border border-[#38383D] shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284C7]/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative space-y-3">
              <h2 className="text-lg sm:text-2xl font-extrabold text-white">
                {t.faq.finalCtaHeading}
              </h2>
              <p className="text-xs sm:text-sm text-[#C5C4C0] max-w-2xl mx-auto">
                {t.faq.finalCtaBody}
              </p>
              <div className="pt-2">
                <a
                  href="#register-interest"
                  className="inline-flex px-8 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-extrabold rounded-xl shadow-md transition-all items-center gap-2"
                >
                  {t.faq.finalCta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
