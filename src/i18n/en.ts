import { SiteContent } from './types';

/**
 * English content. This is the source of truth for wording; zh.ts mirrors it
 * one-for-one, so anything added here needs a matching entry there (TypeScript
 * will refuse to compile if it is missing).
 */
export const en: SiteContent = {
  htmlLang: 'en',
  documentTitle: 'AI Agents for Business 101 | YKCC',
  metaDescription:
    'A 2-day hands-on workshop for non-technical office staff: configure an AI agent as a digital colleague, then use it to build real Excel, Word and PowerPoint files, extract data from scanned invoices, and set work to run automatically. No coding required.',

  courseTitleLead: 'AI Agents for',
  courseTitleAccent: 'Business 101',

  subtitle: 'Building AI Agents as Digital Colleagues for Business Productivity',
  tagline:
    'Two days of hands-on training that turns Claude from something you chat with into a colleague that opens your folders, builds your files and saves them where you asked.',
  heroQuote:
    'A chatbot can tell you what should go in the report. An agent opens your folder, reads your data, builds the report, saves it, and tells you where it put it. The whole difference is the ability to act — and these two days are about controlling how it acts.',
  targetAudience:
    'Written for people who do not work in IT. If you can use email and Microsoft Office, you can do everything in this course.',

  schedule: {
    datesLabel: '15 & 16 October 2026',
    datesShort: '15–16 Oct',
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
    { href: '#anatomy', label: 'What You Configure' },
    { href: '#labs', label: 'Labs' },
    { href: '#agenda', label: 'Agenda' },
    { href: '#prepare', label: 'Before You Start' },
    { href: '#audience', label: 'Who It’s For' },
    { href: '#faq', label: 'FAQ' }
  ],

  hero: {
    badge: '2-Day Practical Hands-On Training',
    quoteFooter: 'Written for people who do not work in IT',
    ctaPrimary: 'Register Now',
    ctaSecondary: 'See the full 2-day agenda',
    stats: [
      { value: '15–16 Oct', label: '9:00 AM – 5:00 PM' },
      { value: '0 Code', label: 'No IT background needed' },
      { value: '26 Prompts', label: 'Yours to keep and reuse' }
    ],
    imageAlt:
      'Colleagues working through hands-on exercises on their laptops during a training session',
    visualTitle: 'It does the work, not just the talking',
    visualBody:
      'Most people have only used AI as a chat window that gives advice. Over two days you’ll set one up to actually open your files, build the report and save it into your folder — finished work, not suggestions you still have to type up yourself.',
    takeawaysTitle: 'What you leave with',
    takeawaysNote: 'Built by you, in the room',
    takeaways: [
      {
        lead: 'A configured AI colleague',
        rest:
          '— your own system prompt, one connected folder, and standing instructions it applies to every task from then on.'
      },
      {
        lead: 'Real files on your own laptop',
        rest:
          '— a workbook with live formulas, a one-page management report, a reusable Word template, an 8-slide board deck and an invoice register built from a scanned PDF.'
      },
      {
        lead: 'A handout with every step in it',
        rest:
          '— 26 prompts, a plain-English glossary, a troubleshooting appendix, and a Monday-morning plan for the first month.'
      }
    ]
  },

  anatomy: {
    eyebrow: 'The Core of the Course',
    heading: 'What You Actually Configure',
    intro:
      'Think about hiring a new admin executive on Monday morning. Four things have to be true for that person to be useful — and an AI colleague needs exactly the same four. Learn the four names and half the jargon in this industry stops being frightening.',
    partLabel: (index: number) => `Part ${index}`,
    humanEquivalentPrefix: 'A new colleague would call this:'
  },

  recipe: {
    eyebrow: 'Module 3 · Prompt Engineering',
    heading: 'The five-part recipe',
    intro:
      'You will not need all five parts every time — but when something comes back wrong, the missing part is nearly always on this list.',
    sideNote: 'Role · Task · Input · Output · Rules',
    warningTitle: 'The single most common beginner mistake',
    warningBody:
      'People spend an hour typing one very long, very clever request — then wonder why the second request comes back wrong. A brilliant one-off request is a chatbot. A good system prompt is a colleague. Put your effort into the job description.'
  },

  labs: {
    eyebrow: 'Hands on the keyboard',
    heading: 'Six Builds, One Running Example',
    introLead: 'Every lab runs on one imaginary Malaysian company:',
    tablistLabel: 'Hands-on labs and modules',
    promptBoxTitle: 'The kind of prompt you write in class',
    promptBoxNote: 'Plain English · zero code',
    checkpointLabel: 'Checkpoint: ',
    cta: 'Register for the next batch',
    counter: (current: number, total: number) => `${current} of ${total}`
  },

  benefits: {
    eyebrow: 'Why This Course Is Different',
    heading: 'An Agent Is Something You Configure',
    intro:
      'Most AI training teaches you to ask better questions. This one teaches you to set up a colleague once, so you stop having to ask.'
  },

  agenda: {
    eyebrow: 'Full Curriculum',
    heading: 'The Complete 2-Day Agenda',
    intro:
      'Every module, hour by hour, straight from the participant handout — so you know exactly what your team walks away with before you commit a seat.',
    daySelectLabel: 'Select workshop day',
    dayLabel: (day: number) => `Day ${day}`,
    sessionsLabel: 'sessions',
    stagesLabel: 'guided stages',
    handoutLabel: 'Handout: ',
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
      'Timings are indicative — the trainer moves at the pace of the room, and every step is in your handout so you can repeat it at your own desk afterwards.',
    footnoteDates: 'Workshop dates: 15 & 16 October 2026, 9:00 AM – 5:00 PM.',
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
      paymentMethod: 'Payment Method'
    },
    placeholders: {
      fullName: 'e.g. Tan Wei Ming',
      email: 'e.g. name@yourcompany.com.my',
      phone: 'e.g. +60 12-345 6789',
      company: 'e.g. Sinar Jaya Trading Sdn Bhd'
    },
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
      paymentMethod: 'Payment Method: '
    },
    nextTitle: 'What happens next?',
    nextBody:
      'Our training team will contact you to confirm your seat and payment method, and send joining instructions ahead of 15 & 16 October 2026. In the meantime, work through “Before You Start” below — arriving with setup done puts you ahead of the room.',
    registerAnother: 'Register Another Person / Team'
  },

  prepare: {
    eyebrow: 'Part 0 · Before You Start',
    heading: 'Arrive With This Done',
    intro:
      'Six things to sort out before Day 1. Most of them can be fixed in ten minutes — except the one that needs your IT department, which is exactly why it is on this page and not in the welcome pack.',
    folderEyebrow: 'Section 0.5',
    folderTitle: 'Create one clean folder',
    folderBodyBefore:
      'Your AI colleague can only see folders you specifically show it — it cannot browse your whole computer. In ',
    folderBodyMiddle: ', create a folder named exactly ',
    folderBodyAfter: ' with three folders inside it:',
    folderItems: [
      { name: '01 Data', note: '— things you gave it' },
      { name: '02 Outputs', note: '— things it made for you' },
      { name: '03 Templates', note: '— your reusable house styles' }
    ],
    folderNote:
      'Keeping them apart is a habit that saves real time later — you never have to ask “is this the file I gave it, or the file it made?”',
    switchTitle: 'The one switch everybody forgets',
    switchBodyBefore: 'Claude ships with ',
    switchBodyPath: 'Code execution and file creation',
    switchBodyAfter:
      ' switched off. Nothing in this course works until you turn it on: your profile picture › Settings › Capabilities › switch it ON. It takes twenty seconds, and forgetting it is the single most common reason a participant gets stuck.',
    switchNote:
      'On Team and Enterprise plans your organisation’s Claude administrator controls this setting. If it is greyed out, ask them to enable it before Day 1.'
  },

  audience: {
    eyebrow: 'Who Should Attend',
    heading: 'For the People Who Build the Reports',
    managerNoteTitle: 'A note for managers evaluating this for a team.',
    managerNoteBody:
      'Day 2 covers Dispatch — giving a phone the ability to act on a work computer. The course teaches it alongside the security conversation you should have first: check your IT policy, lock your phone, and adopt the sensible finance-department rule of using it to read and summarise, never to send or approve. In-house corporate batches can have that section tailored to your own policy.'
  },

  faq: {
    eyebrow: 'Got Questions?',
    heading: 'Frequently Asked Questions',
    intro: 'Everything you need to know before booking a seat.',
    finalCtaHeading: 'Ready to stop building the same report by hand?',
    finalCtaBody:
      'Register now to reserve your seat for 15 & 16 October 2026. Corporate in-house batches can be run at your office with the labs adapted to your own files.',
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
    signOff: 'AI produces the draft. You review it. You sign it.'
  },

  runningExample: {
    company: 'Sinar Jaya Trading Sdn Bhd',
    summary:
      'A small distributor of office and industrial supplies based in Petaling Jaya, with customers in five regions across Malaysia.',
    yourRole:
      'You are its Finance and Admin Executive. Your manager keeps asking for reports, and you keep building them by hand.',
    arc:
      'Over two days you train an AI colleague to do that work for you — a sales report in Excel, a management report in Word, a pitch deck in PowerPoint, and supplier invoice data entry from scanned PDFs.'
  },

  agentParts: [
    {
      humanEquivalent:
        'A job description: who they are, what they may and may not do, how you like things done',
      technicalName: 'System prompt',
      meaning:
        'A block of text you write once. Claude reads it before every single task, forever. In Claude it is the box marked Instructions.'
    },
    {
      humanEquivalent:
        'Training on your specific procedures — how your company does an invoice reconciliation',
      technicalName: 'Skills',
      meaning:
        'Packaged know-how. The Excel, Word, PowerPoint and PDF skills are built in and always available. You can add your own on top.'
    },
    {
      humanEquivalent:
        'Access to systems — the shared drive, the accounting system, the email account',
      technicalName: 'Tools and connectors',
      meaning:
        'Permission for Claude to reach a folder, a website, or an app such as Gmail or SharePoint. You grant this; it is never automatic.'
    },
    {
      humanEquivalent: 'Memory of what happened last week',
      technicalName: 'Memory and project context',
      meaning:
        'Claude remembers within a project, so you stop re-explaining yourself every Monday morning.'
    }
  ],

  promptRecipe: [
    {
      number: 1,
      name: 'Role',
      question: 'Who should Claude be?',
      example: 'You are a management accountant preparing a board pack.'
    },
    {
      number: 2,
      name: 'Task',
      question: 'What exactly must be done?',
      example: 'Summarise the six months of sales by region and by salesperson.'
    },
    {
      number: 3,
      name: 'Input',
      question: 'What should it work from?',
      example: 'Use only the CSV in 01 Data. Do not use anything else.'
    },
    {
      number: 4,
      name: 'Output',
      question: 'What must come back?',
      example: 'One Excel file with three sheets: Summary, By Region, By Salesperson.'
    },
    {
      number: 5,
      name: 'Rules',
      question: 'What are the limits?',
      example:
        'Use formulas, not typed values. If a region name is misspelt, flag it — do not silently merge it.'
    }
  ],

  courseHighlights: [
    {
      title: 'An Agent, Not a Chatbot',
      subtitle: 'The four parts, taught properly',
      description:
        'System prompt, skills, tools and connectors, memory. Learn the four names and half the jargon in this industry stops being frightening — then configure all four yourself.',
      metric: '4 Parts',
      metricLabel: 'Configured by you on Day 1'
    },
    {
      title: 'Written for Non-IT Staff',
      subtitle: 'Every step, including the small ones',
      description:
        'No coding, no command line. Each technical word is decoded in plain English the first time it appears, and again in the glossary at the back of your handout.',
      metric: '0 Code',
      metricLabel: 'If you can use Office, you can do this'
    },
    {
      title: 'Real Files, Not Slideware',
      subtitle: 'Everything lands in your own folder',
      description:
        'A workbook with live formulas, a one-page management report, an 8-slide board deck with speaker notes, and an invoice register built from a scanned PDF.',
      metric: '6+ Files',
      metricLabel: 'Saved to 02 Outputs on your laptop'
    },
    {
      title: 'Honest About the Limits',
      subtitle: 'You still sign the work',
      description:
        'Every lab ends with a checkpoint you verify by hand. The capstone marks down any group that claims its agent needs no supervision.',
      metric: 'Human Sign-Off',
      metricLabel: 'AI drafts · you review · you sign'
    }
  ],

  prerequisites: [
    {
      requirement: 'A laptop — Windows 10/11, or a Mac from 2020 or later',
      why: 'You will be installing an application and creating real files.'
    },
    {
      requirement: 'Administrator rights, or your IT department’s permission to install software',
      why:
        'Some company laptops block new installations. Check this before Day 1 — the app is Claude Desktop by Anthropic, from claude.com/download.'
    },
    {
      requirement: 'A paid Claude account — Pro, Max, Team or Enterprise',
      why:
        'Cowork, file creation and skills are not available on the free plan, and they are the entire point of this course.'
    },
    {
      requirement: 'A reliable internet connection',
      why: 'Claude does its thinking on Anthropic’s servers, not on your laptop.'
    },
    {
      requirement: 'Microsoft Excel, Word and PowerPoint installed',
      why: 'So you can open and check what your AI colleague produces.'
    },
    {
      requirement: 'A smartphone with the Claude mobile app (Day 2 only)',
      why: 'Used in Module 5, when you learn to send work to Claude from your phone.'
    }
  ],

  workshopDays: [
    {
      dayNumber: 1,
      theme: 'Configure the Colleague',
      subTitle: 'What an agent is · Setting one up · Prompt engineering · Excel',
      description:
        'Day 1 is about the job description. You separate agents from chatbots and macros, build a working AI colleague in Cowork that can see one folder on your laptop, learn the five-part prompt recipe, and then spend two hours turning six months of deliberately imperfect sales data into a workbook whose totals are live formulas.',
      modules: [
        {
          id: 'd1-registration',
          day: 1,
          startTime: '09:00',
          endTime: '09:30',
          title: 'Arrival & Setup Checkpoint',
          handoutSource: 'Part 0',
          format: 'Plenary',
          objective:
            'Trainers walk the room clearing the four setup blockers: Claude Desktop installed, a paid plan showing, code execution and file creation switched ON, and the AI Workshop folder created with 01 Data, 02 Outputs and 03 Templates inside it.',
          stages: []
        },
        {
          id: 'd1-m1',
          day: 1,
          startTime: '09:30',
          endTime: '11:00',
          title: 'Module 1 — What an AI Agent Actually Is',
          handoutSource: 'Module 1',
          format: 'Lecture',
          objective:
            'Separate the three ideas everybody arrives with: traditional automation, chatbot, and agent. Learn the four parts of an AI colleague, then watch a live demonstration end to end. Nothing to install — hands off the keyboard.',
          stages: []
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
          id: 'd1-m2',
          day: 1,
          startTime: '11:15',
          endTime: '12:15',
          title: 'Module 2 — Setting Up Your First AI Agent',
          handoutSource: 'Module 2',
          format: 'Hands-on',
          objective:
            'Laptops open. Create your project in Cowork, write the Instructions block, connect exactly one folder, and see for yourself how Claude asks permission before it acts. By the end of this hour you have a working AI colleague that can read and write your files.',
          stages: [
            {
              id: 'd1-m2-s1',
              promptCode: 'P1',
              title: 'Your project’s system prompt',
              durationMinutes: 20,
              description:
                'Paste the Sinar Jaya job description into Instructions word for word — you will write your own in Module 3.'
            },
            {
              id: 'd1-m2-s2',
              promptCode: 'P3',
              title: 'Your first task',
              durationMinutes: 15,
              description:
                'Ask a question that can only be answered by opening the file, and watch Claude decide by itself to read the folder.'
            },
            {
              id: 'd1-m2-s3',
              promptCode: 'P4',
              title: 'Prove it can create a file',
              durationMinutes: 15,
              description:
                'A small file written into 02 Outputs. If this works, everything else in the two days works.'
            }
          ]
        },
        {
          id: 'd1-lunch',
          day: 1,
          startTime: '12:15',
          endTime: '13:15',
          title: 'Lunch',
          handoutSource: '',
          format: 'Plenary',
          objective: '',
          stages: [],
          isBreak: true,
          breakType: 'lunch'
        },
        {
          id: 'd1-m3',
          day: 1,
          startTime: '13:15',
          endTime: '14:45',
          title: 'Module 3 — Prompt Engineering',
          handoutSource: 'Module 3',
          format: 'Hands-on',
          objective:
            'Why prompts fail, and the five-part recipe that fixes them: Role, Task, Input, Output, Rules. You compare a weak prompt against the same request written properly, learn the three ways to give an agent your own knowledge, then write a system prompt for your own job and keep it for the capstone.',
          stages: [
            {
              id: 'd1-m3-s1',
              promptCode: 'P5 / P6',
              title: 'The same request, weak and rewritten',
              durationMinutes: 30,
              description:
                '"Analyse my sales data and give me some insights" versus the five-part version — and the first clue about the state of the data.'
            },
            {
              id: 'd1-m3-s2',
              promptCode: 'P7',
              title: 'Write your own system prompt',
              durationMinutes: 40,
              description:
                'For a real task from your own job, not the worked example. You reuse this on Day 2 in the capstone.'
            }
          ]
        },
        {
          id: 'd1-break-2',
          day: 1,
          startTime: '14:45',
          endTime: '15:00',
          title: 'Refreshment break',
          handoutSource: '',
          format: 'Plenary',
          objective: '',
          stages: [],
          isBreak: true,
          breakType: 'tea'
        },
        {
          id: 'd1-lab1',
          day: 1,
          startTime: '15:00',
          endTime: '17:00',
          title: 'Lab 1 — Excel with an AI Colleague',
          handoutSource: 'Lab 1',
          format: 'Laboratory',
          objective:
            'Two hours, hands on the keyboard. Six months of raw invoice lines, deliberately imperfect in exactly the way real exported data is. Profile it before building anything on top of it, fix what you find, then build a summary workbook you can defend in front of a director.',
          stages: [
            {
              id: 'd1-lab1-s1',
              promptCode: 'P8',
              title: 'Stage 1 — Look before you leap',
              durationMinutes: 25,
              description:
                'Profile the file first: row counts, duplicates, blanks, and region names that appear twice with different spellings.'
            },
            {
              id: 'd1-lab1-s2',
              promptCode: 'P9–P11',
              title: 'Stage 2 — Deal with the problems',
              durationMinutes: 30,
              description:
                'Decide what to fix, what to flag, and what to leave alone — with a record of every change.'
            },
            {
              id: 'd1-lab1-s3',
              promptCode: 'P12',
              title: 'Stage 3 — Build the summary workbook',
              durationMinutes: 35,
              description:
                'Live formulas, not typed values. Change one number in the source and watch the totals move — that test is the whole point.'
            },
            {
              id: 'd1-lab1-s4',
              promptCode: 'P13',
              title: 'Stage 4 — Charts and presentation',
              durationMinutes: 20,
              description: 'Formatting that survives being emailed to somebody senior.'
            },
            {
              id: 'd1-lab1-s5',
              promptCode: 'Your own',
              title: 'Stage 5 — Your exercise',
              durationMinutes: 10,
              description:
                'Write this prompt yourself using the recipe, without copying one from the book.'
            }
          ]
        }
      ]
    },
    {
      dayNumber: 2,
      theme: 'Put It to Work',
      subTitle: 'Word · PowerPoint · Scanned PDFs · Remote and automatic · Capstone',
      description:
        'Yesterday you taught your AI colleague to handle numbers. Today it handles words, pictures and paper — then you learn to send it work from your phone and set it to run without you. The day closes with a group capstone built for a real situation from somebody’s actual job, demonstrated live.',
      modules: [
        {
          id: 'd2-recap',
          day: 2,
          startTime: '09:00',
          endTime: '09:15',
          title: 'Recap and Objectives',
          handoutSource: 'Day 2 opening',
          format: 'Plenary',
          objective:
            'Before you touch the keyboard: everything today builds on a working setup from Module 2, so anything still broken gets fixed now. Fifteen minutes of fixing beats six hours of frustration.',
          stages: []
        },
        {
          id: 'd2-lab2',
          day: 2,
          startTime: '09:15',
          endTime: '11:00',
          title: 'Lab 2 — Word Documents with an AI Colleague',
          handoutSource: 'Lab 2',
          format: 'Laboratory',
          objective:
            'Excel is judged on whether the numbers are right; Word is judged on whether it sounds right. Most of this lab is controlling tone, structure and length — starting by banning the three tells of AI-written text: empty openers, praise instead of facts, and hedging.',
          stages: [
            {
              id: 'd2-lab2-s1',
              promptCode: 'P14',
              title: 'Stage 1 — The management report',
              durationMinutes: 35,
              description:
                'A one-page report built from yesterday’s verified workbook, saved into 02 Outputs.'
            },
            {
              id: 'd2-lab2-s2',
              promptCode: 'P15–P16',
              title: 'Stage 2 — Fixing what comes back',
              durationMinutes: 30,
              description:
                'Version 2 is where the value is. Cut the adjectives, restore the numbers, tighten to one page.'
            },
            {
              id: 'd2-lab2-s3',
              promptCode: 'P17',
              title: 'Stage 3 — Turn it into a reusable template',
              durationMinutes: 25,
              description:
                'Your house style, saved into 03 Templates, so next month starts from a format you already approved.'
            },
            {
              id: 'd2-lab2-s4',
              promptCode: 'Your own',
              title: 'Stage 4 — Your exercise',
              durationMinutes: 15,
              description:
                'A debt collection letter from a prompt you write yourself — and a decision about what happens if a customer has more than one overdue invoice.'
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
          id: 'd2-lab3',
          day: 2,
          startTime: '11:15',
          endTime: '12:15',
          title: 'Lab 3 — PowerPoint with an AI Colleague',
          handoutSource: 'Lab 3',
          format: 'Laboratory',
          objective:
            'One hour, fast, because you already have the content. Never ask for a deck from nothing — ask for a deck from a document you have already checked, so your review is only about presentation.',
          stages: [
            {
              id: 'd2-lab3-s1',
              promptCode: 'P18',
              title: 'The board deck',
              durationMinutes: 35,
              description:
                'Eight slides with speaker notes on every one, for a 15-minute half-year review with two directors.'
            },
            {
              id: 'd2-lab3-s2',
              promptCode: 'P19–P20',
              title: 'Review and your own pitch deck',
              durationMinutes: 25,
              description:
                'Every slide checked in Slide Show view for overflowing text, every figure traced back to your workbook.'
            }
          ]
        },
        {
          id: 'd2-lunch',
          day: 2,
          startTime: '12:15',
          endTime: '13:15',
          title: 'Lunch',
          handoutSource: '',
          format: 'Plenary',
          objective: '',
          stages: [],
          isBreak: true,
          breakType: 'lunch'
        },
        {
          id: 'd2-m4',
          day: 2,
          startTime: '13:15',
          endTime: '14:15',
          title: 'Module 4 — Scanned PDFs and Unstructured Data',
          handoutSource: 'Module 4',
          format: 'Hands-on',
          objective:
            'The single most tedious task in most finance and admin departments: somebody reads a scanned supplier invoice and types the numbers into the accounting system. You replace the typing — and build the register that lets a human check the machine’s work in under two minutes.',
          stages: [
            {
              id: 'd2-m4-s1',
              promptCode: 'P21',
              title: 'Stage 1 — Read the invoice',
              durationMinutes: 15,
              description:
                'Why a scanned PDF is a photograph, not text, and what that means for accuracy.'
            },
            {
              id: 'd2-m4-s2',
              promptCode: 'P22',
              title: 'Stage 2 — Fixed-format extraction',
              durationMinutes: 20,
              description:
                'A JSON schema — a blank form filled in the same way every time — including an honest confidence rating and a list of fields a human should check.'
            },
            {
              id: 'd2-m4-s3',
              promptCode: 'P23',
              title: 'Stage 3 — Into a spreadsheet',
              durationMinutes: 25,
              description:
                'A two-sheet invoice register with live Quantity × Unit Price formulas, a variance column, amber highlighting on low-confidence fields, and blank Reviewed By / Review Date / Approved columns.'
            }
          ]
        },
        {
          id: 'd2-break-2',
          day: 2,
          startTime: '14:15',
          endTime: '14:30',
          title: 'Refreshment break',
          handoutSource: '',
          format: 'Plenary',
          objective: '',
          stages: [],
          isBreak: true,
          breakType: 'tea'
        },
        {
          id: 'd2-m5',
          day: 2,
          startTime: '14:30',
          endTime: '15:00',
          title: 'Module 5 — Working Remotely and Automatically',
          handoutSource: 'Module 5',
          format: 'Demonstration',
          objective:
            'Two ways to get work out of your AI colleague without sitting in front of your laptop: Dispatch, which is a message from your phone to a colleague sitting at your desk, and scheduled tasks, which are a standing instruction to that colleague. Includes the security conversation you need to have before enabling either at work.',
          stages: [
            {
              id: 'd2-m5-s1',
              promptCode: 'P24',
              title: 'Your first message from your phone',
              durationMinutes: 15,
              description:
                'Ask for the top three regions and their RM totals — from your phone, with your laptop awake across the room.'
            },
            {
              id: 'd2-m5-s2',
              promptCode: 'P25',
              title: 'A weekly scheduled task',
              durationMinutes: 15,
              description:
                'Describe the job once, set the timing in ordinary language, review what Claude proposes, confirm.'
            }
          ]
        },
        {
          id: 'd2-capstone',
          day: 2,
          startTime: '15:00',
          endTime: '16:30',
          title: 'Capstone Project — Build a Digital Colleague',
          handoutSource: 'Capstone',
          format: 'Group build',
          objective:
            'Groups of three or four. Ninety minutes to design and build a working AI colleague for a real business situation: reconciliation, HR document automation, scheduled sales reporting — or, best of all, a real task from somebody in the group’s actual job.',
          stages: [
            {
              id: 'd2-capstone-s1',
              promptCode: 'P26',
              title: 'Kickoff — let the agent interview you',
              durationMinutes: 20,
              description:
                'Claude asks up to eight questions before writing anything, then drafts the system prompt and stops for your approval.'
            },
            {
              id: 'd2-capstone-s2',
              promptCode: 'Group work',
              title: 'Build',
              durationMinutes: 70,
              description:
                'A group-written system prompt, at least two working prompts, at least one finished file — and a statement of three limits.'
            }
          ]
        },
        {
          id: 'd2-presentations',
          day: 2,
          startTime: '16:30',
          endTime: '17:00',
          title: 'Presentations & Close',
          handoutSource: 'Capstone',
          format: 'Plenary',
          objective:
            'Five minutes per group, demonstrated live in front of the room. Assessed on whether it works, the quality of the system prompt, honesty about limits, realism, and whether a non-technical person in the audience can follow what you built.',
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
        'No. This handout is written for people who do not work in IT. Every technical word is explained in plain English the first time it appears, and again in the glossary. There is no command line and nothing to program — you write instructions in ordinary English. If you can use email and Microsoft Office, you can do everything in this course.',
      category: 'General'
    },
    {
      id: 'faq-2',
      question: 'Do I need a paid Claude account?',
      answer:
        'Yes — Pro, Max, Team or Enterprise. The free plan can chat with you, but it cannot create Excel, Word, PowerPoint or PDF files and it cannot open folders on your computer. Those two abilities are the entire point of the course, so a paid plan is not optional here. Please have this sorted before Day 1.',
      category: 'Requirements'
    },
    {
      id: 'faq-3',
      question: 'What should I bring, and what should I do before Day 1?',
      answer:
        'A laptop (Windows 10/11, or a Mac from 2020 or later) with Excel, Word and PowerPoint installed, plus your phone for Day 2. Before you arrive: install Claude Desktop from claude.com/download, sign in and confirm your plan, switch on Settings › Capabilities › Code execution and file creation, and create a Documents\\AI Workshop folder containing 01 Data, 02 Outputs and 03 Templates. Arrive with that done and you will be ahead of the room.',
      category: 'Requirements'
    },
    {
      id: 'faq-4',
      question: 'My company laptop blocks new software. Is that a problem?',
      answer:
        'It is, and it is the one thing you cannot fix on the day. Many company laptops are locked down; if you see "Your administrator has blocked this app" you need your IT department to approve the installation. Send them this in advance: the application is Claude Desktop by Anthropic, downloaded from claude.com/download. On Team and Enterprise plans your Claude administrator also controls the code execution setting, so ask them to enable it at the same time.',
      category: 'Requirements'
    },
    {
      id: 'faq-5',
      question: 'How is this different from the AI Workshop for Accountants?',
      answer:
        'The accountants course is organised around accounting tasks — bank statements, Form E, SME tax. This one is organised around the agent itself: how to configure it, instruct it, and give it access, then prove the configuration works across Excel, Word, PowerPoint and scanned PDFs. It is not accounting-specific, and it suits any office role that produces documents from data. The two courses stand alone; taking both is a bonus, not a requirement.',
      category: 'Curriculum'
    },
    {
      id: 'faq-6',
      question: 'Can I use my own company data during the workshop?',
      answer:
        'Everything in the labs runs on a fictional Malaysian company, Sinar Jaya Trading Sdn Bhd, so nothing confidential leaves the room. For the capstone you may use a real task from your own job — use non-confidential data, or real data with names replaced by codes. Appendix D of your handout carries a PDPA checklist to run through before you point any of this at real client work.',
      category: 'Logistics'
    },
    {
      id: 'faq-7',
      question: 'What do I take home?',
      answer:
        'The full participant handout — every step, including the small ones that are easy to forget, plus a plain-English glossary, a prompt library of all 26 prompts, a troubleshooting appendix and a Monday-morning action plan. You also keep everything you built: your configured project, your workbook, report, template, board deck and invoice register.',
      category: 'General'
    },
    {
      id: 'faq-8',
      question: 'Will the AI just do my job for me?',
      answer:
        'No, and the course is blunt about that. It removes the typing; the judgement stays with you. Every lab ends with a checkpoint you verify by hand, the capstone marks down any group claiming its agent needs no supervision, and one rule survives every change in this technology: AI produces the draft, you review it, you sign it. Everything here makes you faster. Nothing here makes you less accountable.',
      category: 'General'
    }
  ],

  featuredLabs: [
    {
      code: 'Lab 1',
      day: 'Day 1',
      title: 'Excel — A Workbook You Can Defend',
      category: 'Data & Reporting',
      duration: '2 hours',
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
  ],

  audienceRoles: [
    {
      title: 'Finance & Admin Executives',
      desc:
        'The role the whole course is written around. Reports your manager keeps asking for, built by hand every month — this is where the two days pay for themselves first.'
    },
    {
      title: 'Operations & Office Managers',
      desc:
        'Supplier invoices, letters, memos and weekly packs. Learn to configure one agent properly rather than writing one clever request at a time.'
    },
    {
      title: 'Team Leads Evaluating AI',
      desc:
        'You need to know what an agent can actually do, what it must never be trusted with, and what a sensible review step looks like before you roll it out.'
    },
    {
      title: 'Professional Practices',
      desc:
        'Audit, tax, secretarial and advisory teams that produce documents from data, and want a house style enforced by a template instead of by memory.'
    }
  ]
};
