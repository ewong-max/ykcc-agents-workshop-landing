import {
  AgentPart,
  CourseHighlight,
  DaySchedule,
  FaqItem,
  Prerequisite,
  RecipePart
} from '../types';

/**
 * Everything on this page comes from the participant handout
 * "2026-08-10_AI_Agents_Skills_Configuration_Participant_Handout_v4.docx".
 * Timings, prompt codes (P1–P26) and checkpoint wording follow the handout so the
 * page and the book cannot drift apart.
 */

export const ORGANIZER_INFO = {
  brandName: "YKCC",
  subBrand: "YKCC AI Training",
  // Registered with HRD Corp under this exact title — see HRD_CORP_INFO below.
  // Training providers may only market a claimable course under its registered title.
  title: "AI Agents for Business 101",
  subtitle: "Building AI Agents as Digital Colleagues for Business Productivity",
  tagline:
    "Two days of hands-on training that turns Claude from something you chat with into a colleague that opens your folders, builds your files and saves them where you asked.",
  email: "ykcc@yk.com.my",
  phone: "03-6272 6933",
  address: "No. 37, Jalan 9/62A, Bandar Menjalara, Kepong, 52200 Kuala Lumpur, Wilayah Persekutuan, Malaysia",
  website: "www.yk.com.my",
  heroQuote:
    "A chatbot can tell you what should go in the report. An agent opens your folder, reads your data, builds the report, saves it, and tells you where it put it. The whole difference is the ability to act — and these two days are about controlling how it acts.",
  targetAudience:
    "Written for people who do not work in IT. If you can use email and Microsoft Office, you can do everything in this course."
};

/** Confirmed schedule and venue. */
export const WORKSHOP_SCHEDULE = {
  datesLabel: "15 & 16 October 2026",
  timeLabel: "9:00 AM – 5:00 PM",
  venueName: "YKCC / YK Group Training Centre",
  venueAddress: "No. 37, Jalan 9/62A, Bandar Menjalara, Kepong, 52200 Kuala Lumpur, Wilayah Persekutuan"
};

/** Course fee — per participant. */
export const PRICING = {
  currency: "RM",
  hrdcClaimable: 2500,
  selfFunded: 2000,
  groupDiscountPercent: 30,
  groupDiscountNote:
    "30% off for each additional participant registered from the same group of companies."
};

/**
 * HRD Corp registration details, from the official Letter of Register Program
 * (Application No 10001754409, dated 14/09/2026). Training providers may only
 * market a claimable course using this registered title and programme number.
 */
export const HRD_CORP_INFO = {
  registeredCourseTitle: "AI Agents for Business 101",
  applicationNo: "10001754409",
  programmeNo: "10001756328",
  scheme: "SBL-Khas (Skim Bantuan Latihan Khas)",
  mycoid: "19960102855",
  trainer: "Wong Yew Choon",
  validity: "9 September 2026 – 9 September 2027",
  trainingHours: 14
};

/** The running example that every lab builds on — Section "The running example". */
export const RUNNING_EXAMPLE = {
  company: "Sinar Jaya Trading Sdn Bhd",
  summary:
    "A small distributor of office and industrial supplies based in Petaling Jaya, with customers in five regions across Malaysia.",
  yourRole:
    "You are its Finance and Admin Executive. Your manager keeps asking for reports, and you keep building them by hand.",
  arc:
    "Over two days you train an AI colleague to do that work for you — a sales report in Excel, a management report in Word, a pitch deck in PowerPoint, and supplier invoice data entry from scanned PDFs."
};

/** Module 1.2 — the four parts of an AI colleague. */
export const AGENT_PARTS: AgentPart[] = [
  {
    humanEquivalent:
      "A job description: who they are, what they may and may not do, how you like things done",
    technicalName: "System prompt",
    meaning:
      "A block of text you write once. Claude reads it before every single task, forever. In Claude it is the box marked Instructions."
  },
  {
    humanEquivalent:
      "Training on your specific procedures — how your company does an invoice reconciliation",
    technicalName: "Skills",
    meaning:
      "Packaged know-how. The Excel, Word, PowerPoint and PDF skills are built in and always available. You can add your own on top."
  },
  {
    humanEquivalent:
      "Access to systems — the shared drive, the accounting system, the email account",
    technicalName: "Tools and connectors",
    meaning:
      "Permission for Claude to reach a folder, a website, or an app such as Gmail or SharePoint. You grant this; it is never automatic."
  },
  {
    humanEquivalent: "Memory of what happened last week",
    technicalName: "Memory and project context",
    meaning:
      "Claude remembers within a project, so you stop re-explaining yourself every Monday morning."
  }
];

