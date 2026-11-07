/**
 * Copy for the redesigned (Nov 2026) landing page.
 * Short, outcome-first wording. Registration form labels still come from ../i18n.
 */
import type { Lang } from '../i18n';

export type CategoryId = 'paper' | 'finance' | 'inbox' | 'build' | 'brain';

export interface UseCase {
  cat: CategoryId;
  title: string;
  line: string;
  img?: string;
}

export interface V2Content {
  nav: { label: string; href: string }[];
  registerCta: string;
  hero: {
    badge: string;
    titleTop: string;
    titleAccent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    fullTag: string;
    chips: string[];
  };
  proof: { big: string; small: string }[];
  beforeAfter: {
    eyebrow: string;
    heading: string;
    items: { task: string; before: string; after: string }[];
    note: string;
  };
  journey: {
    eyebrow: string;
    heading: string;
    sub: string;
    steps: { day: string; title: string; text: string }[];
  };
  cases: {
    eyebrow: string;
    heading: string;
    sub: string;
    all: string;
    categories: Record<CategoryId, string>;
    items: UseCase[];
    finale: { title: string; text: string };
  };
  bonus: {
    eyebrow: string;
    heading: string;
    items: { title: string; text: string }[];
  };
  trainer: {
    eyebrow: string;
    name: string;
    role: string;
    bio: string;
    points: string[];
    classCaption: string;
  };
  pricing: {
    eyebrow: string;
    heading: string;
    perPax: string;
    hrdc: string;
    cash: string;
    group: string;
    includes: string[];
    venueLabel: string;
    smallClass: string;
  };
  nextBody: string;
  faq: { heading: string; items: { q: string; a: string }[] };
  closing: { heading: string; text: string };
  footer: { tagline: string; rights: string; signOff: string };
}

