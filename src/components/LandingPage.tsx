import React, { useState } from 'react';
import {
  AGENT_PARTS,
  COURSE_HIGHLIGHTS,
  FAQ_ITEMS,
  ORGANIZER_INFO,
  PREREQUISITES,
  PROMPT_RECIPE,
  RUNNING_EXAMPLE,
  WORKSHOP_DAYS
} from '../data/workshopData';
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
  jobRole: 'Finance / Admin Executive'
};

/** Icons for the four parts of an AI colleague, in the same order as AGENT_PARTS. */
const AGENT_PART_ICONS = [ScrollText, Sparkles, Plug, Brain];

/**
 * The six hands-on builds, in the order they happen. Sample prompts are shortened
 * extracts of the prompts printed in the participant handout (P6, P14, P18, P22,
 * P24, P26) — enough to show the shape of the instruction without giving the book away.
 */
const FEATURED_LABS = [
  {
    code: 'Lab 1',
    day: 'Day 1',
    title: 'Excel — A Workbook You Can Defend',
    category: 'Data & Reporting',
    duration: '2 hours',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    description:
      'Six months of raw invoice lines, deliberately imperfect in exactly the way real exported data is. Profile it before you build anything on top of it, decide what to fix and what to flag, then produce a summary workbook whose totals are live formulas rather than typed numbers.',
    keyOutcome:
      'Change one number in the source and the totals move — the test that separates a real workbook from a screenshot.',
    samplePrompt: `ROLE: You are a management accountant preparing the monthly sales pack for the
directors of Sinar Jaya Trading Sdn Bhd.

TASK: Summarise the January to June 2026 sales performance.

INPUT: Use only the file Sinar_Jaya_Sales_Data_Jan-Jun_2026.csv in the folder
"01 Data". Do not use any other source.

OUTPUT: Total sales in RM, the three highest-selling regions with their share,
the three highest-selling salespeople, the best and worst month, and two things
in the data you think are wrong or suspicious.

RULES:
- Show me the total figure you calculated so I can check it.
- If a region name appears more than once with different spelling, do not merge
  them silently - list them separately and flag it.
- Do not give me recommendations yet. Facts only.`
  },
  {
    code: 'Lab 2',
    day: 'Day 2',
    title: 'Word — The Management Report, and Its Template',
    category: 'Writing & House Style',
    duration: '1 hour 45',
    image:
      'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&w=1200&q=80',
    description:
      'Excel is judged on whether the numbers are right; Word is judged on whether it sounds right. You ban the three tells of AI-written text — empty openers, praise instead of facts, hedging — get to version 2, then freeze the result as a reusable house template.',
    keyOutcome:
      'A one-page report your manager will read, plus a template so next month starts from a format you already approved.',
    samplePrompt: `ROLE: You are the Finance and Admin Executive writing to the two directors.

TASK: A one-page management report on the half-year sales performance.

INPUT: Only the summary workbook you built in Lab 1. Every figure must come
from that file - do not recalculate anything in your head.

OUTPUT: A Word file in "02 Outputs". Headings, short paragraphs, one page.

RULES:
- No empty openers. Do not begin with "In today's business environment".
- No adjectives about performance. Give me the number, not "impressive growth".
- Do not hedge. Say what the data shows, or say you do not know.`
  },
  {
    code: 'Lab 3',
    day: 'Day 2',
    title: 'PowerPoint — An 8-Slide Board Deck',
    category: 'Presentations',
    duration: '1 hour',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    description:
      'Fast, because you already have the content. The principle of this lab is one line long: never ask for a deck from nothing — ask for a deck from a document you have already checked, so your review is only about presentation.',
    keyOutcome:
      'Eight slides with speaker notes on every one, every figure traceable back to your workbook.',
    samplePrompt: `ROLE: You are preparing slides for the two directors of Sinar Jaya Trading
Sdn Bhd for a 15 minute half-year review meeting.

INPUT: The management report you approved in Lab 2. Nothing else.

OUTPUT: An 8-slide PowerPoint file in "02 Outputs", with speaker notes on
every slide.

RULES:
- Six lines of text per slide maximum. If it does not fit, it goes in the notes.
- Every chart must be built from a figure that appears in the report.
- No slide may contain a number that is not in the report.`
  },
  {
    code: 'Module 4',
    day: 'Day 2',
    title: 'Scanned PDFs — Invoice Data Without Typing',
    category: 'Unstructured Data & OCR',
    duration: '1 hour',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    description:
      'A supplier invoice that is a photograph, not text. You extract it against a fixed JSON schema — a blank form filled in the same way every time — with an honest confidence rating, then turn it into a register a human can check in under two minutes.',
    keyOutcome:
      'An invoice register with live variance formulas, amber flags on low-confidence fields, and blank Reviewed By / Approved columns. It removes the typing; the judgement stays with you.',
    samplePrompt: `Extract this scanned invoice into the following fields:

invoice_number, invoice_date, supplier_name, line_items[], sales_tax_amount,
delivery_charge, total_payable, bank_account_number,
extraction_confidence   (high, medium or low - your own honest assessment)
fields_needing_review   (a list of any field a human should check)

Give it to me as JSON. All amounts as plain numbers with two decimal places,
no currency symbol and no thousands separator - so 16734.00, not RM 16,734.00.`
  },
  {
    code: 'Module 5',
    day: 'Day 2',
    title: 'Dispatch & Scheduled Tasks',
    category: 'Remote and Automatic',
    duration: '30 minutes',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Two ways to get work out of your AI colleague without sitting in front of your laptop. Dispatch is a message from your phone to a colleague sitting at your desk. A scheduled task is a standing instruction to that colleague — every Monday at 8am, before you arrive.',
    keyOutcome:
      'Includes the security conversation: for a finance department, use Dispatch to read and summarise. Do the writing, sending and approving at your desk.',
    samplePrompt: `Look in my AI Workshop folder, open the sales summary workbook, and tell me
the three regions with the highest sales and their RM totals.

Just reply here with the numbers. Do not create a file.

[ Sent from your phone, with your laptop awake across the room. ]`
  },
  {
    code: 'Capstone',
    day: 'Day 2',
    title: 'Build a Digital Colleague, Demo It Live',
    category: 'Group Build',
    duration: '90 min + demos',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    description:
      'Groups of three or four. Choose reconciliation, HR document automation, scheduled sales reporting — or, best of all, a real task from somebody in the group’s actual job. Ninety minutes to build, five minutes to present, demonstrated live in front of the room.',
    keyOutcome:
      'Assessed on whether it actually works, the quality of the system prompt, and honesty about limits. Groups claiming their agent needs no supervision score lowest.',
    samplePrompt: `We are building an AI assistant for [scenario].

Before we write any prompts, interview me. Ask me up to eight questions,
one at a time, that you need answered in order to write a good system
prompt for this job. Cover: who the users are, what the inputs are, what
the outputs must look like, the house rules, and what would count as a
serious mistake.

After my answers, draft the system prompt. Then stop - do not start the
work until we approve it.`
  }
];