/** Module 3.2 — the five-part recipe. */
export const PROMPT_RECIPE: RecipePart[] = [
  {
    number: 1,
    name: "Role",
    question: "Who should Claude be?",
    example: "You are a management accountant preparing a board pack."
  },
  {
    number: 2,
    name: "Task",
    question: "What exactly must be done?",
    example: "Summarise the six months of sales by region and by salesperson."
  },
  {
    number: 3,
    name: "Input",
    question: "What should it work from?",
    example: "Use only the CSV in 01 Data. Do not use anything else."
  },
  {
    number: 4,
    name: "Output",
    question: "What must come back?",
    example: "One Excel file with three sheets: Summary, By Region, By Salesperson."
  },
  {
    number: 5,
    name: "Rules",
    question: "What are the limits?",
    example:
      "Use formulas, not typed values. If a region name is misspelt, flag it — do not silently merge it."
  }
];

export const COURSE_HIGHLIGHTS: CourseHighlight[] = [
  {
    title: "An Agent, Not a Chatbot",
    subtitle: "The four parts, taught properly",
    description:
      "System prompt, skills, tools and connectors, memory. Learn the four names and half the jargon in this industry stops being frightening — then configure all four yourself.",
    metric: "4 Parts",
    metricLabel: "Configured by you on Day 1"
  },
  {
    title: "Written for Non-IT Staff",
    subtitle: "Every step, including the small ones",
    description:
      "No coding, no command line. Each technical word is decoded in plain English the first time it appears, and again in the glossary at the back of your handout.",
    metric: "0 Code",
    metricLabel: "If you can use Office, you can do this"
  },
  {
    title: "Real Files, Not Slideware",
    subtitle: "Everything lands in your own folder",
    description:
      "A workbook with live formulas, a one-page management report, an 8-slide board deck with speaker notes, and an invoice register built from a scanned PDF.",
    metric: "6+ Files",
    metricLabel: "Saved to 02 Outputs on your laptop"
  },
  {
    title: "Honest About the Limits",
    subtitle: "You still sign the work",
    description:
      "Every lab ends with a checkpoint you verify by hand. The capstone marks down any group that claims its agent needs no supervision.",
    metric: "Human Sign-Off",
    metricLabel: "AI drafts · you review · you sign"
  }
];

/** Part 0 — what to have ready before Module 2 begins. */
export const PREREQUISITES: Prerequisite[] = [
  {
    requirement: "A laptop — Windows 10/11, or a Mac from 2020 or later",
    why: "You will be installing an application and creating real files."
  },
  {
    requirement: "Administrator rights, or your IT department's permission to install software",
    why:
      "Some company laptops block new installations. Check this before Day 1 — the app is Claude Desktop by Anthropic, from claude.com/download."
  },
  {
    requirement: "A paid Claude account — Pro, Max, Team or Enterprise",
    why:
      "Cowork, file creation and skills are not available on the free plan, and they are the entire point of this course."
  },
  {
    requirement: "A reliable internet connection",
    why: "Claude does its thinking on Anthropic's servers, not on your laptop."
  },
  {
    requirement: "Microsoft Excel, Word and PowerPoint installed",
    why: "So you can open and check what your AI colleague produces."
  },
  {
    requirement: "A smartphone with the Claude mobile app (Day 2 only)",
    why: "Used in Module 5, when you learn to send work to Claude from your phone."
  }
];