const zh: V2Content = {
  nav: [
    { label: '能做什么', href: '#results' },
    { label: '两天流程', href: '#journey' },
    { label: '实战案例', href: '#cases' },
    { label: '讲师', href: '#trainer' },
    { label: '常见问题', href: '#faq' }
  ],
  registerCta: '立即报名',
  hero: {
    badge: '两天实操工作坊 · HRD Corp 注册课程',
    titleTop: '两天，\n把最烦的工作',
    titleAccent: '交给 AI 同事',
    sub: '不是教你和 AI 聊天。从你公司的痛点出发，亲手设置一个会填表、对账、查邮件、做报表、写网页的 AI 智能代理 —— 最后带走你自己的项目。',
    ctaPrimary: '预留座位',
    ctaSecondary: '看看它能做什么',
    fullTag: '11月4–5日班 已满额',
    chips: ['华语授课', '零程式', '小班 10–15 人']
  },
  proof: [
    { big: '14+', small: '个真实工作案例' },
    { big: '0', small: '程式基础要求' },
    { big: '10–15', small: '人小班，手把手' },
    { big: '1', small: '个你自己的 AI 项目' }
  ],
  beforeAfter: {
    eyebrow: '上课前 vs 上课后',
    heading: '这些事，以后不用再自己做',
    items: [
      { task: '找齐一年的 TNB、门牌税、TnGo 收据', before: '翻邮箱翻半天', after: '一句话，AI 全部列出来' },
      { task: '每月银行对账', before: '逐笔手工勾对', after: 'AI 自动配对，只标出差异' },
      { task: '每天早上几十封邮件', before: '一封一封看，怕漏掉', after: '一份早报自动送到：要跟进的、税务更新、今天约会' },
      { task: '预算 vs 实际 评语', before: '写一个下午', after: '几分钟出初稿，中英马三语' },
      { task: '把审计报告变成老板看得懂的', before: '几十页 PDF 没人看', after: '一个有图表、有解说的仪表板' },
      { task: '上政府网站下载最新通告、填表格', before: '每次手动点、手动填', after: 'AI 控制浏览器帮你完成，你只需确认' }
    ],
    note: 'AI 准备，人来批准 —— 所有寄出、付款、提交的动作都由你最后确认。'
  },
  journey: {
    eyebrow: '两天怎么上',
    heading: '先找痛点，再动手做',
    sub: '大部分 AI 课从工具开始。我们从你的生意开始。',
    steps: [
      { day: '第 1 天', title: '认识 AI 智能代理', text: '它和聊天机器人差在哪里？现场看它真的替人做事。' },
      { day: '第 1 天', title: '定策略 · 找痛点', text: '写下你公司最浪费时间的工作，按「影响 × 难易」排出优先。' },
      { day: '第 1 天', title: '拆解流程 · 定项目', text: '把一个流程拆成步骤，决定哪里交给 AI、哪里由人把关。' },
      { day: '第 1 天', title: '设置你的 Claude', text: '在自己的手提电脑上装好、连好邮件、日历、浏览器和文件夹。' },
      { day: '第 1–2 天', title: '14 个实战案例', text: '每个案例先示范，再由你亲手做一遍。' },
      { day: '第 2 天', title: '完成你自己的项目', text: '回到第一天写下的痛点，用 AI 做出你的解决方案，带回公司就能用。' }
    ]
  },
  cases: {
    eyebrow: '实战案例',
    heading: '你会亲手做出这些',
    sub: '全部来自讲师自己事务所每天在用的系统。点选类别看看。',
    all: '全部',
    categories: {
      paper: '文书自动化',
      finance: '财务与税务',
      inbox: '邮件 · 日历 · 浏览器',
      build: '自己做系统',
      brain: '第二大脑'
    },
    items: [
      { cat: 'paper', title: '自动填表格', line: '给它订单清单，它按你的模板逐张填好销售单，算好总额。' },
      { cat: 'paper', title: '起草销售提案', line: '给客户资料，它写出有结构、有报价的提案初稿。' },
      { cat: 'paper', title: '画流程图', line: '用文字描述流程，它画出清楚的工作流程图。' },
      { cat: 'paper', title: 'HR 16 项性格测验问卷', line: '中英双语线上问卷，自动计分，帮你面试有凭有据。', img: './img/v2/hr-questionnaire-zh.webp' },
      { cat: 'finance', title: '预算 vs 实际 评语', line: '上传 P&L，它找出重大差异并写出解释。' },
      { cat: 'finance', title: '审计报告 → 仪表板', line: '把复杂的财务数据变成图表加解说，中、英、马文都可以。' },
      { cat: 'finance', title: 'CP204 预估税', line: '用年初至今的账目推算全年盈利，算出应缴税额。' },
      { cat: 'finance', title: '银行对账', line: '银行月结单对账簿，自动配对，标出未对上的项目。' },
      { cat: 'inbox', title: '找出所有账单收据', line: '一句话找出门牌税、TNB、TnGo 等账单，或某客户多年来的所有往来邮件。', img: './img/v2/email-bills.webp' },
      { cat: 'inbox', title: '每日早报', line: '每天自动送来：要跟进的邮件、重要税务更新、今天的约会。', img: './img/v2/daily-brief.webp' },
      { cat: 'inbox', title: '日历自动提醒', line: '自动把路税更新等期限放进日历，提前提醒你。' },
      { cat: 'inbox', title: 'AI 控制浏览器', line: '订票、填网上表格（如 Form B）、下载政府网站最新通告。' },
      { cat: 'build', title: '即时财务仪表板网页', line: '每日收款、应收账款、库存余额，一个网页随时看，还能预测未来 6 个月。', img: './img/v2/live-dashboard.png' },
      { cat: 'build', title: '员工报销系统', line: '上传收据照片或 PDF，AI 读出供应商、日期、金额，直接生成报销单。', img: './img/v2/expense-claims.png' },
      { cat: 'build', title: '网页 / 着陆页 + 免费上线', line: '描述你要什么，它做出网页，还教你免费放上网。' },
      { cat: 'build', title: 'SEO 审查', line: '检查你公司网站，列出可以马上改进的地方。' },
      { cat: 'build', title: '小型软件', line: '迷你开单系统、库存系统、个人所得税计算器 —— 桌面版或网页版。' },
      { cat: 'build', title: '公司办公门户', line: '把所有自建的工具放进一个漂亮、好用的办公入口。', img: './img/v2/office-portal.webp' },
      { cat: 'brain', title: 'Obsidian 第二大脑', line: '把客户、产品、人事、项目知识整理成 AI 随时能查的知识库。' }
    ],
    finale: {
      title: '最后：做你自己的项目',
      text: '用第一天写下的痛点，做出属于你公司的 AI 解决方案。'
    }
  },
  bonus: {
    eyebrow: '报名即送',
    heading: '带回去的不只是笔记',
    items: [
      { title: 'SST 第二大脑（免费）', text: '最新完整 SST 法规整理成 Obsidian 知识库，并教你以后自己更新维护。' },
      { title: '学员手册 + 提示词', text: '每个案例的步骤与复制即用的提示词，回到公司可以自己重做。' },
      { title: '你亲手做的所有档案', text: '两天里做出来的表格、报表、网页、工具，全部归你。' },
      { title: '一个能运作的 AI 同事', text: '在你自己的手提电脑上设置好，第二天回公司就能用。' }
    ]
  },
  trainer: {
    eyebrow: '你的讲师',
    name: 'Wong Yew Choon',
    role: '税务、e-Invoice、SST 与 GST 专家',
    bio: '会计出身，多年协助企业落实 GST、SST 及电子发票。今天，他的事务所每天都在用 AI 智能代理处理报销、报税单据、预约、早报 —— 课堂上教的，都是他自己真的在用的。',
    points: ['协助数百家企业落实 GST、SST 及 e-Invoice', '跨国公司 ERP 系统导入经验', 'Excel、VBA 与商业数据分析', '亲手搭建事务所内部 AI 办公门户'],
    classCaption: '小班上课，讲师逐一协助'
  },
  pricing: {
    eyebrow: '报名',
    heading: '预留你的座位',
    perPax: '每位学员',
    hrdc: 'HRDC',
    cash: 'CASH',
    group: '团体优惠：第一位付全额，同一集团公司第二位起七折（减 30%）。',
    includes: ['两天实操课程（上午 9:00 – 下午 5:00）', '学员手册与提示词', 'SST 第二大脑（免费赠送）'],
    venueLabel: '地点',
    smallClass: '每班只收 10–15 人'
  },
  nextBody: '我们会联络你确认座位与付款方式，并寄上课前准备清单（手提电脑与 Claude 帐号的设置步骤）。',
  faq: {
    heading: '常见问题',
    items: [
      { q: '我不会写程式，跟得上吗？', a: '跟得上。全程用中文或英文描述你要什么，AI 负责写。会用电邮和 Microsoft Office 就够了。' },
      { q: '需要准备什么？', a: '一台有管理员权限的手提电脑，以及 Claude 付费帐号（Pro 或以上）。报名后我们会寄上一步一步的设置说明。' },
      { q: '可以用公司真实资料吗？', a: '可以，但建议先去掉敏感资料。课堂上会教你如何安全地准备资料再交给 AI。' },
      { q: 'HRDC 怎么申请？', a: '本课程为 HRD Corp 注册课程（SBL-Khas）。贵公司在开课前于 HRD Corp 帐号提出申请，我们提供所需文件。' },
      { q: '可以安排企业内训吗？', a: '可以。我们可到贵公司上课，并用你们自己的文件和流程做案例。' }
    ]
  },
  closing: {
    heading: '回到公司那天起，让 AI 替你做重复的工作',
    text: '每班只收 10–15 人，上一班已满额。'
  },
  footer: {
    tagline: '两天，从「和 AI 聊天」到「把工作交给 AI」。',
    rights: '版权所有',
    signOff: 'AI 准备，人来批准。'
  }
};

