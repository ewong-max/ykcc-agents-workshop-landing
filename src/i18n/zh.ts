import { SiteContent } from './types';

/**
 * Simplified Chinese content, mirroring en.ts one-for-one.
 *
 * Conventions agreed with YKCC:
 *  - The course title stays in English. HRD Corp only permits a claimable
 *    course to be marketed under its registered title.
 *  - Product and technical names stay in English (Claude, Cowork, Excel,
 *    Word, PowerPoint, Artifact, Skill, MCP, GitHub, Next.js, HRD Corp, PDPA,
 *    Dispatch), as do literal folder and file names the participant types.
 */
export const zh: SiteContent = {
  htmlLang: 'zh-Hans',
  documentTitle: 'AI Agents for Business 101 | YKCC 两天实操工作坊',
  metaDescription:
    '为马来西亚中小企业团队设计的两天实操工作坊：先找出最值得用 AI 解决的问题，再把 Claude 配置成数码同事，分析你自己的业务数据，接着做出仪表板、网页和小程序，最后组建一支 AI Agent 团队。全程无需编程。',

  courseTitleLead: 'AI Agents for',
  courseTitleAccent: 'Business 101',

  subtitle: '把 AI Agent 打造成数码同事，真正提升企业生产力',
  tagline: '两天时间，让你从「跟 AI 聊天」走到「把真正的工作交给它」——你的文件、你的数据、你的工具——然后由你审核成果。',
  heroQuote:
    '聊天机器人只会回答问题。配置得当的 Claude 会记得你的业务背景、接通你的工具、直接处理你的文件和网页、按时自动执行，还能扩展成一支团队。你的工作从「每一步亲手打」变成「写清楚任务、检查成果」——就像带领一位能干的分析师一样。',
  targetAudience: '专为非 IT 背景人士撰写。只要你会用电邮和 Microsoft Office，这门课的每一步你都做得到——包括动手做网页的那一天。',

  schedule: {
    batches: [
      {
        id: 'oct27',
        datesLabel: '2026年10月27日及28日',
        datesShort: '10月27–28日',
        languageLabel: '英语授课'
      },
      {
        id: 'nov04',
        datesLabel: '2026年11月4日及5日',
        datesShort: '11月4–5日',
        languageLabel: '华语授课'
      }
    ],
    timeLabel: '上午9:00 – 下午5:00'
  },

  header: {
    skipToContent: '跳至主要内容',
    brandSubline: 'YKCC · 两天实操培训',
    navLabel: '页面导航',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    registerCta: '立即报名',
    languageLabel: '语言'
  },

  nav: [
    { href: '#anatomy', label: '课程理念' },
    { href: '#labs', label: '实操单元' },
    { href: '#trainer', label: '讲师' },
    { href: '#agenda', label: '课程议程' },
    { href: '#prepare', label: '课前准备' },
    { href: '#faq', label: '常见问题' }
  ],

  hero: {
    badge: '两天实操培训 · 亲手操作',
    quoteFooter: '别再只是聊天，开始把工作交出去。',
    ctaPrimary: '立即报名',
    ctaSecondary: '查看完整两天议程',
    stats: [
      { value: '两个梯次', label: '10月27–28日（英语）· 11月4–5日（华语）' },
      { value: '48 个实操', label: '学员资料包附可直接复制的提示词' },
      { value: '零编程', label: '无需 IT 背景' }
    ],
    imageAlt: '学员在培训课堂上使用手提电脑完成实操练习',
    visualTitle: '先现场示范，再由你亲手做',
    visualBody: '每个主题先现场示范，再由你在自己的电脑上亲手做一遍。你带走的是能用的成果，而不是「也许能用」的笔记。',
    takeawaysTitle: '你会带走什么',
    takeawaysNote: '在课堂上亲手完成',
    takeaways: [
      {
        lead: '一份适合你公司的 AI 计划',
        rest: '——四份工作表，用「影响 × 难易度」为痛点打分，并重新设计一个内建人工审批的流程。'
      },
      {
        lead: '一套配置好的 Claude',
        rest: '——带长期指令的项目、你自己的 Skill、连接器、浏览器操控，以及按时自动执行的例行任务。'
      },
      {
        lead: '可以分享给别人的成果',
        rest: '——实时仪表板、一个着陆页、发布成 Artifact 的网页小工具，以及一支帮你审核月结的 Agent 团队。'
      },
      {
        lead: '完整学员资料包',
        rest: '——整套投影片、全部 48 个实操及可复制的提示词、实操数据文件和现成的 Skill。'
      }
    ]
  },

  anatomy: {
    eyebrow: '思维模型',
    heading: '四层杠杆',
    intro: '聊天机器人只有一层：你问，它答。这门课的每个主题都在上面再加一层，直到 Claude 不再像搜索框，而更像一位你交代任务、再审核成果的同事。',
    partLabel: (index: number) => `第 ${index} 层`,
    humanEquivalentPrefix: '课堂上通过这些来学：'
  },

  recipe: {
    eyebrow: '用 AI 做更好的决策',
    heading: '像老板一样提问，而不是像程序员',
    intro: '这是我们在课堂上练习的提问范例。它有效，是因为它给了 Claude 角色、事实、你要的输出——还先问它开工前还需要什么资料。',
    sideNote: '角色 · 任务 · 输入 · 输出 · 规则',
    warningTitle: '技术性的问题，只会换来技术性的答案',
    warningBody:
      '问「按客户做一个枢纽分析表」，你得到的是一个枢纽分析表。问「哪些客户今年买得比去年少？少了多少？」，你得到的是一个决策。问业务问题，让 Claude 自己去搞定表格。'
  },

  labs: {
    eyebrow: '课堂练习',
    heading: '你会练习什么——以及它帮到谁',
    intro: '每个练习都围绕马来西亚中小企业里最耗时间的一项工作。你会看到它为什么重要、课堂上怎么做，以及公司哪个部门受益。',
    subIntro: '点选一个练习查看详情。所有练习都收录在学员资料包里，回到办公桌后可以自行重做。',
    tablistLabel: '课堂练习',
    purposeLabel: '为什么重要',
    howLabel: '课堂上怎么做',
    helpsLabel: '带来什么帮助',
    beneficiariesLabel: '受益对象',
    cta: '报名下一梯次',
    counter: (current: number, total: number) => `第 ${current} / 共 ${total} 项`
  },

  benefits: {
    eyebrow: '这门课的不同之处',
    heading: '先谈策略，再谈工具',
    intro: '多数 AI 课程从工具开始。这门课从你的业务开始——哪些问题值得解决——然后才教你怎么把它们交给 Claude。'
  },

  trainer: {
    eyebrow: '你的讲师',
    name: 'Wong Yew Choon',
    title: '税务、电子发票、SST 与 GST 专家',
    bio: '一位会计师，整个职业生涯都在让税务规定和系统真正在企业里运作起来；如今和你一起学习 AI，讲法务实、不卖弄术语。',
    imageAlt: '讲师 Wong Yew Choon',
    credentials: [
      {
        title: '税务与合规',
        desc: '曾协助数以百计的企业落实 GST、SST 和电子发票。'
      },
      {
        title: 'ERP 系统导入',
        desc: '曾在跨国公司参与全新 ERP 系统的导入。'
      },
      {
        title: 'Excel 与数据分析',
        desc: 'VBA、Excel 报表、业务数据分析与流程改善。'
      },
      {
        title: '和你一样在学 AI',
        desc: '今年才开始：先在 YouTube 自学，再上正式课程。'
      }
    ]
  },

  agenda: {
    eyebrow: '完整课程大纲',
    heading: '两天完整议程',
    intro: '第一天把 Claude 配置好，并让它处理你的数据。第二天做出可以分享的成果，再扩展成一支 Agent 团队。',
    daySelectLabel: '选择课程日',
    dayLabel: (day: number) => `第 ${day} 天`,
    sessionsLabel: '个环节',
    stagesLabel: '个实操与示范',
    handoutLabel: '投影片：',
    formatLabels: {
      Lecture: '讲授',
      'Hands-on': '动手实作',
      Demonstration: '现场示范',
      Laboratory: '实操单元',
      'Group build': '小组实作',
      Plenary: '全体'
    },
    lunchBreak: '午餐',
    teaBreak: '茶点休息',
    minuteSuffix: '分钟',
    footnote:
      '时间仅供参考。资料包共有 48 个实操——比两天能完成的更多——讲师会挑选最适合现场的部分，其余全部都在资料包里，回到办公桌后可以自行重做。',
    footnoteDates: '课程日期：2026年10月27日及28日（英语）或 11月4日及5日（华语），上午9:00 – 下午5:00。',
    cta: '立即报名'
  },

  registration: {
    eyebrow: '日期已确定 · 名额有限',
    heading: '预留你的座位',
    introAt: '地点：',
    introVenueSuffix: '。',
    introSuffix: '立即报名以预留名额，或洽询企业内训方案。',
    feeTitle: '课程费用（每位学员）',
    feeHrdcSuffix: '—— HRDC',
    feeCashSuffix: '—— 现金 CASH',
    groupDiscountNote: '团体优惠：第一位学员付全额；同一集团公司的第二位起，每位享七折（即减 30%）。',
    programmeNoLabel: '课程编号：',
    mycoidLabel: 'MYCoID：',
    registeredBadgeAlt: 'HRD Corp 注册培训机构',
    labels: {
      fullName: '姓名',
      email: '公司电邮',
      phone: '联络电话',
      company: '公司名称',
      paymentMethod: '付款方式',
      batch: '培训日期'
    },
    placeholders: {
      fullName: '例如：Tan Wei Ming',
      email: '例如：name@yourcompany.com.my',
      phone: '例如：+60 12-345 6789',
      company: '例如：Maju Jaya Trading Sdn Bhd'
    },
    batchNote: '两个梯次课程内容完全相同，只是日期与授课语言不同。',
    paymentHrdc: 'HRDC',
    paymentCash: '现金 CASH',
    pdpaNote: '🔒 你的个人资料将由 YKCC 依据马来西亚 PDPA 严格保密。',
    submitIdle: '提交报名',
    submitting: '提交中...',
    notConfiguredTitle: '尚未连接报名表单资料库。',
    notConfiguredBody:
      '请先部署 google-apps-script/ 内的 Apps Script，并把网址填入 src/lib/leadSubmission.ts。在此之前，报名提交会失败。',
    errorTitle: '你的报名未能储存。',
    genericError: '目前无法储存你的报名资料，请稍后再试一次。',
    thankYou: (name: string) => `${name}，谢谢你的报名！`,
    recordedFor: '我们已收到你报名参加 ',
    recordedSuffix: '。',
    summaryTitle: '报名资料摘要',
    summaryLabels: {
      id: '编号：',
      name: '姓名：',
      email: '电邮：',
      phone: '电话：',
      company: '公司：',
      paymentMethod: '付款方式：',
      batch: '培训日期：'
    },
    nextTitle: '接下来会怎样？',
    nextBody:
      '我们的培训团队将与你联系，确认座位与付款方式，并在你所选梯次开课前寄出出席须知。在这之前，请先完成下方的「课前准备」——Cowork 的设定需要管理员权限，请现在就跟 IT 部门处理好，别等到上课当天。',
    registerAnother: '为另一位同事 / 团队报名'
  },

  prepare: {
    eyebrow: '课前准备',
    heading: '请带着这些准备好再来',
    intro: '第一天开课前有六件事要处理好。几乎每一位在第一个小时卡住的学员，都是少了其中一项——通常是管理员权限。',
    folderEyebrow: '好习惯',
    folderTitle: '建立一个干净的文件夹',
    folderBodyBefore: 'Claude 只看得到你主动指给它看的文件夹——永远不是你整台电脑。请在 ',
    folderBodyMiddle: ' 里建立一个名称完全一致的文件夹 ',
    folderBodyAfter: '，并在里面再建三个子文件夹：',
    folderItems: [
      { name: '01 Data', note: '—— 你交给它的文件' },
      { name: '02 Outputs', note: '—— 它替你做好的文件' },
      { name: '03 Templates', note: '—— 你可重复使用的格式模板' }
    ],
    folderNote: '第一天早上把学员资料包解压到 01 Data，所有实操文件就会在提示词预期的位置。',
    switchTitle: '大家最常忘记的那一步',
    switchBodyBefore: 'Cowork 会在你的手提电脑里开一台小型虚拟机来执行任务，而 Windows 预设是关闭 ',
    switchBodyPath: 'Virtual Machine Platform（虚拟机平台）',
    switchBodyAfter:
      ' 的。这只需设定一次——在 Terminal（管理员）贴上两行指令，然后重启——我们会随出席须知把指令寄给你。没有管理员权限就无法完成。',
    switchNote: '虚拟桌面（VDI）和部分严格管控的公司电脑完全无法运行 Cowork。如果你的电脑属于这一类，请在第一天之前先测试，或带自己的手提电脑来。'
  },

  audience: {
    eyebrow: '适合谁参加',
    heading: '写给管数字、管文书工作的人',
    managerNoteTitle: '给正在为团队评估这门课的主管。',
    managerNoteBody:
      '课程会示范 Claude 操作网页、读取已连接的应用程序，并以实验性实操的方式通过 Telegram 或 WhatsApp 接收指令。每一项都遵循同一条黄金法则：AI 负责准备，人负责批准。任何东西在发送、付款或提交之前，都必须先经过人工检查。企业内训梯次可依贵公司的 IT 政策调整这些部分。'
  },

  faq: {
    eyebrow: '还有疑问？',
    heading: '常见问题',
    intro: '报名前你需要知道的一切。',
    finalCtaHeading: '准备好不再凡事亲手做了吗？',
    finalCtaBody:
      '立即报名，预留 2026年10月27日及28日（英语）或 11月4日及5日（华语）的座位。企业内训梯次可安排在贵公司举行，实操内容也能改用你们自己的文件。',
    finalCta: '立即报名'
  },

  footer: {
    logoAlt: 'YK Group',
    pdpaLine: '报名资料将依据马来西亚个人资料保护法（PDPA）严格保密。',
    exploreHeading: '快速浏览',
    workshopHeading: '课程资讯',
    facts: ['无需 IT 或编程背景', '需自备付费版 Claude 账号'],
    programmeNoLabel: '课程编号：',
    copyright: (year: number) => `© ${year} YKCC. 版权所有。`,
    signOff: 'AI 负责准备，人负责批准。'
  },

  agentParts: [
    {
      technicalName: 'Context（背景）',
      meaning: '项目、记忆，以及存放长期指令的 CLAUDE.md，让 Claude 在你打字之前就了解你的业务——你再也不必每个星期一重新解释一遍。',
      humanEquivalent: '项目、CLAUDE.md、Skill 和 Obsidian 知识库'
    },
    {
      technicalName: 'Action（行动）',
      meaning: 'Claude 直接打开并储存真实文件、在 Excel 和 PowerPoint 里工作、在 Chrome 里填网页表格，还能做出可以点击的仪表板和工具。',
      humanEquivalent: 'Cowork、Claude for Excel、Claude for Chrome、Artifact 和 Claude Design'
    },
    {
      technicalName: 'Reach（连接）',
      meaning: '经授权连接 Gmail、Drive、Calendar 以及你自己的系统。每一项都由你批准，没有任何东西会自动连上。',
      humanEquivalent: '连接器（Connectors）、插件和 MCP'
    },
    {
      technicalName: 'Scale（扩展）',
      meaning: '按时自动执行的工作，以及一位主导 Agent 把大任务分给各个专责 Agent、再检查它们交回的成果。',
      humanEquivalent: '例行任务（Routines）、Dispatch 和多 Agent 团队'
    }
  ],

  promptRecipe: [
    {
      number: 1,
      name: '角色',
      question: 'Claude 应该扮演谁？',
      example: '作为一名资深业务分析师……'
    },
    {
      number: 2,
      name: '任务',
      question: '到底要完成什么？',
      example: '说明你会如何分析一家叉车租赁客户的财务表现。'
    },
    {
      number: 3,
      name: '输入',
      question: '有哪些事实？',
      example: '客户拥有 412 台叉车，每年租金收入超过 RM600 万。'
    },
    {
      number: 4,
      name: '输出',
      question: '要交回什么？',
      example: '你的分析框架，以及你需要我提供的资料清单。'
    },
    {
      number: 5,
      name: '规则',
      question: '有哪些限制？',
      example: '先问清楚，不要自行假设。凡是需要对照现行税务和 SST 规定的地方，都要标出来。'
    }
  ],

  courseHighlights: [
    {
      title: '先策略，后工具',
      subtitle: '找出真正值得自动化的工作',
      description: '四份工作表带你从「我们现在在哪里？」走到一份打好分的痛点清单和一个重新设计的流程——让你第一个自动化的，就是最快回本的那一个。',
      metric: 'W1–W4',
      metricLabel: '用「影响 × 难易度」为你的公司打分'
    },
    {
      title: '交代任务，而不是聊天',
      subtitle: '14 项能力，一套操作系统',
      description: '项目、Skill、浏览器操控、连接器、Excel、例行任务、Design、Artifact、Vibe Coding、MCP、知识库和多 Agent 团队——每一项都先现场示范，再由你亲手做。',
      metric: '14 个主题',
      metricLabel: '先示范，再动手'
    },
    {
      title: '做出别人会用的东西',
      subtitle: '不只是聊天窗口里的答案',
      description: '一个老板打得开的仪表板、一个有主视觉区的着陆页、一个发布成 Artifact 并加进公司门户的网页小工具——全都靠「描述你要什么」做出来。',
      metric: '零编程',
      metricLabel: '你描述，Claude 来做'
    },
    {
      title: '人工把关',
      subtitle: '这门课的黄金法则',
      description: 'AI 负责准备，人负责批准。每个实操都会告诉你，在任何东西发送、付款、提交或发布之前要检查什么——小组总结项目也以此评分。',
      metric: '人工签核',
      metricLabel: 'AI 准备 · 你批准'
    }
  ],

  prerequisites: [
    {
      requirement: '一台有管理员权限的手提电脑——Windows 10/11，或 2020 年后的 Mac',
      why: '没有管理员权限，Claude 仍然装得上，但 Cowork 无法运行——而 Cowork 正是 Claude 处理你真实文件的方式。'
    },
    {
      requirement: '已安装 Claude Desktop，并能启动 Cowork',
      why: '从 claude.com/download 下载。Windows 用户还需完成右侧所说的一次性虚拟机平台设定。'
    },
    {
      requirement: '付费版 Claude 账号——Pro、Max、Team 或 Enterprise',
      why: '免费版没有 Cowork、文件生成、Skill 和连接器功能。'
    },
    {
      requirement: 'Google Chrome，并安装 Claude for Chrome 扩展程序',
      why: '第一天的浏览器操控实操会用到，例如在 MyTax 模拟器上填写 B 表格。'
    },
    {
      requirement: 'Microsoft Excel、Word 和 PowerPoint',
      why: '用来打开并检查 Claude 做出的文件，以及试用 Claude for Excel 和 PowerPoint。'
    },
    {
      requirement: '你的手机，以及一个免费 GitHub 账号（第二天用）',
      why: '手机用于 Dispatch 和选修的 Telegram / WhatsApp 实操。GitHub 是你用 Vibe Coding 做的网页上线的地方——来上课前请先到 github.com 注册。'
    }
  ],

  workshopDays: [
    {
      dayNumber: 1,
      theme: '规划、设定、分析',
      subTitle: 'AI 策略 · 更好的决策 · Claude 基础 · 连接与自动化',
      description:
        '第一天从你的业务开始，而不是从工具开始：AI 适合用在哪里、先挑哪些问题、怎么问才能得出决策。接着把 Claude 正确配置好——项目、Skill、浏览器、连接器、Excel 和例行任务——并在你自己的电脑上完成实操。',
      modules: [
        {
          id: 'd1-registration',
          day: 1,
          startTime: '09:00',
          endTime: '09:30',
          title: '报到与设定检查',
          handoutSource: '设定',
          format: 'Plenary',
          objective: '讲师逐一巡视：Claude Desktop 已安装、付费方案已生效、Cowork 能启动、Chrome 扩展已加入，学员资料包已解压到 AI Workshop 文件夹。',
          stages: []
        },
        {
          id: 'd1-opening',
          day: 1,
          startTime: '09:30',
          endTime: '10:15',
          title: 'AI 能为马来西亚中小企业做什么——现场示范',
          handoutSource: '开场',
          format: 'Demonstration',
          objective: '用日常语言讲清楚生成式 AI、它擅长与不擅长的事，以及真实中小企业的用法。然后马上进入现场示范，先让你看到终点，再告诉你路线。',
          stages: [
            {
              id: 'd1-opening-s1',
              promptCode: '示范',
              title: 'NotebookLM',
              durationMinutes: 10,
              description: '丢进一堆文件，得到有出处的回答、摘要和一段语音简报。'
            },
            {
              id: 'd1-opening-s2',
              promptCode: '示范',
              title: 'YK Automation Portal 与电子发票查询工具',
              durationMinutes: 15,
              description: 'YK 用 AI 做出来的实用工具——以及如何对接 MyInvois 设定电子发票查询工具。'
            }
          ]
        },
        {
          id: 'd1-strategy',
          day: 1,
          startTime: '10:15',
          endTime: '11:00',
          title: '中小企业策略——挑对问题',
          handoutSource: '中小企业策略',
          format: 'Hands-on',
          objective: '中小企业在哪里浪费时间、每个 AI 项目必须服务的四个业务目标，以及「影响 × 难易度」矩阵。画出一个流程，并把人工签核放在对的位置。',
          stages: [
            {
              id: 'd1-strategy-s1',
              promptCode: 'W1–W3',
              title: '成熟度、痛点、你的前三名',
              durationMinutes: 25,
              description: '为最多十项重复性工作打分并标在矩阵上，找出最值得先做的三项。'
            },
            {
              id: 'd1-strategy-s2',
              promptCode: 'W4',
              title: '画出并重新设计一个流程',
              durationMinutes: 20,
              description: '从报价到收款，前后对比——AI 负责准备，人负责批准。'
            }
          ]
        },
        {
          id: 'd1-break-1',
          day: 1,
          startTime: '11:00',
          endTime: '11:15',
          title: '茶点休息',
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
          title: '用 AI 做更好的决策',
          handoutSource: '更好的决策',
          format: 'Hands-on',
          objective: '你手上已有的数据、上传前如何安全地整理，以及如何像老板一样提问。先在屏幕上看真实的 Excel 导出文件和 Claude 对话，再亲手完成三个新练习。',
          stages: [
            {
              id: 'd1-decisions-s1',
              promptCode: '新增',
              title: '叉车租赁——业务分析师简报',
              durationMinutes: 20,
              description: '412 台叉车、年收入超过 RM600 万：你会分析什么？需要哪些资料？'
            },
            {
              id: 'd1-decisions-s2',
              promptCode: '新增',
              title: '从总账算出每位员工每年的佣金',
              durationMinutes: 20,
              description: '从原始总账明细，做出一张可以核对的「员工 × 年份」佣金表。'
            },
            {
              id: 'd1-decisions-s3',
              promptCode: '新增',
              title: '按租户分析租金收入',
              durationMinutes: 20,
              description: '一份年度汇总，把每位租户标示为准时、迟交或欠缴。'
            }
          ]
        },
        {
          id: 'd1-lunch',
          day: 1,
          startTime: '12:30',
          endTime: '13:30',
          title: '午餐',
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
          title: '基础——项目、CLAUDE.md 与 Skill',
          handoutSource: '主题 1–2',
          format: 'Laboratory',
          objective: 'Claude 里各项功能的位置、写在 CLAUDE.md 的长期指令、Token 与费用、如何选模型，以及把专业做法一次打包成 Skill，让全团队重复使用。',
          stages: [
            {
              id: 'd1-foundations-s1',
              promptCode: 'Lab 1',
              title: '按清单一次填好多张销售单',
              durationMinutes: 20,
              description: '一个 Word 模板、四张客户订单——Claude 逐一做出销售单并核对计算。'
            },
            {
              id: 'd1-foundations-s2',
              promptCode: 'Labs 2–4',
              title: '月结项目、文件整理、可重用的 Skill',
              durationMinutes: 35,
              description: '「每月结账」项目、文件名称统一，以及一个差异分析评语 Skill。'
            },
            {
              id: 'd1-foundations-s3',
              promptCode: 'Labs 5–10',
              title: '任选：SEO、流程图、提案、CP204、HR',
              durationMinutes: 35,
              description: '讲师按现场学员挑选实操，其余都在资料包里。'
            }
          ]
        },
        {
          id: 'd1-break-2',
          day: 1,
          startTime: '15:00',
          endTime: '15:15',
          title: '茶点休息',
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
          title: '连接与自动化——浏览器、连接器、插件',
          handoutSource: '主题 3–4',
          format: 'Laboratory',
          objective: 'Claude for Chrome 像你一样使用网页。连接器和插件则把它接进你平时工作的各个应用程序。',
          stages: [
            {
              id: 'd1-connect-s1',
              promptCode: 'Lab 11',
              title: '计算 YA 2025，再填写 e-B',
              durationMinutes: 30,
              description: '在 MyTax 模拟器上——Claude 填表，你在提交前检查。'
            },
            {
              id: 'd1-connect-s2',
              promptCode: 'Labs 12–14',
              title: '实时价格、实时 API、供应商对账',
              durationMinutes: 30,
              description: '读取公开网页、调用 API，以及把合约和发票对上。'
            }
          ]
        },
        {
          id: 'd1-excel',
          day: 1,
          startTime: '16:15',
          endTime: '17:00',
          title: 'Excel、例行任务与你的迷你 CEO',
          handoutSource: '主题 5–7',
          format: 'Hands-on',
          objective: '在 Excel 里用 Claude 做对账和分析、设定按时自动执行的例行任务，以及用串联提示词让 Claude 当你的市场研究员、情景规划师和每日简报员。',
          stages: [
            {
              id: 'd1-excel-s1',
              promptCode: 'Labs 15–19',
              title: '对账、毛利分析、三方核对',
              durationMinutes: 25,
              description: '几分钟内完成双账本对账，以及采购单 / 收货单 / 发票的核对。'
            },
            {
              id: 'd1-excel-s2',
              promptCode: 'Labs 20–26',
              title: '一份会自己寄出的每日简报',
              durationMinutes: 20,
              description: '设定一次，每个工作日在你到公司之前就送达。'
            }
          ]
        }
      ]
    },
    {
      dayNumber: 2,
      theme: '创作、分享、扩展',
      subTitle: 'Design 与 Artifact · Vibe Coding · MCP · 知识库 · 多 Agent · 总结项目',
      description:
        '昨天 Claude 处理你的文件；今天它做出别人会用的东西——图片、视频、仪表板、网页和小程序——接着连接你自己的系统、建立第二大脑，再扩展成一支 Agent 团队。最后以小组总结项目现场展示作结。',
      modules: [
        {
          id: 'd2-recap',
          day: 2,
          startTime: '09:00',
          endTime: '09:15',
          title: '回顾与今日目标',
          handoutSource: '第二天回顾',
          format: 'Plenary',
          objective: '我们走到哪里、接下来去哪里——第一天还没弄好的，现在就解决。',
          stages: []
        },
        {
          id: 'd2-design',
          day: 2,
          startTime: '09:15',
          endTime: '10:15',
          title: '创作——Claude Design、照片与视频',
          handoutSource: '主题 8',
          format: 'Hands-on',
          objective: '把一段描述或你的数据变成符合品牌的视觉设计，一次设定好设计系统，并现场示范把一张产品照片修好、做成短视频。',
          stages: [
            {
              id: 'd2-design-s1',
              promptCode: '示范',
              title: '修图，再做成视频',
              durationMinutes: 15,
              description: '一张普通的产品照片，修整后做成适合社交媒体的短片。'
            },
            {
              id: 'd2-design-s2',
              promptCode: 'Labs 27–28',
              title: '一个着陆页和一份董事会单页报告',
              durationMinutes: 40,
              description: '用现成的着陆页 Skill，通过对话调整风格。'
            }
          ]
        },
        {
          id: 'd2-artifacts',
          day: 2,
          startTime: '10:15',
          endTime: '11:00',
          title: 'Artifact——在对话里做出能用的工具',
          handoutSource: '主题 9',
          format: 'Laboratory',
          objective: 'Artifact 是 Claude 在对话旁边做出的实时页面或小程序。做两个，再把其中一个以卡片形式加进 YK Automation Portal。',
          stages: [
            {
              id: 'd2-artifacts-s1',
              promptCode: '新增',
              title: '有主视觉区和背景音乐的着陆页',
              durationMinutes: 20,
              description: '你的业务、一个页面、背景音乐——通过对话逐步调整。'
            },
            {
              id: 'd2-artifacts-s2',
              promptCode: 'Labs 29–30',
              title: '用你的数字做实时仪表板',
              durationMinutes: 20,
              description: '贴上数字，得到一个可用链接分享、能直接上董事会的仪表板。'
            }
          ]
        },
        {
          id: 'd2-break-1',
          day: 2,
          startTime: '11:00',
          endTime: '11:15',
          title: '茶点休息',
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
          title: 'Vibe Coding——从提示词到产品',
          handoutSource: '主题 10',
          format: 'Laboratory',
          objective: '用日常语言描述你要什么，让 Claude Code 去写、去运行、去修正代码。三个作品，一个比一个进阶。',
          stages: [
            {
              id: 'd2-vibe-s1',
              promptCode: '作品 1',
              title: '网页小工具，发布并加进门户',
              durationMinutes: 20,
              description: '一个小计算器或检查工具，发布成 Artifact，并从门户链接过去。'
            },
            {
              id: 'd2-vibe-s2',
              promptCode: '作品 2',
              title: '完整的 Next.js 着陆页，放上 GitHub',
              durationMinutes: 35,
              description: '用你自己的照片、嵌入你的工具，推送到 GitHub 正式上线。'
            },
            {
              id: 'd2-vibe-s3',
              promptCode: '作品 3',
              title: '一个简单的 Next.js 应用',
              durationMinutes: 20,
              description: '构想 → 制作 → 运行 → 检查 → 上线，一次走完整个循环。'
            }
          ]
        },
        {
          id: 'd2-lunch',
          day: 2,
          startTime: '12:30',
          endTime: '13:30',
          title: '午餐',
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
          title: 'MCP 与第二大脑',
          handoutSource: '主题 11–12',
          format: 'Hands-on',
          objective: 'MCP 是接通任何系统的统一插头。接着建立一个由 Claude 维护的 Obsidian 知识库，并要求它每个回答都注明出自哪一则笔记。',
          stages: [
            {
              id: 'd2-mcp-s1',
              promptCode: 'Labs 32–35',
              title: '通过 Telegram 或 WhatsApp 指挥 Claude',
              durationMinutes: 15,
              description: '实验性功能——现场示范，可选择是否亲手尝试。'
            },
            {
              id: 'd2-mcp-s2',
              promptCode: 'Labs 36–39',
              title: '建立并查询你的知识库',
              durationMinutes: 30,
              description: '把零散的笔记变成互相链接的知识库，再得到有出处的回答。'
            }
          ]
        },
        {
          id: 'd2-multiagent',
          day: 2,
          startTime: '14:15',
          endTime: '15:15',
          title: '多 Agent 系统——一支 Claude 团队',
          handoutSource: '主题 13',
          format: 'Laboratory',
          objective: '一位主导 Agent 负责规划，把工作分给专责的研究员、制作员和审核员，再检查交回的成果。它只是三个 markdown 文件，不是软件项目。',
          stages: [
            {
              id: 'd2-multiagent-s1',
              promptCode: 'Labs 40–42',
              title: '组建团队、执行任务、交付仪表板',
              durationMinutes: 35,
              description: '一个提示词搭好团队，再派一项工作让它走完全程。'
            },
            {
              id: 'd2-multiagent-s2',
              promptCode: 'Labs 43–48',
              title: '模式：分派、辩论加裁判、质量关卡',
              durationMinutes: 25,
              description: '月结审核、客服分派、采购评估与投标。'
            }
          ]
        },
        {
          id: 'd2-break-2',
          day: 2,
          startTime: '15:15',
          endTime: '15:30',
          title: '茶点休息',
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
          title: '总结项目——月结驾驶舱',
          handoutSource: '主题 14',
          format: 'Group build',
          objective: '做一个财务或营运团队每个月真的会用的 Claude 项目，把两天学到的全部用上。',
          stages: [
            {
              id: 'd2-capstone-s1',
              promptCode: '总结项目',
              title: '项目 + Skill + 例行任务 + Artifact',
              durationMinutes: 60,
              description: '长期指令、一个评语 Skill、一个提醒例行任务，以及一个向全场展示的月结进度仪表板。'
            }
          ]
        },
        {
          id: 'd2-close',
          day: 2,
          startTime: '16:30',
          endTime: '17:00',
          title: '成果展示、各部门的 Cowork 用法与结业',
          handoutSource: '总结',
          format: 'Plenary',
          objective: '各组现场展示。接着为 CEO、人事、营销、销售、财务和营运各提供一个现成的 Cowork 用法——以及你回到公司第一个月的行动计划。',
          stages: []
        }
      ]
    }
  ],

  faqItems: [
    {
      id: 'faq-1',
      question: '我需要会写程序吗？',
      answer: '不需要。即使在第二天做网页和小程序时，你也只是用日常语言描述你要什么，由 Claude 写代码。每个技术名词第一次出现时都会解释清楚。只要你会用电邮和 Microsoft Office，这门课的每一步你都做得到。',
      category: 'General'
    },
    {
      id: 'faq-2',
      question: '课堂上会现场示范哪些东西？',
      answer:
        '每个主题都会先现场示范，再由你亲手做。你会看到 NotebookLM 把一堆文件变成有出处的回答、用 AI 做出来的 YK Automation Portal 和电子发票查询工具、把一张产品照片修好并做成短视频、屏幕上真实的 Excel 导出文件和 Claude 对话，以及只靠日常语言描述就做出并上线的完整网站。',
      category: 'Curriculum'
    },
    {
      id: 'faq-3',
      question: '我需要付费版 Claude 账号吗？',
      answer: '需要——Pro、Max、Team 或 Enterprise。免费版只能聊天，无法运行 Cowork、生成文件、使用 Skill 或连接你的应用程序，而这些正是整门课的内容。请在第一天之前准备好。',
      category: 'Requirements'
    },
    {
      id: 'faq-4',
      question: '要带什么？第一天之前要先做什么？',
      answer:
        '一台有管理员权限、装有 Excel、Word 和 PowerPoint 及 Google Chrome 的手提电脑（Windows 10/11，或 2020 年后的 Mac），以及你的手机。来上课前请：从 claude.com/download 安装 Claude Desktop 并登录、确认 Cowork 能启动（Windows 需完成我们寄给你的一次性虚拟机平台设定）、加入 Claude for Chrome 扩展程序，并为第二天注册一个免费 GitHub 账号。',
      category: 'Requirements'
    },
    {
      id: 'faq-5',
      question: '我的公司电脑管控很严，会有问题吗？',
      answer: '很可能会，而且这是上课当天唯一无法解决的事。没有管理员权限，Claude 装得上但 Cowork 无法运行；虚拟桌面（VDI）则完全无法运行 Cowork。请事先请 IT 部门允许安装 Anthropic 的 Claude Desktop 并开启虚拟机平台功能——或者带自己的手提电脑来。',
      category: 'Requirements'
    },
    {
      id: 'faq-6',
      question: '课堂上可以用自己公司的数据吗？',
      answer: '实操单元使用虚构的马来西亚公司，任何机密资料都不会离开课室。第一天也会教你上传前如何安全地整理数据——导出、删掉不需要的部分、把名字换成代号。小组总结项目若要用真实资料，请照这个方法处理。',
      category: 'Logistics'
    },
    {
      id: 'faq-7',
      question: '课后能带走什么？',
      answer: '学员资料包：整套投影片、全部 48 个实操及可复制的提示词、实操数据文件、现成的 Skill 和策略工作表。你亲手做的一切也都归你——Claude 项目、仪表板、着陆页、已发布的工具和 Agent 团队。',
      category: 'General'
    },
    {
      id: 'faq-8',
      question: 'AI 会不会直接把我的工作做完？',
      answer: '不会。它省掉的是打字，判断仍然在你手上。这门课只有一条黄金法则——AI 负责准备，人负责批准——每个实操都会说明在任何东西发送、付款、提交或发布之前要检查什么。这里的一切都让你更快，但没有任何一项让你少负责任。',
      category: 'General'
    }
  ],

  featuredLabs: [
    {
      day: '第一天',
      duration: '20 分钟',
      title: '批量填写重复的文件',
      purpose: '销售单、报价单、送货单和服务表格，每天都用同一个模板重打一遍——又慢，而且一个错字就可能开错发票。',
      how: '把你自己的 Word 模板和订单清单交给 Claude。它会为每位客户各填一份文件、算出明细、折扣和总额、依序编号，并把每个文件储存好。',
      helps: '一整个早上的复制贴上，变成几分钟的检查。同样的方法适用于公司里任何反复填写的表格。',
      beneficiaries: ['销售', '行政', '客服']
    },
    {
      day: '第一天',
      duration: '20 分钟',
      title: '像资深业务分析师一样思考',
      purpose: '老板和会计常常拿到一堆数字，被问「这门生意到底做得怎样？」——却不知道从哪里下手。',
      how: '把 Claude 当成资深分析师，给它几项业务事实。它会先核算数字是否合理，再列出要分析的方向——收入质量、单位成本、现金流、盈利趋势、税务——以及它需要你提供的具体资料。',
      helps: '每次检讨都从一份清楚的计划和一份可直接发出的资料清单开始，而不是一张白纸。',
      beneficiaries: ['企业老板', '会计', '顾问']
    },
    {
      day: '第一天',
      duration: '40 分钟',
      title: '让总账直接回答问题',
      purpose: '日常问题的答案——每位销售员赚了多少佣金、哪些租户或客户迟付——都埋在总账里。',
      how: '把原始总账导出文件交给 Claude。它会做出「员工 × 年份」佣金表，以及把每个月标示为准时、迟交或欠缴的收款汇总——用真正的 Excel 公式，不是手打数字。',
      helps: '过去要筛选好几天的佣金核对和催收跟进，现在几分钟完成，而且每个数字都能追溯到总账的某一行。',
      beneficiaries: ['会计', '人事与薪资', '信贷催收']
    },
    {
      day: '第一天',
      duration: '30 分钟',
      title: '核对、对账、标出差异',
      purpose: '银行对账，以及采购单、收货单和供应商发票的核对既繁琐，差异又容易被漏掉。',
      how: 'Claude 直接在 Excel 里对两本账，并对采购单、收货单和发票做三方核对，再列出每一项差异和它找到的原因。',
      helps: '短交、价格不符和重复发票在付款前就被抓出来，月结也更快完成。',
      beneficiaries: ['会计', '仓库与库存', '采购']
    },
    {
      day: '第一天',
      duration: '30 分钟',
      title: '建立一套结构化面试工具',
      purpose: '多数中小企业凭感觉面试：每位应征者问的问题都不一样，事后也没有公平的方法比较。',
      how: '描述职位。Claude 会拟出与工作相关的面试问题、每个答案的评分标准和中文版本——再做成面试官可以直接使用的简单工具。',
      helps: '每位应征者都回答同样的问题、用同样的标准评分，招聘决定更公平、更快，也更容易说明理由。',
      beneficiaries: ['人事', '招聘主管', '企业老板']
    },
    {
      day: '第一天',
      duration: '20 分钟',
      title: '自动送达的每日简报',
      purpose: '主管一早就得翻电邮、查现金余额、看新闻，才知道今天有什么事要处理。',
      how: '设定一次例行任务。每个工作日在你上班之前，Claude 会整理重要事项——现金状况、逾期项目、行业新闻——并把一页简报寄给你。',
      helps: '你一进办公室就知道今天有哪三件事需要决定。工作在上班前就已完成。',
      beneficiaries: ['企业老板', '主管', '财务']
    },
    {
      day: '第二天',
      duration: '2 小时',
      title: '可以分享的仪表板、网页和工具',
      purpose: '报告被困在表格里；团队需要的小工具，却没有人有时间去做。',
      how: '用日常语言描述你要什么。Claude 会用你的数字做出实时仪表板、为你的业务做一个着陆页，以及一个小计算器或检查工具——然后发布出去、加进公司门户，或把完整网站放上线。',
      helps: '大家在任何设备上用链接就能打开的资讯，以及团队一直想要的小工具——不需要程序员。',
      beneficiaries: ['企业老板', '营销', '销售', '会计']
    },
    {
      day: '第二天',
      duration: '45 分钟',
      title: '为团队建立「第二大脑」',
      purpose: '公司的专业知识藏在同事的脑袋、旧电邮和零散文件里。有人请假或离职，答案也跟着走了。',
      how: '把零散的笔记、SOP 和过往案例整理成互相链接的 Obsidian 知识库，由 Claude 协助整理并保持更新。接着向它提问，并要求它注明每个答案出自哪一则笔记。',
      helps: '新同事不必一直打扰资深同事也能找到答案，作业流程保持一致，而且每个答案都能对照出处核实。',
      beneficiaries: ['企业老板', '人事与培训', '会计', '营运']
    },
    {
      day: '第二天',
      duration: '90 分钟',
      title: '一支负责月结的 AI Agent 团队',
      purpose: '月结有很多环节——对账、差异分析评语、审核——往往全压在一两个人身上。',
      how: '设定一位主导 Agent，把月结工作分给各个专责 Agent：一个对账、一个写评语、一个检查缺乏依据的内容。你先批准计划，再签核成果。',
      helps: '月结变成一份可以重复、同时进行的清单，而每一个离开团队的数字仍由人批准。',
      beneficiaries: ['会计', '财务经理', '审计']
    }
  ],

  audienceRoles: [
    {
      title: '财务与行政执行员',
      desc: '对账、总账分析、销售单、每月报告。第一天的实操最先在这里回本。'
    },
    {
      title: '营运与办公室经理',
      desc: '供应商发票、供应商核对、流程图，以及在你上班前就自动跑完的例行任务。'
    },
    {
      title: '企业老板与团队主管',
      desc: '决定 AI 用在哪里、从哪里开始，以及在推行之前，什么样的人工签核才算稳妥。'
    },
    {
      title: '专业服务事务所',
      desc: '审计、税务、秘书和顾问团队——把客户数据变成分析、信函和申报。'
    }
  ]
};