export const WORKSHOP_DAYS: DaySchedule[] = [
  {
    dayNumber: 1,
    theme: "Configure the Colleague",
    subTitle: "What an agent is · Setting one up · Prompt engineering · Excel",
    description:
      "Day 1 is about the job description. You separate agents from chatbots and macros, build a working AI colleague in Cowork that can see one folder on your laptop, learn the five-part prompt recipe, and then spend two hours turning six months of deliberately imperfect sales data into a workbook whose totals are live formulas.",
    modules: [
      {
        id: "d1-registration",
        day: 1,
        startTime: "09:00",
        endTime: "09:30",
        title: "Arrival & Setup Checkpoint",
        handoutSource: "Part 0",
        format: "Plenary",
        objective:
          "Trainers walk the room clearing the four setup blockers: Claude Desktop installed, a paid plan showing, code execution and file creation switched ON, and the AI Workshop folder created with 01 Data, 02 Outputs and 03 Templates inside it.",
        stages: []
      },
      {
        id: "d1-m1",
        day: 1,
        startTime: "09:30",
        endTime: "11:00",
        title: "Module 1 — What an AI Agent Actually Is",
        handoutSource: "Module 1",
        format: "Lecture",
        objective:
          "Separate the three ideas everybody arrives with: traditional automation, chatbot, and agent. Learn the four parts of an AI colleague, then watch a live demonstration end to end. Nothing to install — hands off the keyboard.",
        stages: []
      },
      {
        id: "d1-break-1",
        day: 1,
        startTime: "11:00",
        endTime: "11:15",
        title: "Refreshment break",
        handoutSource: "",
        format: "Plenary",
        objective: "",
        stages: [],
        isBreak: true,
        breakType: "tea"
      },
      {
        id: "d1-m2",
        day: 1,
        startTime: "11:15",
        endTime: "12:15",
        title: "Module 2 — Setting Up Your First AI Agent",
        handoutSource: "Module 2",
        format: "Hands-on",
        objective:
          "Laptops open. Create your project in Cowork, write the Instructions block, connect exactly one folder, and see for yourself how Claude asks permission before it acts. By the end of this hour you have a working AI colleague that can read and write your files.",
        stages: [
          {
            id: "d1-m2-s1",
            promptCode: "P1",
            title: "Your project's system prompt",
            durationMinutes: 20,
            description:
              "Paste the Sinar Jaya job description into Instructions word for word — you will write your own in Module 3."
          },
          {
            id: "d1-m2-s2",
            promptCode: "P3",
            title: "Your first task",
            durationMinutes: 15,
            description:
              "Ask a question that can only be answered by opening the file, and watch Claude decide by itself to read the folder."
          },
          {
            id: "d1-m2-s3",
            promptCode: "P4",
            title: "Prove it can create a file",
            durationMinutes: 15,
            description:
              "A small file written into 02 Outputs. If this works, everything else in the two days works."
          }
        ]
      },
      {
        id: "d1-lunch",
        day: 1,
        startTime: "12:15",
        endTime: "13:15",
        title: "Lunch",
        handoutSource: "",
        format: "Plenary",
        objective: "",
        stages: [],
        isBreak: true,
        breakType: "lunch"
      },
      {
        id: "d1-m3",
        day: 1,
        startTime: "13:15",
        endTime: "14:45",
        title: "Module 3 — Prompt Engineering",
        handoutSource: "Module 3",
        format: "Hands-on",
        objective:
          "Why prompts fail, and the five-part recipe that fixes them: Role, Task, Input, Output, Rules. You compare a weak prompt against the same request written properly, learn the three ways to give an agent your own knowledge, then write a system prompt for your own job and keep it for the capstone.",
        stages: [
          {
            id: "d1-m3-s1",
            promptCode: "P5 / P6",
            title: "The same request, weak and rewritten",
            durationMinutes: 30,
            description:
              "\"Analyse my sales data and give me some insights\" versus the five-part version — and the first clue about the state of the data."
          },
          {
            id: "d1-m3-s2",
            promptCode: "P7",
            title: "Write your own system prompt",
            durationMinutes: 40,
            description:
              "For a real task from your own job, not the worked example. You reuse this on Day 2 in the capstone."
          }
        ]
      },
      {
        id: "d1-break-2",
        day: 1,
        startTime: "14:45",
        endTime: "15:00",
        title: "Refreshment break",
        handoutSource: "",
        format: "Plenary",
        objective: "",
        stages: [],
        isBreak: true,
        breakType: "tea"
      },
      {
        id: "d1-lab1",
        day: 1,
        startTime: "15:00",
        endTime: "17:00",
        title: "Lab 1 — Excel with an AI Colleague",
        handoutSource: "Lab 1",
        format: "Laboratory",
        objective:
          "Two hours, hands on the keyboard. Six months of raw invoice lines, deliberately imperfect in exactly the way real exported data is. Profile it before building anything on top of it, fix what you find, then build a summary workbook you can defend in front of a director.",
        stages: [
          {
            id: "d1-lab1-s1",
            promptCode: "P8",
            title: "Stage 1 — Look before you leap",
            durationMinutes: 25,
            description:
              "Profile the file first: row counts, duplicates, blanks, and region names that appear twice with different spellings."
          },
          {
            id: "d1-lab1-s2",
            promptCode: "P9–P11",
            title: "Stage 2 — Deal with the problems",
            durationMinutes: 30,
            description:
              "Decide what to fix, what to flag, and what to leave alone — with a record of every change."
          },
          {
            id: "d1-lab1-s3",
            promptCode: "P12",
            title: "Stage 3 — Build the summary workbook",
            durationMinutes: 35,
            description:
              "Live formulas, not typed values. Change one number in the source and watch the totals move — that test is the whole point."
          },
          {
            id: "d1-lab1-s4",
            promptCode: "P13",
            title: "Stage 4 — Charts and presentation",
            durationMinutes: 20,
            description: "Formatting that survives being emailed to somebody senior."
          },
          {
            id: "d1-lab1-s5",
            promptCode: "Your own",
            title: "Stage 5 — Your exercise",
            durationMinutes: 10,
            description:
              "Write this prompt yourself using the recipe, without copying one from the book."
          }
        ]
      }
    ]
  },
  {
    dayNumber: 2,
    theme: "Put It to Work",
    subTitle: "Word · PowerPoint · Scanned PDFs · Remote and automatic · Capstone",
    description:
      "Yesterday you taught your AI colleague to handle numbers. Today it handles words, pictures and paper — then you learn to send it work from your phone and set it to run without you. The day closes with a group capstone built for a real situation from somebody's actual job, demonstrated live.",
    modules: [
      {
        id: "d2-recap",
        day: 2,
        startTime: "09:00",
        endTime: "09:15",
        title: "Recap and Objectives",
        handoutSource: "Day 2 opening",
        format: "Plenary",
        objective:
          "Before you touch the keyboard: everything today builds on a working setup from Module 2, so anything still broken gets fixed now. Fifteen minutes of fixing beats six hours of frustration.",
        stages: []
      },
      {
        id: "d2-lab2",
        day: 2,
        startTime: "09:15",
        endTime: "11:00",
        title: "Lab 2 — Word Documents with an AI Colleague",
        handoutSource: "Lab 2",
        format: "Laboratory",
        objective:
          "Excel is judged on whether the numbers are right; Word is judged on whether it sounds right. Most of this lab is controlling tone, structure and length — starting by banning the three tells of AI-written text: empty openers, praise instead of facts, and hedging.",
        stages: [
          {
            id: "d2-lab2-s1",
            promptCode: "P14",
            title: "Stage 1 — The management report",
            durationMinutes: 35,
            description:
              "A one-page report built from yesterday's verified workbook, saved into 02 Outputs."
          },
          {
            id: "d2-lab2-s2",
            promptCode: "P15–P16",
            title: "Stage 2 — Fixing what comes back",
            durationMinutes: 30,
            description:
              "Version 2 is where the value is. Cut the adjectives, restore the numbers, tighten to one page."
          },
          {
            id: "d2-lab2-s3",
            promptCode: "P17",
            title: "Stage 3 — Turn it into a reusable template",
            durationMinutes: 25,
            description:
              "Your house style, saved into 03 Templates, so next month starts from a format you already approved."
          },
          {
            id: "d2-lab2-s4",
            promptCode: "Your own",
            title: "Stage 4 — Your exercise",
            durationMinutes: 15,
            description:
              "A debt collection letter from a prompt you write yourself — and a decision about what happens if a customer has more than one overdue invoice."
          }
        ]
      },
      {
        id: "d2-break-1",
        day: 2,
        startTime: "11:00",
        endTime: "11:15",
        title: "Refreshment break",
        handoutSource: "",
        format: "Plenary",
        objective: "",
        stages: [],
        isBreak: true,
        breakType: "tea"
      },
      {
        id: "d2-lab3",
        day: 2,
        startTime: "11:15",
        endTime: "12:15",
        title: "Lab 3 — PowerPoint with an AI Colleague",
        handoutSource: "Lab 3",
        format: "Laboratory",
        objective:
          "One hour, fast, because you already have the content. Never ask for a deck from nothing — ask for a deck from a document you have already checked, so your review is only about presentation.",
        stages: [
          {
            id: "d2-lab3-s1",
            promptCode: "P18",
            title: "The board deck",
            durationMinutes: 35,
            description:
              "Eight slides with speaker notes on every one, for a 15-minute half-year review with two directors."
          },
          {
            id: "d2-lab3-s2",
            promptCode: "P19–P20",
            title: "Review and your own pitch deck",
            durationMinutes: 25,
            description:
              "Every slide checked in Slide Show view for overflowing text, every figure traced back to your workbook."
          }
        ]
      },
      {
        id: "d2-lunch",
        day: 2,
        startTime: "12:15",
        endTime: "13:15",
        title: "Lunch",
        handoutSource: "",
        format: "Plenary",
        objective: "",
        stages: [],
        isBreak: true,
        breakType: "lunch"
      },
      {
        id: "d2-m4",
        day: 2,
        startTime: "13:15",
        endTime: "14:15",
        title: "Module 4 — Scanned PDFs and Unstructured Data",
        handoutSource: "Module 4",
        format: "Hands-on",
        objective:
          "The single most tedious task in most finance and admin departments: somebody reads a scanned supplier invoice and types the numbers into the accounting system. You replace the typing — and build the register that lets a human check the machine's work in under two minutes.",
        stages: [
          {
            id: "d2-m4-s1",
            promptCode: "P21",
            title: "Stage 1 — Read the invoice",
            durationMinutes: 15,
            description:
              "Why a scanned PDF is a photograph, not text, and what that means for accuracy."
          },
          {
            id: "d2-m4-s2",
            promptCode: "P22",
            title: "Stage 2 — Fixed-format extraction",
            durationMinutes: 20,
            description:
              "A JSON schema — a blank form filled in the same way every time — including an honest confidence rating and a list of fields a human should check."
          },
          {
            id: "d2-m4-s3",
            promptCode: "P23",
            title: "Stage 3 — Into a spreadsheet",
            durationMinutes: 25,
            description:
              "A two-sheet invoice register with live Quantity × Unit Price formulas, a variance column, amber highlighting on low-confidence fields, and blank Reviewed By / Review Date / Approved columns."
          }
        ]
      },
      {
        id: "d2-break-2",
        day: 2,
        startTime: "14:15",
        endTime: "14:30",
        title: "Refreshment break",
        handoutSource: "",
        format: "Plenary",
        objective: "",
        stages: [],
        isBreak: true,
        breakType: "tea"
      },
      {
        id: "d2-m5",
        day: 2,
        startTime: "14:30",
        endTime: "15:00",
        title: "Module 5 — Working Remotely and Automatically",
        handoutSource: "Module 5",
        format: "Demonstration",
        objective:
          "Two ways to get work out of your AI colleague without sitting in front of your laptop: Dispatch, which is a message from your phone to a colleague sitting at your desk, and scheduled tasks, which are a standing instruction to that colleague. Includes the security conversation you need to have before enabling either at work.",
        stages: [
          {
            id: "d2-m5-s1",
            promptCode: "P24",
            title: "Your first message from your phone",
            durationMinutes: 15,
            description:
              "Ask for the top three regions and their RM totals — from your phone, with your laptop awake across the room."
          },
          {
            id: "d2-m5-s2",
            promptCode: "P25",
            title: "A weekly scheduled task",
            durationMinutes: 15,
            description:
              "Describe the job once, set the timing in ordinary language, review what Claude proposes, confirm."
          }
        ]
      },
      {
        id: "d2-capstone",
        day: 2,
        startTime: "15:00",
        endTime: "16:30",
        title: "Capstone Project — Build a Digital Colleague",
        handoutSource: "Capstone",
        format: "Group build",
        objective:
          "Groups of three or four. Ninety minutes to design and build a working AI colleague for a real business situation: reconciliation, HR document automation, scheduled sales reporting — or, best of all, a real task from somebody in the group's actual job.",
        stages: [
          {
            id: "d2-capstone-s1",
            promptCode: "P26",
            title: "Kickoff — let the agent interview you",
            durationMinutes: 20,
            description:
              "Claude asks up to eight questions before writing anything, then drafts the system prompt and stops for your approval."
          },
          {
            id: "d2-capstone-s2",
            promptCode: "Group work",
            title: "Build",
            durationMinutes: 70,
            description:
              "A group-written system prompt, at least two working prompts, at least one finished file — and a statement of three limits."
          }
        ]
      },
      {
        id: "d2-presentations",
        day: 2,
        startTime: "16:30",
        endTime: "17:00",
        title: "Presentations & Close",
        handoutSource: "Capstone",
        format: "Plenary",
        objective:
          "Five minutes per group, demonstrated live in front of the room. Assessed on whether it works, the quality of the system prompt, honesty about limits, realism, and whether a non-technical person in the audience can follow what you built.",
        stages: []
      }
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do I need to know how to code?",
    answer:
      "No. This handout is written for people who do not work in IT. Every technical word is explained in plain English the first time it appears, and again in the glossary. There is no command line and nothing to program — you write instructions in ordinary English. If you can use email and Microsoft Office, you can do everything in this course.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Do I need a paid Claude account?",
    answer:
      "Yes — Pro, Max, Team or Enterprise. The free plan can chat with you, but it cannot create Excel, Word, PowerPoint or PDF files and it cannot open folders on your computer. Those two abilities are the entire point of the course, so a paid plan is not optional here. Please have this sorted before Day 1.",
    category: "Requirements"
  },
  {
    id: "faq-3",
    question: "What should I bring, and what should I do before Day 1?",
    answer:
      "A laptop (Windows 10/11, or a Mac from 2020 or later) with Excel, Word and PowerPoint installed, plus your phone for Day 2. Before you arrive: install Claude Desktop from claude.com/download, sign in and confirm your plan, switch on Settings › Capabilities › Code execution and file creation, and create a Documents\\AI Workshop folder containing 01 Data, 02 Outputs and 03 Templates. Arrive with that done and you will be ahead of the room.",
    category: "Requirements"
  },
  {
    id: "faq-4",
    question: "My company laptop blocks new software. Is that a problem?",
    answer:
      "It is, and it is the one thing you cannot fix on the day. Many company laptops are locked down; if you see \"Your administrator has blocked this app\" you need your IT department to approve the installation. Send them this in advance: the application is Claude Desktop by Anthropic, downloaded from claude.com/download. On Team and Enterprise plans your Claude administrator also controls the code execution setting, so ask them to enable it at the same time.",
    category: "Requirements"
  },
  {
    id: "faq-5",
    question: "How is this different from the AI Workshop for Accountants?",
    answer:
      "The accountants course is organised around accounting tasks — bank statements, Form E, SME tax. This one is organised around the agent itself: how to configure it, instruct it, and give it access, then prove the configuration works across Excel, Word, PowerPoint and scanned PDFs. It is not accounting-specific, and it suits any office role that produces documents from data. The two courses stand alone; taking both is a bonus, not a requirement.",
    category: "Curriculum"
  },
  {
    id: "faq-6",
    question: "Can I use my own company data during the workshop?",
    answer:
      "Everything in the labs runs on a fictional Malaysian company, Sinar Jaya Trading Sdn Bhd, so nothing confidential leaves the room. For the capstone you may use a real task from your own job — use non-confidential data, or real data with names replaced by codes. Appendix D of your handout carries a PDPA checklist to run through before you point any of this at real client work.",
    category: "Logistics"
  },
  {
    id: "faq-7",
    question: "What do I take home?",
    answer:
      "The full participant handout — every step, including the small ones that are easy to forget, plus a plain-English glossary, a prompt library of all 26 prompts, a troubleshooting appendix and a Monday-morning action plan. You also keep everything you built: your configured project, your workbook, report, template, board deck and invoice register.",
    category: "General"
  },
  {
    id: "faq-8",
    question: "Will the AI just do my job for me?",
    answer:
      "No, and the course is blunt about that. It removes the typing; the judgement stays with you. Every lab ends with a checkpoint you verify by hand, the capstone marks down any group claiming its agent needs no supervision, and one rule survives every change in this technology: AI produces the draft, you review it, you sign it. Everything here makes you faster. Nothing here makes you less accountable.",
    category: "General"
  }
];