const AUDIENCE_ROLES = [
  {
    title: 'Finance & Admin Executives',
    desc: 'The role the whole course is written around. Reports your manager keeps asking for, built by hand every month — this is where the two days pay for themselves first.',
    icon: FileSpreadsheet
  },
  {
    title: 'Operations & Office Managers',
    desc: 'Supplier invoices, letters, memos and weekly packs. Learn to configure one agent properly rather than writing one clever request at a time.',
    icon: Building2
  },
  {
    title: 'Team Leads Evaluating AI',
    desc: 'You need to know what an agent can actually do, what it must never be trusted with, and what a sensible review step looks like before you roll it out.',
    icon: Users
  },
  {
    title: 'Professional Practices',
    desc: 'Audit, tax, secretarial and advisory teams that produce documents from data, and want a house style enforced by a template instead of by memory.',
    icon: Landmark
  }
];

export const LandingPage: React.FC = () => {
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
  const agendaDay = WORKSHOP_DAYS.find((day) => day.dayNumber === activeDay) || WORKSHOP_DAYS[0];

  // Registrations go straight into the workshop Google Sheet through the Apps Script
  // endpoint — nothing is kept in the visitor's browser.
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const lead = buildLead(formData);

    try {
      await submitLeadToSheet(lead);
      setLastSubmittedLead(lead);
      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'We could not save your registration just now. Please try again.'
      );
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

  const lab = FEATURED_LABS[selectedLab];

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
                  <Bot className="w-4 h-4" /> 2-Day Practical Hands-On Training
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111113] tracking-tight leading-tight mb-3">
                  AI Agents &amp; <span className="text-[#0284C7]">Skills Configuration</span>
                </h1>
                <p className="text-base sm:text-xl font-semibold text-[#3D3C42] mb-4">
                  {ORGANIZER_INFO.subtitle}
                </p>

                <div className="bg-[#262629] text-[#F3F2EE] p-5 rounded-2xl shadow-lg border border-[#3A3A3E] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284C7]/20 blur-3xl rounded-full pointer-events-none" />
                  <p className="text-sm sm:text-base leading-relaxed font-normal text-[#E0DFDC]">
                    “{ORGANIZER_INFO.heroQuote}”
                  </p>
                  <div className="mt-3 pt-3 border-t border-[#404046] flex items-center justify-between text-xs text-sky-300">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-400" /> Written for people who do not work in IT
                    </span>
                    <span className="text-[#A5A4A0]">{ORGANIZER_INFO.brandName}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white border-2 border-[#E5E1D8] p-5 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-4 shadow-sm">
                <a
                  href="#register-interest"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-base font-extrabold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Register Interest <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#agenda"
                  className="w-full sm:w-auto px-6 py-3.5 text-[#333230] text-sm font-bold rounded-xl border border-[#DCD8CF] hover:bg-[#F2EFE8] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  See the full 2-day agenda
                </a>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-xl border border-[#E6E3DB] text-center shadow-xs">
                  <div className="text-2xl font-extrabold text-[#0284C7]">2 Days</div>
                  <div className="text-xs font-medium text-[#666562]">9:00 AM – 5:00 PM</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E6E3DB] text-center shadow-xs">
                  <div className="text-2xl font-extrabold text-[#111113]">0 Code</div>
                  <div className="text-xs font-medium text-[#666562]">No IT background needed</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E6E3DB] text-center shadow-xs">
                  <div className="text-2xl font-extrabold text-emerald-600">26 Prompts</div>
                  <div className="text-xs font-medium text-[#666562]">Yours to keep and reuse</div>
                </div>
              </div>
            </div>

            {/* Right: visual + takeaways */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E6E3DB] shadow-2xl group bg-[#262629]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Colleagues working through hands-on exercises on their laptops during a training session"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.visibility = 'hidden';
                  }}
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/90 via-[#111113]/40 to-transparent p-6 flex flex-col justify-end text-white">
                  <h2 className="text-lg sm:text-xl font-bold leading-tight text-white mb-1">
                    One worked example, carried across both days
                  </h2>
                  <p className="text-xs text-[#D8D7D3]">
                    {RUNNING_EXAMPLE.company} — {RUNNING_EXAMPLE.summary}
                  </p>
                </div>
              </div>

              <div className="bg-[#262629] text-white p-5 rounded-2xl border border-[#38383D] shadow-md space-y-3">
                <div className="flex items-center justify-between border-b border-[#3D3D42] pb-2 text-xs font-bold text-sky-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> What you leave with
                  </span>
                  <span className="text-[#A0A0A5] text-[11px]">Built by you, in the room</span>
                </div>
                <ul className="space-y-2 text-xs text-[#D0CFCA]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                    <span>
                      <strong>A configured AI colleague</strong> — your own system prompt, one connected
                      folder, and standing instructions it applies to every task from then on.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                    <span>
                      <strong>Real files on your own laptop</strong> — a workbook with live formulas, a
                      one-page management report, a reusable Word template, an 8-slide board deck and an
                      invoice register built from a scanned PDF.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                    <span>
                      <strong>A handout with every step in it</strong> — 26 prompts, a plain-English
                      glossary, a troubleshooting appendix, and a Monday-morning plan for the first month.
                    </span>
                  </li>
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
              The Core of the Course
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              What You Actually Configure
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">
              Think about hiring a new admin executive on Monday morning. Four things have to be true
              for that person to be useful — and an AI colleague needs exactly the same four. Learn the
              four names and half the jargon in this industry stops being frightening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {AGENT_PARTS.map((part, index) => {
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
                      Part {index + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#111113] mb-2">{part.technicalName}</h3>
                  <p className="text-xs text-[#555450] leading-relaxed flex-1">{part.meaning}</p>
                  <p className="mt-4 pt-3 border-t border-[#E6E3DB] text-[11px] text-[#777672] italic leading-relaxed">
                    A new colleague would call this: {part.humanEquivalent.toLowerCase()}
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
                    Module 3 · Prompt Engineering
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    The five-part recipe
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B5B4B0] mt-1 max-w-2xl">
                    You will not need all five parts every time — but when something comes back wrong,
                    the missing part is nearly always on this list.
                  </p>
                </div>
                <span className="text-[11px] text-[#888890] whitespace-nowrap">
                  Role · Task · Input · Output · Rules
                </span>
              </div>

              <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
                {PROMPT_RECIPE.map((part) => (
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
                  <strong className="block mb-0.5 text-amber-100">
                    The single most common beginner mistake
                  </strong>
                  People spend an hour typing one very long, very clever request — then wonder why the
                  second request comes back wrong. A brilliant one-off request is a chatbot. A good
                  system prompt is a colleague. Put your effort into the job description.
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
              Hands on the keyboard
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              Six Builds, One Running Example
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">
              {RUNNING_EXAMPLE.yourRole} {RUNNING_EXAMPLE.arc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: selector */}
            <div
              role="tablist"
              aria-label="Hands-on labs and modules"
              aria-orientation="vertical"
              className="lg:col-span-5 space-y-3"
            >
              {FEATURED_LABS.map((item, index) => {
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
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
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
                    src={lab.image}
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
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-[#0284C7] text-white font-extrabold text-xs rounded-md uppercase tracking-wider">
                        {lab.code} · {lab.day}
                      </span>
                      <span className="text-xs font-semibold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-500/30">
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
                  <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-amber-400" /> The kind of prompt you write in class
                    </span>
                    <span className="text-[10px] text-[#777672]">Plain English · zero code</span>
                  </div>
                  <pre className="text-[11px] sm:text-xs text-[#E0DFDC] bg-[#1C1C20] p-3 rounded-lg overflow-x-auto whitespace-pre-wrap font-mono border border-[#2B2B30]">
                    {lab.samplePrompt}
                  </pre>
                </div>

                <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 font-semibold flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Checkpoint:</strong> {lab.keyOutcome}
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="#register-interest"
                    className="px-5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
                  >
                    Register for the next batch <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-[#888890]">
                    {selectedLab + 1} of {FEATURED_LABS.length}
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
              Why This Course Is Different
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              An Agent Is Something You Configure
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">
              Most AI training teaches you to ask better questions. This one teaches you to set up a
              colleague once, so you stop having to ask.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSE_HIGHLIGHTS.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E6E3DB] hover:border-[#0284C7]/50 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#262629] text-white flex items-center justify-center text-sm font-bold shadow-xs">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-bold text-[#0284C7] bg-[#0284C7]/10 px-2.5 py-0.5 rounded-full">
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
              Full Curriculum
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              The Complete 2-Day Agenda
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">
              Every module, hour by hour, straight from the participant handout — so you know exactly
              what your team walks away with before you commit a seat.
            </p>
          </div>

          {/* Day selector */}
          <div className="flex justify-center mb-8">
            <div
              role="tablist"
              aria-label="Select workshop day"
              className="bg-white p-1.5 rounded-xl border border-[#E6E3DB] inline-flex items-center gap-2 shadow-xs"
            >
              {WORKSHOP_DAYS.map((day) => (
                <button
                  key={day.dayNumber}
                  role="tab"
                  aria-selected={activeDay === day.dayNumber}
                  onClick={() => setActiveDay(day.dayNumber)}
                  className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                    activeDay === day.dayNumber
                      ? 'bg-[#0284C7] text-white shadow-xs'
                      : 'text-[#555450] hover:text-[#111113] hover:bg-[#EAE7DF]'
                  }`}
                >
                  <Calendar className="w-4 h-4" /> Day {day.dayNumber}
                </button>
              ))}
            </div>
          </div>

          {/* Day overview */}
          <div className="bg-[#202024] text-white rounded-3xl p-6 sm:p-8 border border-[#38383D] shadow-xl relative overflow-hidden mb-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284C7]/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Day {agendaDay.dayNumber}
              </span>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white mt-1">{agendaDay.theme}</h3>
              <p className="text-xs sm:text-sm text-sky-200 font-semibold mt-1">{agendaDay.subTitle}</p>
              <p className="text-xs sm:text-sm text-[#D5D4D0] mt-3 leading-relaxed">
                {agendaDay.description}
              </p>

              <div className="mt-5 pt-4 border-t border-[#3A3A3E] flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#B5B4B0]">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-sky-400" />
                  <strong className="text-white">
                    {agendaDay.modules.filter((m) => !m.isBreak).length}
                  </strong>{' '}
                  sessions
                </span>
                <span className="flex items-center gap-1.5">
                  <Play className="w-4 h-4 text-emerald-400" />
                  <strong className="text-white">
                    {agendaDay.modules.reduce((total, m) => total + m.stages.length, 0)}
                  </strong>{' '}
                  guided stages
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
                    {module.breakType === 'lunch' ? 'Lunch break' : 'Refreshment break'} ·{' '}
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
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#0284C7] bg-sky-50 border border-sky-200 rounded-lg px-2.5 py-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {module.startTime}–{module.endTime}
                    </span>
                    <span className="hidden sm:block text-[10px] font-semibold text-[#8A8983] uppercase tracking-wider">
                      {module.format}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-sm font-bold text-[#111113]">{module.title}</h3>
                      {module.handoutSource && (
                        <span className="text-[10px] font-semibold text-[#777672] bg-[#FAF8F5] border border-[#E6E3DB] px-2 py-0.5 rounded">
                          Handout: {module.handoutSource}
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
                            {stage.promptCode} · {stage.durationMinutes} min
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
              Timings are indicative — the trainer moves at the pace of the room, and every step is in
              your handout so you can repeat it at your own desk afterwards.{' '}
              <strong className="text-[#111113]">Workshop dates are still to be confirmed.</strong>
            </p>
            <a
              href="#register-interest"
              className="px-6 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-extrabold rounded-xl shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Register Interest <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="register-interest" className="py-12 sm:py-16 bg-white border-b border-[#E6E3DB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Register Interest · No Payment Required
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-2 tracking-tight">
              Express Your Interest
            </h2>
            <p className="text-xs sm:text-sm text-[#555450] mt-2">
              <span className="bg-yellow-200 text-yellow-950 font-extrabold px-2 py-0.5 rounded-md border border-yellow-300/80 shadow-xs inline-block">
                Dates and venue are to be confirmed
              </span>{' '}
              (TBC). Register now for date updates, seat availability, and in-house corporate training
              quotes.
            </p>
          </div>

          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border-2 border-[#E6E3DB] shadow-lg">
            {formSubmitted && lastSubmittedLead ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#111113]">
                  Thank You, {lastSubmittedLead.fullName}!
                </h3>
                <p className="text-sm text-[#44433F] max-w-lg mx-auto">
                  Your interest in <strong>AI Agents &amp; Skills Configuration</strong> has been
                  recorded.
                </p>

                <div className="bg-white p-5 rounded-2xl border border-[#E6E3DB] max-w-md mx-auto text-left text-xs space-y-2 text-[#333230]">
                  <div className="font-bold text-sm text-[#0284C7] border-b pb-2 mb-2 flex items-center justify-between">
                    <span>Registration Summary</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      ID: {lastSubmittedLead.id}
                    </span>
                  </div>
                  <div><strong>Name:</strong> {lastSubmittedLead.fullName}</div>
                  <div><strong>Email:</strong> {lastSubmittedLead.email}</div>
                  <div><strong>Phone:</strong> {lastSubmittedLead.phone}</div>
                  <div><strong>Company:</strong> {lastSubmittedLead.companyName}</div>
                  <div><strong>Job Role:</strong> {lastSubmittedLead.jobRole}</div>
                </div>

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 max-w-md mx-auto space-y-2">
                  <strong className="block">What happens next?</strong>
                  <p>
                    Our training team will email you as soon as the exact dates, venue and seat
                    reservations are finalised. In the meantime, work through “Before You Start” below —
                    arriving with setup done puts you ahead of the room.
                  </p>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={handleRegisterAnother}
                    className="px-6 py-2.5 bg-[#262629] text-white text-xs font-bold rounded-lg hover:bg-[#38383D] transition-all shadow-sm"
                  >
                    Register Another Person / Team
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-5">
                {!isSubmissionConfigured && (
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-700" />
                    <span>
                      <strong className="block mb-0.5">Not connected to the leads sheet yet.</strong>
                      Deploy the Apps Script in{' '}
                      <code className="bg-amber-100 px-1 py-0.5 rounded">google-apps-script/</code> and
                      paste its URL into{' '}
                      <code className="bg-amber-100 px-1 py-0.5 rounded">src/lib/leadSubmission.ts</code>.
                      Submissions will fail until then.
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
                      <strong className="block mb-0.5">Your registration was not saved.</strong>
                      {submitError}
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reg-fullname" className="block text-xs font-bold text-[#222126] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="reg-fullname"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Tan Wei Ming"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-email" className="block text-xs font-bold text-[#222126] mb-1">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="reg-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="e.g. name@yourcompany.com.my"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="reg-phone" className="block text-xs font-bold text-[#222126] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="reg-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      required
                      autoComplete="tel"
                      placeholder="e.g. +60 12-345 6789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-company" className="block text-xs font-bold text-[#222126] mb-1">
                      Company Name
                    </label>
                    <input
                      id="reg-company"
                      name="companyName"
                      type="text"
                      autoComplete="organization"
                      placeholder="e.g. Sinar Jaya Trading Sdn Bhd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-role" className="block text-xs font-bold text-[#222126] mb-1">
                      Job Role
                    </label>
                    <select
                      id="reg-role"
                      name="jobRole"
                      value={formData.jobRole}
                      onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#DCD8CF] text-xs focus:ring-2 focus:ring-[#0284C7] focus:border-transparent outline-none"
                    >
                      <option value="Finance / Admin Executive">Finance / Admin Executive</option>
                      <option value="Accountant / Accounts Executive">Accountant / Accounts Executive</option>
                      <option value="Finance Manager / Director">Finance Manager / Director</option>
                      <option value="Operations / Office Manager">Operations / Office Manager</option>
                      <option value="HR / Administration">HR / Administration</option>
                      <option value="Audit / Tax Professional">Audit / Tax Professional</option>
                      <option value="Business Owner / Partner">Business Owner / Partner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6E3DB]">
                  <div className="text-[11px] text-[#777672]">
                    🔒 Your details are kept confidential under PDPA by {ORGANIZER_INFO.brandName}.
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-[#0284C7] hover:bg-[#0369A1] disabled:bg-[#7FB8D8] disabled:cursor-not-allowed text-white text-xs font-extrabold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Submit Interest Registration
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
              Part 0 · Before You Start
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-3 tracking-tight">
              Arrive With This Done
            </h2>
            <p className="text-sm sm:text-base text-[#555450] mt-2">
              Six things to sort out before Day 1. Most of them can be fixed in ten minutes — except the
              one that needs your IT department, which is exactly why it is on this page and not in the
              welcome pack.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <ul className="lg:col-span-7 space-y-3">
              {PREREQUISITES.map((item) => (
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
                    Section 0.5
                  </span>
                  <h3 className="text-lg font-extrabold text-white">Create one clean folder</h3>
                  <p className="text-xs text-[#C5C4C0] leading-relaxed">
                    Your AI colleague can only see folders you specifically show it — it cannot browse
                    your whole computer. In <code className="text-sky-300">Documents</code>, create a
                    folder named exactly <strong className="text-white">AI Workshop</strong> with three
                    folders inside it:
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    <li className="flex items-center gap-2 bg-[#141416] border border-[#2B2B30] rounded-lg px-3 py-2">
                      <span className="font-mono text-sky-300 font-bold">01 Data</span>
                      <span className="text-[#9A9995]">— things you gave it</span>
                    </li>
                    <li className="flex items-center gap-2 bg-[#141416] border border-[#2B2B30] rounded-lg px-3 py-2">
                      <span className="font-mono text-sky-300 font-bold">02 Outputs</span>
                      <span className="text-[#9A9995]">— things it made for you</span>
                    </li>
                    <li className="flex items-center gap-2 bg-[#141416] border border-[#2B2B30] rounded-lg px-3 py-2">
                      <span className="font-mono text-sky-300 font-bold">03 Templates</span>
                      <span className="text-[#9A9995]">— your reusable house styles</span>
                    </li>
                  </ul>
                  <p className="text-[11px] text-[#9A9995] leading-relaxed">
                    Keeping them apart is a habit that saves real time later — you never have to ask “is
                    this the file I gave it, or the file it made?”
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-amber-300 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-extrabold text-amber-800 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" /> The one switch everybody forgets
                </div>
                <p className="text-xs text-[#44433F] leading-relaxed">
                  Claude ships with <strong>Code execution and file creation</strong> switched off.
                  Nothing in this course works until you turn it on: your profile picture ›{' '}
                  <strong>Settings</strong> › <strong>Capabilities</strong> › switch it{' '}
                  <strong>ON</strong>. It takes twenty seconds, and forgetting it is the single most
                  common reason a participant gets stuck.
                </p>
                <p className="text-[11px] text-[#777672] leading-relaxed">
                  On Team and Enterprise plans your organisation’s Claude administrator controls this
                  setting. If it is greyed out, ask them to enable it before Day 1.
                </p>
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
              Who Should Attend
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-2 tracking-tight">
              For the People Who Build the Reports
            </h2>
            <p className="text-xs sm:text-sm text-[#555450] mt-1">
              {ORGANIZER_INFO.targetAudience}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCE_ROLES.map((role) => {
              const IconComp = role.icon;
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
              <strong className="text-[#111113]">A note for managers evaluating this for a team.</strong>{' '}
              Day 2 covers Dispatch — giving a phone the ability to act on a work computer. The course
              teaches it alongside the security conversation you should have first: check your IT policy,
              lock your phone, and adopt the sensible finance-department rule of using it to read and
              summarise, never to send or approve. In-house corporate batches can have that section
              tailored to your own policy.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 sm:py-16 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111113] mt-2 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#555450] mt-1">
              Everything you need to know before booking a seat.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => {
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
                Ready to stop building the same report by hand?
              </h2>
              <p className="text-xs sm:text-sm text-[#C5C4C0] max-w-2xl mx-auto">
                Register your interest and we will email you the moment dates are confirmed. Corporate
                in-house batches can be run at your office with the labs adapted to your own files.
              </p>
              <div className="pt-2">
                <a
                  href="#register-interest"
                  className="inline-flex px-8 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-extrabold rounded-xl shadow-md transition-all items-center gap-2"
                >
                  Register Interest <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