const en: V2Content = {
  nav: [
    { label: 'What it does', href: '#results' },
    { label: 'The 2 days', href: '#journey' },
    { label: 'Use cases', href: '#cases' },
    { label: 'Trainer', href: '#trainer' },
    { label: 'FAQ', href: '#faq' }
  ],
  registerCta: 'Register now',
  hero: {
    badge: '2-day hands-on workshop · HRD Corp registered',
    titleTop: 'In two days, hand your most tedious work',
    titleAccent: 'to an AI colleague',
    sub: 'Not another “how to chat with AI” class. Start from your own business pain points, set up an AI agent that fills forms, reconciles, searches email, builds reports and web pages — and leave with your own working project.',
    ctaPrimary: 'Reserve a seat',
    ctaSecondary: 'See what it can do',
    fullTag: '4–5 Nov class is FULL',
    chips: ['Conducted in Mandarin', 'No coding', 'Small class of 10–15']
  },
  proof: [
    { big: '14+', small: 'real work use cases' },
    { big: '0', small: 'coding needed' },
    { big: '10–15', small: 'per class, hands-on help' },
    { big: '1', small: 'AI project of your own' }
  ],
  beforeAfter: {
    eyebrow: 'Before vs after',
    heading: 'Jobs you will stop doing by hand',
    items: [
      { task: 'Collect a year of TNB, quit rent and TnGo receipts', before: 'Half a day digging through email', after: 'One sentence — AI lists them all' },
      { task: 'Monthly bank reconciliation', before: 'Ticking items one by one', after: 'AI matches them and flags only the differences' },
      { task: 'Dozens of emails every morning', before: 'Read each one, afraid to miss something', after: 'A morning brief arrives: follow-ups, tax updates, today’s appointments' },
      { task: 'Budget vs actual commentary', before: 'A whole afternoon of writing', after: 'A first draft in minutes, in English, Chinese or Malay' },
      { task: 'Make the audit report readable for the boss', before: 'A 40-page PDF nobody opens', after: 'A dashboard with charts and plain explanations' },
      { task: 'Download government updates, fill online forms', before: 'Click and type every time', after: 'AI drives the browser — you just confirm' }
    ],
    note: 'AI prepares, a human approves — nothing is sent, paid or filed until you say so.'
  },
  journey: {
    eyebrow: 'How the two days run',
    heading: 'Find the pain first, then build',
    sub: 'Most AI courses start with the tool. We start with your business.',
    steps: [
      { day: 'Day 1', title: 'Meet the AI agent', text: 'How it differs from a chatbot — watch it do real work, live.' },
      { day: 'Day 1', title: 'Strategy & pain points', text: 'List the work that wastes the most time and rank it by impact × ease.' },
      { day: 'Day 1', title: 'Break down a process', text: 'Split one process into steps: what AI does, where a human checks.' },
      { day: 'Day 1', title: 'Set up your Claude', text: 'On your own laptop, connected to your email, calendar, browser and folders.' },
      { day: 'Day 1–2', title: '14 hands-on use cases', text: 'Each one shown live first, then you do it yourself.' },
      { day: 'Day 2', title: 'Build your own project', text: 'Back to the pain point from Day 1 — build your fix and take it to the office.' }
    ]
  },
  cases: {
    eyebrow: 'Use cases',
    heading: 'What you will build with your own hands',
    sub: 'Every one comes from systems the trainer’s own firm uses daily. Pick a category.',
    all: 'All',
    categories: {
      paper: 'Paperwork',
      finance: 'Finance & tax',
      inbox: 'Email · Calendar · Browser',
      build: 'Build your own apps',
      brain: 'Second brain'
    },
    items: [
      { cat: 'paper', title: 'Fill forms automatically', line: 'Give it a list of orders; it fills each sales order in your template and totals it.' },
      { cat: 'paper', title: 'Draft a sales proposal', line: 'Give it the client brief; it writes a structured proposal with pricing.' },
      { cat: 'paper', title: 'Draw workflow diagrams', line: 'Describe a process in words; it draws a clean flowchart.' },
      { cat: 'paper', title: 'HR 16-factor questionnaire', line: 'A bilingual online test that scores itself — hire with evidence.', img: './img/v2/hr-questionnaire-en.webp' },
      { cat: 'finance', title: 'Budget vs actual commentary', line: 'Upload the P&L; it finds the big variances and explains them.' },
      { cat: 'finance', title: 'Audit report → dashboard', line: 'Turn complex financials into charts with commentary, in several languages.' },
      { cat: 'finance', title: 'CP204 tax estimate', line: 'Project full-year profit from year-to-date accounts and work out the tax.' },
      { cat: 'finance', title: 'Bank reconciliation', line: 'Statement against ledger — matched automatically, exceptions flagged.' },
      { cat: 'inbox', title: 'Find every bill & receipt', line: 'Quit rent, assessment, TNB, TnGo — or years of emails with one client — in one sentence.', img: './img/v2/email-bills.webp' },
      { cat: 'inbox', title: 'Daily newsletter', line: 'Every morning: emails to follow up, key tax updates, today’s appointments.', img: './img/v2/daily-brief.webp' },
      { cat: 'inbox', title: 'Calendar reminders', line: 'Deadlines like road tax renewal go into your calendar automatically.' },
      { cat: 'inbox', title: 'AI drives the browser', line: 'Book tickets, fill online forms (e.g. Form B), download government updates.' },
      { cat: 'build', title: 'Live finance dashboard', line: 'Daily collections, debtors, stock balance — one web page, always current, with a 6-month outlook.', img: './img/v2/live-dashboard.png' },
      { cat: 'build', title: 'Staff expense claims', line: 'Upload receipt photos or PDFs; AI reads supplier, date and amount and fills the claim form.', img: './img/v2/expense-claims.png' },
      { cat: 'build', title: 'Web page + free hosting', line: 'Describe it, get a landing page, and put it online for free.' },
      { cat: 'build', title: 'SEO audit', line: 'Check your company website and list quick fixes.' },
      { cat: 'build', title: 'Small business apps', line: 'Mini invoicing, inventory, income-tax calculator — desktop or web.' },
      { cat: 'build', title: 'Office portal', line: 'Put every tool you built into one friendly office portal.', img: './img/v2/office-portal.webp' },
      { cat: 'brain', title: 'Obsidian second brain', line: 'Client, product, HR and project know-how in a knowledge base AI can search.' }
    ],
    finale: {
      title: 'Finally: your own project',
      text: 'Turn the pain point you wrote on Day 1 into an AI solution for your company.'
    }
  },
  bonus: {
    eyebrow: 'Included',
    heading: 'You leave with more than notes',
    items: [
      { title: 'SST Second Brain (free)', text: 'The latest full SST legislation as an Obsidian knowledge base — and how to keep it updated.' },
      { title: 'Participant pack + prompts', text: 'Step-by-step guides and copy-paste prompts to redo every case at your desk.' },
      { title: 'Everything you build', text: 'Every form, report, web page and tool you make in the two days is yours.' },
      { title: 'A working AI colleague', text: 'Set up on your own laptop, ready to use at the office the next day.' }
    ]
  },
  trainer: {
    eyebrow: 'Your trainer',
    name: 'Wong Yew Choon',
    role: 'Tax, e-Invoicing, SST & GST specialist',
    bio: 'An accountant who has helped businesses implement GST, SST and e-Invoicing for years. Today his firm runs AI agents every day for expense claims, tax slips, appointments and morning briefs — what he teaches is what he actually uses.',
    points: ['Guided hundreds of businesses through GST, SST and e-Invoicing', 'ERP implementation in a multinational', 'Excel, VBA and business data analysis', 'Built his firm’s own AI office portal'],
    classCaption: 'Small classes, one-to-one help'
  },
  pricing: {
    eyebrow: 'Register',
    heading: 'Reserve your seat',
    perPax: 'per participant',
    hrdc: 'HRDC',
    cash: 'CASH',
    group: 'Group offer: first participant pays full; 2nd onwards from the same group of companies gets 30% off.',
    includes: ['2 days hands-on (9:00 AM – 5:00 PM)', 'Participant pack and prompts', 'SST Second Brain (free)'],
    venueLabel: 'Venue',
    smallClass: 'Only 10–15 seats per class'
  },
  nextBody: 'We will contact you to confirm your seat and payment, and send a pre-class checklist (laptop and Claude account setup).',
  faq: {
    heading: 'Frequently asked questions',
    items: [
      { q: 'I can’t code. Can I keep up?', a: 'Yes. You describe what you want in plain words and the AI writes it. If you use email and Microsoft Office, you are ready.' },
      { q: 'What do I need to bring?', a: 'A laptop with administrator rights and a paid Claude plan (Pro or above). We send step-by-step setup notes after you register.' },
      { q: 'Can I use real company data?', a: 'Yes, ideally with sensitive details removed first. We show you how to prepare data safely.' },
      { q: 'How does the HRDC route work?', a: 'This is an HRD Corp registered programme (SBL-Khas). Your company applies in its HRD Corp account before the class; we provide the documents.' },
      { q: 'Can you run it in-house?', a: 'Yes — at your office, with the cases built on your own files and processes.' }
    ]
  },
  closing: {
    heading: 'From your first day back, let AI do the repetitive work',
    text: 'Only 10–15 seats per class. The last class filled up.'
  },
  footer: {
    tagline: 'Two days from chatting with AI to handing it real work.',
    rights: 'All rights reserved',
    signOff: 'AI prepares. A human approves.'
  }
};

export const V2: Record<Lang, V2Content> = { zh, en };
