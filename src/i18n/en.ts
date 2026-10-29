import { SiteContent } from './types';

/**
 * English content. This is the source of truth for wording; zh.ts mirrors it
 * one-for-one, so anything added here needs a matching entry there (TypeScript
 * will refuse to compile if it is missing).
 *
 * Curriculum follows the YK AI Training slide deck (yk-ai-training.vercel.app).
 */
export const en: SiteContent = {
  htmlLang: 'en',
  documentTitle: 'AI Agents for Business 101 | YKCC',
  metaDescription:
    'A 2-day hands-on workshop for Malaysian SME teams: pick the right AI use cases, set Claude up as a digital colleague, analyse your own business data, then build dashboards, web pages and small apps — and scale up to a team of AI agents. No coding required.',

  courseTitleLead: 'AI Agents for',
  courseTitleAccent: 'Business 101',

  subtitle: 'Building AI Agents as Digital Colleagues for Business Productivity',
  tagline:
    'Two days that take you from “chatting with AI” to delegating real work to it — your files, your data, your tools — and reviewing the result.',
  heroQuote:
    'A chatbot answers questions. Set up properly, Claude remembers your context, reaches your tools, acts on your files and the web, runs on a schedule, and scales into a team. Your job shifts from typing every step to writing the brief and checking the result — exactly how you would manage a capable analyst.',
  targetAudience:
    'Written for people who do not work in IT. If you can use email and Microsoft Office, you can do everything in this course — including the day you build a web page.',

  schedule: {
    batches: [
      {
        id: 'nov04',
        datesLabel: '4 & 5 November 2026',
        datesShort: '4–5 Nov',
        languageLabel: 'Conducted in Mandarin'
      },
      {
        id: 'nov24',
        datesLabel: '24 & 25 November 2026',
        datesShort: '24–25 Nov',
        languageLabel: 'Conducted in Mandarin'
      }
    ],
    timeLabel: '9:00 AM – 5:00 PM'
  },

  header: {
    skipToContent: 'Skip to main content',
    brandSubline: 'YKCC · 2-Day Hands-On Training',
    navLabel: 'Section navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    registerCta: 'Register Now',
    languageLabel: 'Language'
  },

  nav: [
    { href: '#anatomy', label: 'The Approach' },
    { href: '#labs', label: 'Labs' },
    { href: '#trainer', label: 'Trainer' },
    { href: '#agenda', label: 'Agenda' },
    { href: '#prepare', label: 'Before You Start' },
    { href: '#faq', label: 'FAQ' }
  ],

  hero: {
    badge: '2-Day Practical Hands-On Training',
    quoteFooter: 'Stop chatting. Start delegating.',
    ctaPrimary: 'Register Now',
    ctaSecondary: 'See the full 2-day agenda',
    stats: [
      { value: 'Nov 24–25', label: 'Mandarin · 9:00 AM – 5:00 PM' },
      { value: '48 Labs', label: 'Copy-paste prompts in your pack' },
      { value: '0 Code', label: 'No IT background needed' }
    ],
    imageAlt: 'Colleagues working through hands-on exercises on their laptops during a training session',
    visualTitle: 'Shown live, then done by you',
    visualBody:
      'Every topic is shown live first, then you do it yourself on your own machine. You leave with things that work — not notes about things that might.',
    takeawaysTitle: 'What you leave with',
    takeawaysNote: 'Built by you, in the room',
    takeaways: [
      {
        lead: 'An AI plan for your business',
        rest:
          '— four worksheets that score your pain points on Impact × Ease and redesign one process with a human sign-off built in.'
      },
      {
        lead: 'A working Claude setup',
        rest:
          '— projects with standing instructions, your own Skills, connectors, browser control and a routine that runs on a clock.'
      },
      {
        lead: 'Things you can share',
        rest:
          '— a live dashboard, a landing page, a small web tool published as an Artifact, and a team of agents that reviews the month-end close.'
      },
      {
        lead: 'The full participant pack',
        rest: '— the slide deck, all 48 labs with copy-paste prompts, lab files and ready-made Skills.'
      }
    ]
  },

  anatomy: {
    eyebrow: 'The Mental Model',
    heading: 'Four Layers of Leverage',
    intro:
      'A chatbot is one layer: you ask, it answers. Everything in this course adds another layer on top, until Claude behaves less like a search box and more like a colleague you brief and review.',
    partLabel: (index: number) => `Layer ${index}`,
    humanEquivalentPrefix: 'You learn it through:'
  },

  recipe: {
    eyebrow: 'AI for Better Decisions',
    heading: 'Ask like a business owner, not a programmer',
    intro:
      'A question we work through in class. It works because it gives Claude a role, the facts, the output you want — and asks it what it still needs before it starts.',
    sideNote: 'Role · Task · Input · Output · Rules',
    warningTitle: 'Technical questions get technical answers',
    warningBody:
      '“Create a pivot table by customer” gets you a pivot table. “Which customers are buying less than last year, and by how much?” gets you a decision. Ask the business question and let Claude work out the spreadsheet.'
  },

  labs: {
    eyebrow: 'Class Exercises',
    heading: 'What You Will Practise — and Who It Helps',
    intro:
      'Every exercise is built around a job that eats time in a real Malaysian SME. For each one you will see why it matters, how it is done in class, and which part of the business gets the benefit.',
    subIntro: 'Pick an exercise to see the details. All of them are in your participant pack to repeat at your desk.',
    tablistLabel: 'Class exercises',
    purposeLabel: 'Why it matters',
    howLabel: 'How we do it in class',
    helpsLabel: 'How it helps',
    beneficiariesLabel: 'Who benefits',
    cta: 'Register for the next batch',
    counter: (current: number, total: number) => `${current} of ${total}`
  },

  benefits: {
    eyebrow: 'Why This Course Is Different',
    heading: 'Strategy First, Then the Tools',
    intro:
      'Most AI training starts with the tool. This one starts with your business — which problems are worth solving — and only then shows you how to hand them to Claude.'
  },

  trainer: {
    eyebrow: 'Your Trainer',
    name: 'Wong Yew Choon',
    title: 'Tax, e-Invoicing, SST & GST Specialist',
    bio:
      'An accountant who has spent his career making tax rules and systems work for real businesses, now learning AI alongside you, with a practical, no-jargon approach.',
    imageAlt: 'Trainer Wong Yew Choon',
    credentials: [
      {
        title: 'Tax & compliance',
        desc: 'Has guided hundreds of businesses through the implementation of GST, SST and e-Invoicing.'
      },
      {
        title: 'ERP implementation',
        desc: 'Prior experience in new ERP implementation in a multinational company.'
      },
      {
        title: 'Excel & data analysis',
        desc: 'VBA, Excel reporting, business data analysis and process improvement.'
      },
      {
        title: 'Learning AI, like you',
        desc: 'Started this year: first self-taught from YouTube, then through formal classes.'
      }
    ]
  },

  agenda: {
    eyebrow: 'Full Curriculum',
    heading: 'The Complete 2-Day Agenda',
    intro:
      'Day 1 sets Claude up and points it at your data. Day 2 makes things you can share, then scales up to a team of agents.',
    daySelectLabel: 'Select workshop day',
    dayLabel: (day: number) => `Day ${day}`,
    sessionsLabel: 'sessions',
    stagesLabel: 'labs & demos',
    handoutLabel: 'Slides: ',
    formatLabels: {
      Lecture: 'Lecture',
      'Hands-on': 'Hands-on',
      Demonstration: 'Demonstration',
      Laboratory: 'Laboratory',
      'Group build': 'Group build',
      Plenary: 'Plenary'
    },
    lunchBreak: 'Lunch break',
    teaBreak: 'Refreshment break',
    minuteSuffix: 'min',
    footnote:
      'Timings are indicative. The pack holds 48 labs — more than two days can cover — so the trainer picks the ones that fit the room, and every lab is in your pack to repeat at your own desk.',
    footnoteDates:
      'Workshop dates: 24 & 25 November 2026, 9:00 AM – 5:00 PM. The 4 & 5 November batch is full.',
    cta: 'Register Now'
  },

  registration: {
    eyebrow: 'Dates Confirmed · Seats Limited',
    heading: 'Reserve Your Seat',
    introAt: 'at',
    introVenueSuffix: '.',
    introSuffix: 'Register now to reserve a seat, or enquire about in-house corporate training.',
    feeTitle: 'Course Fee (per participant)',
    feeHrdcSuffix: '— HRDC',
    feeCashSuffix: '— CASH',
    groupDiscountNote:
      'Group offer: the first participant pays the full fee; the 2nd participant onwards from the same group of companies gets 30% off.',
    programmeNoLabel: 'Programme No: ',
    mycoidLabel: 'MYCoID: ',
    registeredBadgeAlt: 'HRD Corp Registered Training Provider',
    labels: {
      fullName: 'Full Name',
      email: 'Business Email',
      phone: 'Phone Number',
      company: 'Company Name',
      paymentMethod: 'Payment Method',
      batch: 'Training Dates'
    },
    placeholders: {
      fullName: 'e.g. Tan Wei Ming',
      email: 'e.g. name@yourcompany.com.my',
      phone: 'e.g. +60 12-345 6789',
      company: 'e.g. Maju Jaya Trading Sdn Bhd'
    },
    batchNote: 'Both batches are the same course, conducted in Mandarin. The 4 & 5 November batch is full.',
    batchFullLabel: 'FULL',
    paymentHrdc: 'HRDC',
    paymentCash: 'CASH',
    pdpaNote: '🔒 Your details are kept confidential under PDPA by YKCC.',
    submitIdle: 'Submit Registration',
    submitting: 'Submitting...',
    notConfiguredTitle: 'Not connected to the leads sheet yet.',
    notConfiguredBody:
      'Deploy the Apps Script in google-apps-script/ and paste its URL into src/lib/leadSubmission.ts. Submissions will fail until then.',
    errorTitle: 'Your registration was not saved.',
    genericError: 'We could not save your registration just now. Please try again.',
    thankYou: (name: string) => `Thank You, ${name}!`,
    recordedFor: 'Your registration for ',
    recordedSuffix: ' has been recorded.',
    summaryTitle: 'Registration Summary',
    summaryLabels: {
      id: 'ID: ',
      name: 'Name: ',
      email: 'Email: ',
      phone: 'Phone: ',
      company: 'Company: ',
      paymentMethod: 'Payment Method: ',
      batch: 'Training Dates: '
    },
    nextTitle: 'What happens next?',
    nextBody:
      'Our training team will contact you to confirm your seat and payment method, and send joining instructions ahead of the dates you chose. In the meantime, work through “Before You Start” below — the Cowork setup step needs administrator rights, so sort it out with IT now rather than on the day.',
    registerAnother: 'Register Another Person / Team'
  },

  prepare: {
    eyebrow: 'Before You Start',
    heading: 'Arrive With This Done',
    intro:
      'Six things to sort out before Day 1. Almost everyone who gets stuck in the first hour is missing one of these — usually administrator rights.',
    folderEyebrow: 'Good habit',
    folderTitle: 'Create one clean folder',
    folderBodyBefore:
      'Claude only sees the folders you choose to show it — never your whole computer. In ',
    folderBodyMiddle: ', create a folder named exactly ',
    folderBodyAfter: ' with three folders inside it:',
    folderItems: [
      { name: '01 Data', note: '— files you give it' },
      { name: '02 Outputs', note: '— files it makes for you' },
      { name: '03 Templates', note: '— your reusable house styles' }
    ],
    folderNote:
      'Unzip the participant pack into 01 Data on the morning of Day 1 and every lab file is where the prompts expect it.',
    switchTitle: 'The one step everybody forgets',
    switchBodyBefore: 'Cowork runs your tasks in a small virtual machine on your laptop, and Windows ships with ',
    switchBodyPath: 'Virtual Machine Platform',
    switchBodyAfter:
      ' switched off. It is a one-off fix — two lines pasted into Terminal (Admin), then a restart — and we send you the exact lines with your joining instructions. Without administrator rights it cannot be done.',
    switchNote:
      'Virtual desktops (VDI) and some locked-down corporate images cannot run Cowork at all. If that is your laptop, test it before Day 1 or bring a personal one.'
  },

  audience: {
    eyebrow: 'Who Should Attend',
    heading: 'For the People Who Run the Numbers and the Paperwork',
    managerNoteTitle: 'A note for managers evaluating this for a team.',
    managerNoteBody:
      'The course shows Claude acting on the web, reading your connected apps and — as an experimental lab — taking instructions over Telegram or WhatsApp. Every one of those is taught with the same golden rule: AI prepares, a human approves. Nothing is sent, paid or filed without a person checking it first. In-house batches can tailor these sections to your own IT policy.'
  },

  faq: {
    eyebrow: 'Got Questions?',
    heading: 'Frequently Asked Questions',
    intro: 'Everything you need to know before booking a seat.',
    finalCtaHeading: 'Ready to stop doing it all by hand?',
    finalCtaBody:
      'Register now to reserve your seat on 24 & 25 November 2026 — the 4 & 5 November batch is full. Corporate in-house batches can be run at your office with the labs adapted to your own files.',
    finalCta: 'Register Now'
  },

  footer: {
    logoAlt: 'YK Group',
    pdpaLine: 'Registration details are kept confidential in line with Malaysia’s PDPA.',
    exploreHeading: 'Explore',
    workshopHeading: 'The Workshop',
    facts: ['No coding background needed', 'Paid Claude plan required'],
    programmeNoLabel: 'Programme No: ',
    copyright: (year: number) => `© ${year} YKCC. All rights reserved.`,
    signOff: 'AI prepares. A human approves.'
  },

  agentParts: [
    {
      technicalName: 'Context',
      meaning:
        'Projects, memory and a CLAUDE.md file of standing instructions, so Claude knows your business before you type a word — and you stop re-explaining yourself every Monday.',
      humanEquivalent: 'Projects, CLAUDE.md, Skills and an Obsidian knowledge base'
    },
    {
      technicalName: 'Action',
      meaning:
        'Claude opens and saves real files, works inside Excel and PowerPoint, fills web forms in Chrome, and builds dashboards and tools you can click.',
      humanEquivalent: 'Cowork, Claude for Excel, Claude for Chrome, Artifacts and Claude Design'
    },
    {
      technicalName: 'Reach',
      meaning:
        'Permissioned links to Gmail, Drive, Calendar and your own systems. You grant each one; nothing is connected automatically.',
      humanEquivalent: 'Connectors, plugins and MCP'
    },
    {
      technicalName: 'Scale',
      meaning:
        'Work that runs itself on a clock, and a lead agent that hands parts of a big job to specialist agents and checks what comes back.',
      humanEquivalent: 'Routines, Dispatch and multi-agent teams'
    }
  ],

  promptRecipe: [
    {
      number: 1,
      name: 'Role',
      question: 'Who should Claude be?',
      example: 'As a senior business analyst…'
    },
    {
      number: 2,
      name: 'Task',
      question: 'What exactly must be done?',
      example: 'Advise how you would analyse the financial performance of a forklift rental client.'
    },
    {
      number: 3,
      name: 'Input',
      question: 'What are the facts?',
      example: 'The client has 412 forklifts and earns more than RM6 million in rental a year.'
    },
    {
      number: 4,
      name: 'Output',
      question: 'What must come back?',
      example: 'Your analysis framework, and the list of information you need from me.'
    },
    {
      number: 5,
      name: 'Rules',
      question: 'What are the limits?',
      example: 'Ask before you assume. Flag anything that must be checked against current tax and SST rules.'
    }
  ],

  courseHighlights: [
    {
      title: 'Strategy Before Tools',
      subtitle: 'Find the work worth automating',
      description:
        'Four worksheets take you from “where are we today?” to a scored list of pain points and one redesigned process — so the first thing you automate is the one that pays back.',
      metric: 'W1–W4',
      metricLabel: 'Impact × Ease, filled in for your business'
    },
    {
      title: 'Delegate, Don’t Chat',
      subtitle: '14 capabilities, one operating system',
      description:
        'Projects, Skills, browser control, connectors, Excel, routines, Design, Artifacts, vibe coding, MCP, knowledge bases and multi-agent teams — each shown live, then done by you.',
      metric: '14 Topics',
      metricLabel: 'Shown live, then hands-on'
    },
    {
      title: 'Build Things People Use',
      subtitle: 'Not just answers in a chat window',
      description:
        'A dashboard your boss can open, a landing page with a hero section, a small HTML tool published as an Artifact and added to a company portal — built by describing what you want.',
      metric: '0 Code',
      metricLabel: 'You describe it, Claude builds it'
    },
    {
      title: 'Human in the Loop',
      subtitle: 'The golden rule of the course',
      description:
        'AI prepares, a human approves. Every lab tells you what to check before anything is sent, paid, filed or published — and the capstone is judged on it.',
      metric: 'Human Sign-Off',
      metricLabel: 'AI prepares · you approve'
    }
  ],

  prerequisites: [
    {
      requirement: 'A laptop with administrator rights — Windows 10/11, or a Mac from 2020 or later',
      why:
        'Without admin rights Claude still installs, but Cowork will not run — and Cowork is how Claude works on your real files.'
    },
    {
      requirement: 'Claude Desktop installed, with Cowork switched on',
      why:
        'Download from claude.com/download. On Windows this includes the one-off Virtual Machine Platform step described on the right.'
    },
    {
      requirement: 'A paid Claude account — Pro, Max, Team or Enterprise',
      why: 'Cowork, file creation, Skills and connectors are not available on the free plan.'
    },
    {
      requirement: 'Google Chrome, with the Claude for Chrome extension',
      why: 'Used on Day 1 for the browser-control labs, such as filling a Form B on the MyTax simulator.'
    },
    {
      requirement: 'Microsoft Excel, Word and PowerPoint',
      why: 'So you can open and check what Claude produces, and try Claude for Excel and PowerPoint.'
    },
    {
      requirement: 'Your phone, and a free GitHub account (Day 2)',
      why:
        'The phone is for Dispatch and the optional Telegram / WhatsApp labs. GitHub is where your vibe-coded web page goes live — sign up at github.com before you come.'
    }
  ],

  workshopDays: [
    {
      dayNumber: 1,
      theme: 'Plan, Set Up, Analyse',
      subTitle: 'AI strategy · Better decisions · Claude foundations · Connect & automate',
      description:
        'Day 1 starts with your business, not the tool: where AI fits, which problems to pick first, and how to ask questions that lead to decisions. Then Claude gets set up properly — projects, Skills, browser, connectors, Excel and routines — and you run the labs on your own laptop.',
      modules: [
        {
          id: 'd1-registration',
          day: 1,
          startTime: '09:00',
          endTime: '09:30',
          title: 'Arrival & Setup Checkpoint',
          handoutSource: 'Setup',
          format: 'Plenary',
          objective:
            'Trainers walk the room: Claude Desktop installed, a paid plan showing, Cowork starting, Chrome extension added, and the participant pack unzipped into your AI Workshop folder.',
          stages: []
        },
        {
          id: 'd1-opening',
          day: 1,
          startTime: '09:30',
          endTime: '10:15',
          title: 'What AI Can Do for a Malaysian SME — Live',
          handoutSource: 'Introduction',
          format: 'Demonstration',
          objective:
            'Generative AI in plain English, what it does well and where it fails, and how real SMEs are using it. Then straight into live demos so you see the destination before the route.',
          stages: [
            {
              id: 'd1-opening-s1',
              promptCode: 'Demo',
              title: 'NotebookLM',
              durationMinutes: 10,
              description: 'Drop in a stack of documents and get grounded answers, summaries and an audio briefing.'
            },
            {
              id: 'd1-opening-s2',
              promptCode: 'Demo',
              title: 'YK Automation Portal and e-Invoice Explorer',
              durationMinutes: 15,
              description:
                'Working tools built with AI at YK — and how an e-Invoice explorer is set up against MyInvois.'
            }
          ]
        },
        {
          id: 'd1-strategy',
          day: 1,
          startTime: '10:15',
          endTime: '11:00',
          title: 'SME Strategy — Pick the Right Problems',
          handoutSource: 'SME Strategy',
          format: 'Hands-on',
          objective:
            'Where SMEs lose time, the four business goals every AI project must serve, and the Impact × Ease matrix. Map one process and put a human sign-off in the right place.',
          stages: [
            {
              id: 'd1-strategy-s1',
              promptCode: 'W1–W3',
              title: 'Maturity, pain points, your top 3',
              durationMinutes: 25,
              description: 'Score up to ten recurring tasks and plot them to find the three worth starting with.'
            },
            {
              id: 'd1-strategy-s2',
              promptCode: 'W4',
              title: 'Map and redesign a process',
              durationMinutes: 20,
              description: 'Quotation to collection, before and after — AI prepares, a human approves.'
            }
          ]
        },
        {
          id: 'd1-break-1',
          day: 1,
          startTime: '11:00',
          endTime: '11:15',
          title: 'Refreshment break',
          handoutSource: '',
          format: 'Plenary',
          objective: '',
          stages: [],
          isBreak: true,
          breakType: 'tea'
        },
        {
          id: 'd1-decisions',
          day: 1,
          startTime: '11:15',
          endTime: '12:30',
          title: 'AI for Better Decisions',
          handoutSource: 'Better Decisions',
          format: 'Hands-on',
          objective:
            'The data you already have, how to prepare it safely before uploading, and how to ask like a business owner. You see the exported Excel and the real Claude chat on screen, then do three new exercises yourself.',
          stages: [
            {
              id: 'd1-decisions-s1',
              promptCode: 'New',
              title: 'Forklift rental — the business analyst brief',
              durationMinutes: 20,
              description:
                '412 forklifts, RM6m+ revenue: what would you analyse, and what information do you need?'
            },
            {
              id: 'd1-decisions-s2',
              promptCode: 'New',
              title: 'Commission by staff per year, from the GL',
              durationMinutes: 20,
              description: 'From a raw GL listing to a staff-by-year commission table you can check.'
            },
            {
              id: 'd1-decisions-s3',
              promptCode: 'New',
              title: 'Rental income by tenant',
              durationMinutes: 20,
              description: 'A yearly summary that flags every tenant as on time, late or missing.'
            }
          ]
        },
        {
          id: 'd1-lunch',
          day: 1,
          startTime: '12:30',
          endTime: '13:30',
          title: 'Lunch',
          handoutSource: '',
          format: 'Plenary',
          objective: '',
          stages: [],
          isBreak: true,
          breakType: 'lunch'
        },
        {
          id: 'd1-foundations',
          day: 1,
          startTime: '13:30',
          endTime: '15:00',
          title: 'Foundations — Projects, CLAUDE.md and Skills',
          handoutSource: 'Topics 1–2',
          format: 'Laboratory',
          objective:
            'Where everything lives in Claude, standing instructions in CLAUDE.md, tokens and cost, choosing a model, and packaging know-how once as a Skill so the whole team can reuse it.',
          stages: [
            {
              id: 'd1-foundations-s1',
              promptCode: 'Lab 1',
              title: 'Fill sales orders from a list',
              durationMinutes: 20,
              description:
                'One Word template, four customer orders — Claude produces every sales order and checks the maths.'
            },
            {
              id: 'd1-foundations-s2',
              promptCode: 'Labs 2–4',
              title: 'Month-end project, file tidy-up, a reusable Skill',
              durationMinutes: 35,
              description: 'A “Monthly Close” project, file-name normalisation, and a variance-commentary Skill.'
            },
            {
              id: 'd1-foundations-s3',
              promptCode: 'Labs 5–10',
              title: 'Pick-and-mix: SEO, diagrams, proposals, CP204, HR',
              durationMinutes: 35,
              description: 'The trainer picks the labs that match the room; the rest are in your pack.'
            }
          ]
        },
        {
          id: 'd1-break-2',
          day: 1,
          startTime: '15:00',
          endTime: '15:15',
          title: 'Refreshment break',
          handoutSource: '',
          format: 'Plenary',
          objective: '',
          stages: [],
          isBreak: true,
          breakType: 'tea'
        },
        {
          id: 'd1-connect',
          day: 1,
          startTime: '15:15',
          endTime: '16:15',
          title: 'Connect & Automate — Browser, Connectors, Plugins',
          handoutSource: 'Topics 3–4',
          format: 'Laboratory',
          objective:
            'Claude for Chrome uses the web the way you do. Connectors and plugins plug it into the apps where your work already lives.',
          stages: [
            {
              id: 'd1-connect-s1',
              promptCode: 'Lab 11',
              title: 'Compute YA 2025, then fill the e-B',
              durationMinutes: 30,
              description: 'On the MyTax simulator — Claude fills the form, you check before anything is submitted.'
            },
            {
              id: 'd1-connect-s2',
              promptCode: 'Labs 12–14',
              title: 'Live prices, a live API, vendor reconciliation',
              durationMinutes: 30,
              description: 'Read public pages, call an API, and match contracts to invoices.'
            }
          ]
        },
        {
          id: 'd1-excel',
          day: 1,
          startTime: '16:15',
          endTime: '17:00',
          title: 'Excel, Routines and Your Mini CEO',
          handoutSource: 'Topics 5–7',
          format: 'Hands-on',
          objective:
            'Claude inside Excel for reconciliation and analysis, routines that run on a clock, and chained prompts that turn Claude into a market researcher, scenario planner and daily briefer.',
          stages: [
            {
              id: 'd1-excel-s1',
              promptCode: 'Labs 15–19',
              title: 'Reconciliation, margin analysis, 3-way match',
              durationMinutes: 25,
              description: 'Two-ledger reconciliation and PO / GRN / invoice matching in minutes.'
            },
            {
              id: 'd1-excel-s2',
              promptCode: 'Labs 20–26',
              title: 'A daily brief that emails itself',
              durationMinutes: 20,
              description: 'Set a routine once; it arrives every weekday before you do.'
            }
          ]
        }
      ]
    },
    {
      dayNumber: 2,
      theme: 'Build, Share, Scale',
      subTitle: 'Design & Artifacts · Vibe coding · MCP · Knowledge base · Multi-agent · Capstone',
      description:
        'Yesterday Claude worked on your files. Today it makes things other people use — images, video, dashboards, web pages and small apps — then connects to your own systems, keeps a second brain, and grows into a team of agents. The day closes with a group capstone, demonstrated live.',
      modules: [
        {
          id: 'd2-recap',
          day: 2,
          startTime: '09:00',
          endTime: '09:15',
          title: 'Recap and Objectives',
          handoutSource: 'Day 2 recap',
          format: 'Plenary',
          objective: 'Where we were, where we are going — and anything still broken from Day 1 gets fixed now.',
          stages: []
        },
        {
          id: 'd2-design',
          day: 2,
          startTime: '09:15',
          endTime: '10:15',
          title: 'Create — Claude Design, Photos and Video',
          handoutSource: 'Topic 8',
          format: 'Hands-on',
          objective:
            'Turn a description or your data into on-brand visuals, set up a design system once, and watch a product photo edited and turned into a short video.',
          stages: [
            {
              id: 'd2-design-s1',
              promptCode: 'Demo',
              title: 'Photo editing, then into a video',
              durationMinutes: 15,
              description: 'A plain product photo, cleaned up and turned into a short clip for social media.'
            },
            {
              id: 'd2-design-s2',
              promptCode: 'Labs 27–28',
              title: 'A landing page and a board one-pager',
              durationMinutes: 40,
              description: 'Styled by conversation, using a ready-made landing-page Skill.'
            }
          ]
        },
        {
          id: 'd2-artifacts',
          day: 2,
          startTime: '10:15',
          endTime: '11:00',
          title: 'Artifacts — Working Tools Inside the Chat',
          handoutSource: 'Topic 9',
          format: 'Laboratory',
          objective:
            'An Artifact is a live page or mini-app Claude builds beside the chat. Build two, then add one as a card on the YK Automation Portal.',
          stages: [
            {
              id: 'd2-artifacts-s1',
              promptCode: 'New',
              title: 'A landing page with a hero section and music',
              durationMinutes: 20,
              description: 'Your business, one page, background music — refined by conversation.'
            },
            {
              id: 'd2-artifacts-s2',
              promptCode: 'Labs 29–30',
              title: 'A live dashboard from your numbers',
              durationMinutes: 20,
              description: 'Paste the figures, get a board-ready dashboard you can share by link.'
            }
          ]
        },
        {
          id: 'd2-break-1',
          day: 2,
          startTime: '11:00',
          endTime: '11:15',
          title: 'Refreshment break',
          handoutSource: '',
          format: 'Plenary',
          objective: '',
          stages: [],
          isBreak: true,
          breakType: 'tea'
        },
        {
          id: 'd2-vibe',
          day: 2,
          startTime: '11:15',
          endTime: '12:30',
          title: 'Vibe Coding — From Prompt to Product',
          handoutSource: 'Topic 10',
          format: 'Laboratory',
          objective:
            'Describe the intent in plain English and let Claude Code write, run and fix the code. Three builds, each a step up from the last.',
          stages: [
            {
              id: 'd2-vibe-s1',
              promptCode: 'Build 1',
              title: 'An HTML tool, published and added to the portal',
              durationMinutes: 20,
              description: 'A small calculator or checker, published as an Artifact and linked from the portal.'
            },
            {
              id: 'd2-vibe-s2',
              promptCode: 'Build 2',
              title: 'A full Next.js landing page on GitHub',
              durationMinutes: 35,
              description: 'Your own photos, your tools embedded, pushed to GitHub so it is live.'
            },
            {
              id: 'd2-vibe-s3',
              promptCode: 'Build 3',
              title: 'A simple Next.js app',
              durationMinutes: 20,
              description: 'Idea → build → run → review → ship, the whole loop in one sitting.'
            }
          ]
        },
        {
          id: 'd2-lunch',
          day: 2,
          startTime: '12:30',
          endTime: '13:30',
          title: 'Lunch',
          handoutSource: '',
          format: 'Plenary',
          objective: '',
          stages: [],
          isBreak: true,
          breakType: 'lunch'
        },
        {
          id: 'd2-mcp',
          day: 2,
          startTime: '13:30',
          endTime: '14:15',
          title: 'MCP and a Second Brain',
          handoutSource: 'Topics 11–12',
          format: 'Hands-on',
          objective:
            'MCP is one standard plug for any system. Then build an Obsidian vault Claude maintains, and make it cite the note every answer came from.',
          stages: [
            {
              id: 'd2-mcp-s1',
              promptCode: 'Labs 32–35',
              title: 'Talk to Claude over Telegram or WhatsApp',
              durationMinutes: 15,
              description: 'Experimental — shown live, optional to try.'
            },
            {
              id: 'd2-mcp-s2',
              promptCode: 'Labs 36–39',
              title: 'Build and query your knowledge vault',
              durationMinutes: 30,
              description: 'Scattered notes into a linked vault, then grounded, cited answers.'
            }
          ]
        },
        {
          id: 'd2-multiagent',
          day: 2,
          startTime: '14:15',
          endTime: '15:15',
          title: 'Multi-Agent Systems — A Team of Claudes',
          handoutSource: 'Topic 13',
          format: 'Laboratory',
          objective:
            'One lead agent plans and hands parts of a job to specialists — a researcher, a builder, a reviewer — then checks what comes back. It is three markdown files, not a software project.',
          stages: [
            {
              id: 'd2-multiagent-s1',
              promptCode: 'Labs 40–42',
              title: 'Hire a team, run a job, ship a dashboard',
              durationMinutes: 35,
              description: 'Scaffold the team in one prompt and send one job through it.'
            },
            {
              id: 'd2-multiagent-s2',
              promptCode: 'Labs 43–48',
              title: 'Patterns: router, debate + judge, quality gate',
              durationMinutes: 25,
              description: 'Close review, customer-service routing, procurement and bids.'
            }
          ]
        },
        {
          id: 'd2-break-2',
          day: 2,
          startTime: '15:15',
          endTime: '15:30',
          title: 'Refreshment break',
          handoutSource: '',
          format: 'Plenary',
          objective: '',
          stages: [],
          isBreak: true,
          breakType: 'tea'
        },
        {
          id: 'd2-capstone',
          day: 2,
          startTime: '15:30',
          endTime: '16:30',
          title: 'Capstone — The Month-End Cockpit',
          handoutSource: 'Topic 14',
          format: 'Group build',
          objective:
            'One Claude project a finance or operations team would actually run every month, using everything from the two days.',
          stages: [
            {
              id: 'd2-capstone-s1',
              promptCode: 'Capstone',
              title: 'Project + Skill + routine + Artifact',
              durationMinutes: 60,
              description:
                'Standing instructions, a commentary Skill, a reminder routine and a close-status dashboard you demo to the room.'
            }
          ]
        },
        {
          id: 'd2-close',
          day: 2,
          startTime: '16:30',
          endTime: '17:00',
          title: 'Demos, Cowork by Role, and Close',
          handoutSource: 'Wrap-up',
          format: 'Plenary',
          objective:
            'Groups demo live. Then one ready-to-run Cowork recipe each for the CEO, HR, marketing, sales, finance and operations — and your plan for the first month back at work.',
          stages: []
        }
      ]
    }
  ],

  faqItems: [
    {
      id: 'faq-1',
      question: 'Do I need to know how to code?',
      answer:
        'No. Even on Day 2, when we build web pages and small apps, you describe what you want in plain English and Claude writes the code. Every technical word is explained the first time it comes up. If you can use email and Microsoft Office, you can do everything in this course.',
      category: 'General'
    },
    {
      id: 'faq-2',
      question: 'What will I see demonstrated live?',
      answer:
        'Every topic is shown live before you try it yourself. Along the way you will see NotebookLM turning a stack of documents into grounded answers, the YK Automation Portal and an e-Invoice explorer built with AI, a product photo edited and turned into a short video, real Excel exports and Claude chats on screen, and a full website built and put online by describing it in plain English.',
      category: 'Curriculum'
    },
    {
      id: 'faq-3',
      question: 'Do I need a paid Claude account?',
      answer:
        'Yes — Pro, Max, Team or Enterprise. The free plan can chat, but it cannot run Cowork, create files, use Skills or connect to your apps, and those are the course. Please have this sorted before Day 1.',
      category: 'Requirements'
    },
    {
      id: 'faq-4',
      question: 'What should I bring, and what should I do before Day 1?',
      answer:
        'A laptop with administrator rights (Windows 10/11, or a Mac from 2020 or later) with Excel, Word and PowerPoint, Google Chrome, and your phone. Before you arrive: install Claude Desktop from claude.com/download, sign in, make sure Cowork starts (on Windows this needs the one-off Virtual Machine Platform step we send you), add the Claude for Chrome extension, and create a free GitHub account for Day 2.',
      category: 'Requirements'
    },
    {
      id: 'faq-5',
      question: 'My company laptop is locked down. Is that a problem?',
      answer:
        'Probably, and it is the one thing we cannot fix on the day. Without administrator rights Claude installs but Cowork will not run, and virtual desktops (VDI) cannot host Cowork at all. Ask IT in advance to allow Claude Desktop by Anthropic and the Virtual Machine Platform feature — or bring a personal laptop.',
      category: 'Requirements'
    },
    {
      id: 'faq-6',
      question: 'Can I use my own company data during the workshop?',
      answer:
        'The labs run on fictional Malaysian companies, so nothing confidential leaves the room. Day 1 also covers how to prepare data safely before you upload it — export, remove what is not needed, replace names with codes. Use that on anything real you bring for the capstone.',
      category: 'Logistics'
    },
    {
      id: 'faq-7',
      question: 'What do I take home?',
      answer:
        'The participant pack: the full slide deck, all 48 labs with copy-paste prompts, the lab data files, ready-made Skills and the strategy worksheets. You also keep everything you built — your Claude projects, dashboard, landing page, published tool and agent team.',
      category: 'General'
    },
    {
      id: 'faq-8',
      question: 'Will the AI just do my job for me?',
      answer:
        'No. It removes the typing; the judgement stays with you. The course has one golden rule — AI prepares, a human approves — and every lab says what to check before anything is sent, paid, filed or published. Everything here makes you faster. Nothing here makes you less accountable.',
      category: 'General'
    }
  ],

  featuredLabs: [
    {
      day: 'Day 1',
      duration: '20 min',
      title: 'Fill Repetitive Documents in Bulk',
      purpose:
        'Sales orders, quotations, delivery notes and service forms get retyped from the same template every day — slow, and one typo away from a wrong invoice.',
      how:
        'Give Claude your own Word template and a list of orders. It fills one document per customer, works out the line totals, discount and grand total, numbers them in sequence and saves every file.',
      helps:
        'A morning of copy-and-paste becomes a few minutes of checking. The same method works for any form your company fills in again and again.',
      beneficiaries: ['Sales', 'Admin', 'Customer service']
    },
    {
      day: 'Day 1',
      duration: '20 min',
      title: 'Think Like a Senior Business Analyst',
      purpose:
        'Owners and accountants are often handed a set of numbers and asked “how is this business really doing?” — without knowing where to start.',
      how:
        'Brief Claude as a senior analyst with a few facts about the business. It sense-checks the numbers first, lays out what to analyse — revenue quality, unit costs, cash flow, profit trend, tax — and lists exactly what information it needs from you.',
      helps:
        'You start every review with a clear plan and a ready-to-send information request, instead of a blank page.',
      beneficiaries: ['Business owners', 'Accounts', 'Advisors']
    },
    {
      day: 'Day 1',
      duration: '40 min',
      title: 'Turn the Ledger Into Answers',
      purpose:
        'The answers to everyday questions — how much commission did each salesperson earn, which tenants or customers pay late — are buried in the general ledger.',
      how:
        'Hand Claude a raw GL export. It builds a staff-by-year commission table, and a payment summary that marks every month as on time, late or missing — with working Excel formulas, not typed numbers.',
      helps:
        'Commission checks and collection follow-ups that took days of filtering now take minutes, and every figure traces back to a ledger line.',
      beneficiaries: ['Accounts', 'HR & payroll', 'Credit control']
    },
    {
      day: 'Day 1',
      duration: '30 min',
      title: 'Match, Reconcile and Flag',
      purpose:
        'Bank reconciliations and matching purchase orders, goods received and supplier invoices are tedious — and mismatches slip through.',
      how:
        'Claude works inside Excel to reconcile two ledgers and run a three-way match of PO, GRN and invoice, then lists every difference with the reason it found.',
      helps:
        'Short deliveries, price differences and duplicate invoices are caught before payment, and month-end closes faster.',
      beneficiaries: ['Accounts', 'Warehouse & store', 'Purchasing']
    },
    {
      day: 'Day 1',
      duration: '30 min',
      title: 'Build a Structured Interview Kit',
      purpose:
        'Most SMEs interview on gut feel: different questions for each candidate, and no fair way to compare them afterwards.',
      how:
        'Describe the role. Claude drafts interview questions linked to the job, a scoring guide for each answer, and a Chinese version — then turns it into a simple tool interviewers can use.',
      helps:
        'Every candidate gets the same questions and is scored the same way, so hiring decisions are fairer, faster and easier to explain.',
      beneficiaries: ['HR', 'Hiring managers', 'Business owners']
    },
    {
      day: 'Day 1',
      duration: '20 min',
      title: 'A Morning Brief That Arrives by Itself',
      purpose:
        'Managers start the day hunting through emails, cash balances and news to work out what needs attention.',
      how:
        'Set up a routine once. Every weekday before you arrive, Claude gathers what matters — cash position, overdue items, industry news — and emails you a one-page brief.',
      helps:
        'You walk in knowing the three things that need a decision today. The work is done before office hours.',
      beneficiaries: ['Business owners', 'Managers', 'Finance']
    },
    {
      day: 'Day 2',
      duration: '2 hours',
      title: 'Dashboards, Web Pages and Tools You Can Share',
      purpose:
        'Reports trapped in spreadsheets, and small tools the team needs but nobody has time to build.',
      how:
        'Describe what you want in plain English. Claude builds a live dashboard from your numbers, a landing page for your business, and a small calculator or checker — then publishes it, adds it to a company portal, or puts a full website online.',
      helps:
        'Information people can open by link on any device, and the small tools your team wished it had — without a developer.',
      beneficiaries: ['Business owners', 'Marketing', 'Sales', 'Accounts']
    },
    {
      day: 'Day 2',
      duration: '45 min',
      title: 'Build a Second Brain for Your Team',
      purpose:
        'Company know-how lives in people’s heads, old emails and scattered files. When someone is on leave or resigns, the answers go with them.',
      how:
        'Turn scattered notes, SOPs and past cases into a linked Obsidian knowledge vault that Claude helps organise and keep up to date. Then ask it questions and make it cite the exact note each answer came from.',
      helps:
        'New staff find answers without interrupting seniors, procedures stay consistent, and every answer can be checked against its source.',
      beneficiaries: ['Business owners', 'HR & training', 'Accounts', 'Operations']
    },
    {
      day: 'Day 2',
      duration: '90 min',
      title: 'A Team of AI Agents for the Month-End Close',
      purpose:
        'Month-end has many parts — reconciliations, variance commentary, reviews — that pile up on one or two people.',
      how:
        'Set up a lead agent that splits the close between specialists: one reconciles, one writes the commentary, one reviews for anything unsupported. You approve the plan first and sign off the result.',
      helps:
        'The close becomes a repeatable checklist that runs in parallel, with a human still approving every number that leaves the team.',
      beneficiaries: ['Accounts', 'Finance managers', 'Audit']
    }
  ],

  audienceRoles: [
    {
      title: 'Finance & Admin Executives',
      desc:
        'Reconciliations, GL analysis, sales orders, monthly packs. The Day 1 labs pay for themselves here first.'
    },
    {
      title: 'Operations & Office Managers',
      desc:
        'Supplier invoices, vendor checks, process maps and routines that run before you arrive.'
    },
    {
      title: 'Business Owners & Team Leads',
      desc:
        'Decide where AI fits, what to start with, and what a safe human sign-off looks like before you roll it out.'
    },
    {
      title: 'Professional Practices',
      desc:
        'Audit, tax, secretarial and advisory teams who turn client data into analysis, letters and filings.'
    }
  ]
};
