import { SiteContent } from './types';

/**
 * Simplified Chinese content, mirroring en.ts one-for-one.
 *
 * Conventions agreed with YKCC:
 *  - The course title stays in English. HRD Corp only permits a claimable
 *    course to be marketed under its registered title.
 *  - Product and technical names stay in English (Claude, Cowork, Excel,
 *    Word, PowerPoint, PDF, JSON, HRD Corp, PDPA, Dispatch), as do literal
 *    folder and file names the participant actually types.
 */
export const zh: SiteContent = {
  htmlLang: 'zh-Hans',
  documentTitle: 'AI Agents for Business 101 | YKCC 两天实操工作坊',
  metaDescription:
    '专为非 IT 背景的办公室职员设计的两天实操工作坊：把 AI 配置成会做事的数码同事，让它直接打开你的文件夹、生成 Excel、Word 与 PowerPoint 文件、从扫描版发票中提取数据，并按时自动完成工作。可申请 HRD Corp 培训津贴，全程无需编程。',

  courseTitleLead: 'AI Agents for',
  courseTitleAccent: 'Business 101',

  subtitle: '把 AI Agent 打造成数码同事，真正提升企业生产力',
  tagline:
    '两天实操培训，让 Claude 从一个「陪你聊天」的工具，变成会打开你的文件夹、生成文件、并存进你指定位置的同事。',
  heroQuote:
    '聊天机器人只能告诉你报告里「应该写什么」。AI Agent 则会打开你的文件夹、读取你的数据、生成报告、存档，再告诉你它放在哪里。差别就在于它能不能动手做事——而这两天，教的正是如何掌控它怎么做事。',
  targetAudience:
    '专为非 IT 背景人士撰写。只要你会用电邮和 Microsoft Office，这门课的每一个步骤你都做得到。',

  schedule: {
    datesLabel: '2026年10月15日及16日',
    datesShort: '10月15–16日',
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
    { href: '#anatomy', label: '配置什么' },
    { href: '#labs', label: '实操单元' },
    { href: '#agenda', label: '课程议程' },
    { href: '#prepare', label: '课前准备' },
    { href: '#audience', label: '适合谁参加' },
    { href: '#faq', label: '常见问题' }
  ],

  hero: {
    badge: '两天实操培训 · 亲手操作',
    quoteFooter: '专为非 IT 背景人士撰写',
    ctaPrimary: '立即报名',
    ctaSecondary: '查看完整两天议程',
    stats: [
      { value: '10月15–16日', label: '上午9:00 – 下午5:00' },
      { value: '零编程', label: '无需 IT 背景' },
      { value: '26 组提示词', label: '课后带回、随时重用' }
    ],
    imageAlt: '学员在培训课堂上使用手提电脑完成实操练习',
    visualTitle: '它会动手做事，不只是嘴上说说',
    visualBody:
      '多数人只把 AI 当成一个给建议的聊天窗口。这两天，你会亲手配置出一个会真正打开你的文件、生成报告、并存进你文件夹的 AI——交到你手上的是完成品，而不是你还得自己重新打一遍的建议。',
    takeawaysTitle: '你会带走什么',
    takeawaysNote: '全部由你在课堂上亲手完成',
    takeaways: [
      {
        lead: '一个配置完成的 AI 数码同事',
        rest:
          '——属于你自己的 System Prompt、一个已连接的文件夹，以及它此后每一项任务都会遵守的固定指示。'
      },
      {
        lead: '存在你自己电脑里的真实文件',
        rest:
          '——一份含真实公式的 Excel 工作簿、一页式管理报告、可重复使用的 Word 模板、八页董事会简报，以及一份从扫描版 PDF 建成的发票登记表。'
      },
      {
        lead: '一本写清楚每个步骤的学员手册',
        rest: '——26 组提示词、白话术语表、疑难排解附录，以及课后第一个月的行动计划。'
      }
    ]
  },

  anatomy: {
    eyebrow: '课程核心',
    heading: '你实际要配置的四样东西',
    intro:
      '想像星期一早上来了一位新的行政同事。要让他派得上用场，有四件事必须先到位——AI 数码同事需要的，正是同样这四件。记住这四个名称，这个行业里一半的术语就不再吓人了。',
    partLabel: (index: number) => `第 ${index} 项`,
    humanEquivalentPrefix: '换成新同事的说法就是：'
  },

  recipe: {
    eyebrow: '单元三 · 提示词工程',
    heading: '五段式写法',
    intro:
      '不是每次都要写足五段——但当结果出错时，缺的那一段几乎总是在这份清单里。',
    sideNote: '角色 · 任务 · 输入 · 输出 · 规则',
    warningTitle: '初学者最常犯的一个错误',
    warningBody:
      '很多人花一个小时打一段又长又聪明的指令，然后纳闷为什么第二次问又出错。再精彩的单次指令，充其量只是聊天机器人；一份好的 System Prompt，才是一位同事。把力气花在写「职务说明」上。'
  },

  labs: {
    eyebrow: '亲手操作',
    heading: '六个实作，一家贯穿全场的公司',
    introLead: '每一个实操单元都围绕同一家虚构的马来西亚公司：',
    tablistLabel: '实操单元与课程模块',
    promptBoxTitle: '你在课堂上会写的提示词长这样',
    promptBoxNote: '日常语言 · 零编程',
    checkpointLabel: '验收点：',
    cta: '报名下一梯次',
    counter: (current: number, total: number) => `第 ${current} / 共 ${total} 项`
  },

  benefits: {
    eyebrow: '这门课的不同之处',
    heading: 'AI Agent 是配置出来的，不是问出来的',
    intro:
      '多数 AI 课程教你如何把问题问得更好。这门课教你一次把同事配置到位，从此不必再一句一句地问。'
  },

  agenda: {
    eyebrow: '完整课程大纲',
    heading: '两天完整议程',
    intro:
      '每一个单元、逐小时列出，内容直接取自学员手册——让你在决定派人之前，就清楚知道团队能带走什么。',
    daySelectLabel: '选择课程日',
    dayLabel: (day: number) => `第 ${day} 天`,
    sessionsLabel: '个环节',
    stagesLabel: '个引导步骤',
    handoutLabel: '手册：',
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
      '时间仅供参考——讲师会按现场进度调整，而每一个步骤学员手册里都有，回到办公桌后你可以自行重做一遍。',
    footnoteDates: '课程日期：2026年10月15日及16日，上午9:00 – 下午5:00。',
    cta: '立即报名'
  },

  registration: {
    eyebrow: '日期已确定 · 名额有限',
    heading: '预留你的座位',
    introAt: '地点：',
    introVenueSuffix: '。',
    introSuffix: '立即报名以预留名额，或洽询企业内训方案。',
    feeTitle: '课程费用（每位学员）',
    feeHrdcSuffix: '—— 可申请 HRD Corp 培训津贴',
    feeCashSuffix: '—— 自费 / 现金',
    groupDiscountNote: '同一集团公司每增加一位学员，可享 30% 折扣。',
    programmeNoLabel: '课程编号：',
    mycoidLabel: 'MYCoID：',
    claimableBadgeAlt: 'HRD Corp Claimable 可申请津贴',
    registeredBadgeAlt: 'HRD Corp 注册培训机构',
    labels: {
      fullName: '姓名',
      email: '公司电邮',
      phone: '联络电话',
      company: '公司名称',
      paymentMethod: '付款方式'
    },
    placeholders: {
      fullName: '例如：Tan Wei Ming',
      email: '例如：name@yourcompany.com.my',
      phone: '例如：+60 12-345 6789',
      company: '例如：Sinar Jaya Trading Sdn Bhd'
    },
    paymentHrdc: 'HRD Corp 津贴',
    paymentCash: '自费 / 现金',
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
      paymentMethod: '付款方式：'
    },
    nextTitle: '接下来会怎样？',
    nextBody:
      '我们的培训团队将与你联系，确认座位与付款方式，并在 2026年10月15日及16日 课程开始前寄出出席须知。在这之前，请先完成下方的「课前准备」——带着设定好的电脑来上课，你会比全场快一步。',
    registerAnother: '为另一位同事 / 团队报名'
  },

  prepare: {
    eyebrow: '第 0 部分 · 课前准备',
    heading: '请带着这些准备好再来',
    intro:
      '第一天开课前有六件事要处理好。大部分十分钟内就能搞定——除了需要 IT 部门配合的那一项，这也正是它出现在这个页面、而不是等到报到时才说的原因。',
    folderEyebrow: '0.5 节',
    folderTitle: '建立一个干净的文件夹',
    folderBodyBefore:
      '你的 AI 数码同事只看得到你主动指给它看的文件夹——它无法浏览你整台电脑。请在 ',
    folderBodyMiddle: ' 里建立一个名称完全一致的文件夹 ',
    folderBodyAfter: '，并在里面再建三个子文件夹：',
    folderItems: [
      { name: '01 Data', note: '—— 你交给它的东西' },
      { name: '02 Outputs', note: '—— 它替你做好的东西' },
      { name: '03 Templates', note: '—— 你可重复使用的格式模板' }
    ],
    folderNote:
      '把它们分开是个能省下大量时间的习惯——你永远不必再问「这份是我给它的，还是它做出来的？」',
    switchTitle: '大家最常忘记的那一个开关',
    switchBodyBefore: 'Claude 预设是关闭 ',
    switchBodyPath: 'Code execution and file creation（程式执行与文件生成）',
    switchBodyAfter:
      ' 的。不打开它，这门课的内容一样都做不了：点击你的头像 › Settings › Capabilities › 把它切换为 ON。只需二十秒，而忘了开它，是学员卡住最常见的单一原因。',
    switchNote:
      '如果你用的是 Team 或 Enterprise 方案，这个设定由贵公司的 Claude 管理员控制。若选项是灰色的，请在第一天开课前请他们开启。'
  },

  audience: {
    eyebrow: '适合谁参加',
    heading: '写给每个月亲手做报告的人',
    managerNoteTitle: '给正在为团队评估这门课的主管。',
    managerNoteBody:
      '第二天会教 Dispatch——让手机能够指挥办公室电脑做事。课程会同时带出你应该先谈清楚的资安问题：查阅公司 IT 政策、为手机上锁，并采用财务部门最稳妥的原则——只用它来读取和整理，绝不用来发送或批准。企业内训梯次可依贵公司的政策调整这个部分。'
  },

  faq: {
    eyebrow: '还有疑问？',
    heading: '常见问题',
    intro: '报名前你需要知道的一切。',
    finalCtaHeading: '准备好不再每个月手工重做同一份报告了吗？',
    finalCtaBody:
      '立即报名，预留 2026年10月15日及16日 的座位。企业内训梯次可安排在贵公司举行，实操内容也能改用你们自己的文件。',
    finalCta: '立即报名'
  },

  footer: {
    logoAlt: 'YK Group',
    pdpaLine: '报名资料将依据马来西亚个人资料保护法（PDPA）严格保密。',
    exploreHeading: '快速浏览',
    workshopHeading: '课程资讯',
    facts: ['无需 IT 或编程背景', '需自备付费版 Claude 账号'],
    programmeNoLabel: '课程编号：',
    claimableLine: 'HRD Corp 可申请津贴：',
    copyright: (year: number) => `© ${year} YKCC. 版权所有。`,
    signOff: 'AI 负责起草，你负责审核，你负责签名。'
  },

  runningExample: {
    company: 'Sinar Jaya Trading Sdn Bhd',
    summary:
      '一家位于八打灵再也（Petaling Jaya）的办公与工业用品小型批发商，客户遍布马来西亚五个区域。',
    yourRole:
      '你的角色是它的财务与行政执行员。经理不断要各种报告，而你每一份都得手工做出来。',
    arc:
      '在这两天里，你会训练一位 AI 数码同事替你完成这些工作——用 Excel 做销售报告、用 Word 写管理报告、用 PowerPoint 做简报，并从扫描版 PDF 中完成供应商发票的资料录入。'
  },

  agentParts: [
    {
      humanEquivalent: '一份职务说明：他是谁、能做什么不能做什么、你习惯的做事方式',
      technicalName: 'System Prompt（系统提示词）',
      meaning:
        '一段你只需写一次的文字。此后 Claude 在执行每一项任务前都会先读它。在 Claude 里，它就是标示为 Instructions 的那个框。'
    },
    {
      humanEquivalent: '针对你们内部流程的训练——例如贵公司是怎么做发票核对的',
      technicalName: 'Skills（技能）',
      meaning:
        '打包好的专业能力。Excel、Word、PowerPoint 和 PDF 技能是内建且随时可用的，你也可以在上面叠加自己的技能。'
    },
    {
      humanEquivalent: '系统权限——共享磁碟、会计系统、电邮账号',
      technicalName: 'Tools and Connectors（工具与连接器）',
      meaning:
        '允许 Claude 存取某个文件夹、某个网站，或 Gmail、SharePoint 这类应用。这项权限由你授予，绝不会自动开启。'
    },
    {
      humanEquivalent: '记得上星期发生过什么事',
      technicalName: 'Memory（记忆与项目情境）',
      meaning: 'Claude 会在同一个项目内记住脉络，你不必每个星期一早上重新解释一遍。'
    }
  ],

  promptRecipe: [
    {
      number: 1,
      name: '角色 Role',
      question: 'Claude 该以什么身份做事？',
      example: '你是一位正在准备董事会资料的管理会计师。'
    },
    {
      number: 2,
      name: '任务 Task',
      question: '具体要完成什么？',
      example: '把这六个月的销售额，按区域和按业务员分别汇总。'
    },
    {
      number: 3,
      name: '输入 Input',
      question: '依据哪些资料？',
      example: '只使用 01 Data 里的那个 CSV 档，不要用其他任何来源。'
    },
    {
      number: 4,
      name: '输出 Output',
      question: '要交回什么成果？',
      example: '一个 Excel 文件，含三张工作表：总览、按区域、按业务员。'
    },
    {
      number: 5,
      name: '规则 Rules',
      question: '有哪些限制？',
      example:
        '要用公式，不要直接打上数字。若区域名称拼写有误，请标示出来——不要自行合并。'
    }
  ],

  courseHighlights: [
    {
      title: '是 Agent，不是聊天机器人',
      subtitle: '四个组成部分，扎实地教',
      description:
        'System Prompt、Skills、Tools and Connectors、Memory。记住这四个名称，这个行业里一半的术语就不再吓人——接着你会亲手把四样全配置一遍。',
      metric: '4 项配置',
      metricLabel: '第一天由你亲手完成'
    },
    {
      title: '为非 IT 人员而写',
      subtitle: '每一步都写清楚，连小细节也不略过',
      description:
        '无需编程，不碰命令列。每个技术名词首次出现时都会用白话解释一遍，手册最后的术语表里还会再解释一次。',
      metric: '零编程',
      metricLabel: '会用 Office 就学得会'
    },
    {
      title: '交出真实文件，不是投影片',
      subtitle: '成果全部存进你自己的文件夹',
      description:
        '含真实公式的 Excel 工作簿、一页式管理报告、附演讲备注的八页董事会简报，以及一份从扫描版 PDF 建成的发票登记表。',
      metric: '6+ 份文件',
      metricLabel: '存进你电脑里的 02 Outputs'
    },
    {
      title: '坦白说明它的局限',
      subtitle: '签名负责的人始终是你',
      description:
        '每个实操单元结束时，都有一个需要你亲手核对的验收点。结业项目中，凡宣称自己的 Agent 无需人工监督的组别，一律扣分。',
      metric: '人工把关',
      metricLabel: 'AI 起草 · 你审核 · 你签名'
    }
  ],

  prerequisites: [
    {
      requirement: '一台手提电脑——Windows 10/11，或 2020 年后的 Mac',
      why: '课程中你需要安装应用程式并实际生成文件。'
    },
    {
      requirement: '电脑的管理员权限，或 IT 部门允许安装软件',
      why:
        '部分公司电脑会封锁安装。请在第一天之前先确认——要安装的是 Anthropic 的 Claude Desktop，下载网址为 claude.com/download。'
    },
    {
      requirement: '一个付费版 Claude 账号——Pro、Max、Team 或 Enterprise',
      why: 'Cowork、文件生成与 Skills 在免费方案中无法使用，而这几项正是本课程的重点。'
    },
    {
      requirement: '稳定的网络连接',
      why: 'Claude 的运算是在 Anthropic 的服务器上进行，不是在你的电脑上。'
    },
    {
      requirement: '已安装 Microsoft Excel、Word 与 PowerPoint',
      why: '以便你打开并检查 AI 数码同事做出来的成果。'
    },
    {
      requirement: '一部已安装 Claude 手机应用的智能手机（仅第二天需要）',
      why: '用于单元五：学习如何从手机把工作派给 Claude。'
    }
  ],

  workshopDays: [
    {
      dayNumber: 1,
      theme: '把这位同事配置起来',
      subTitle: '什么是 Agent · 动手配置 · 提示词工程 · Excel',
      description:
        '第一天的重点是「职务说明」。你会先厘清 Agent 与聊天机器人、传统自动化的差别，接着在 Cowork 里建出一个看得到你电脑上某个文件夹的 AI 数码同事，学会五段式提示词写法，最后用两小时把六个月刻意留有瑕疵的销售数据，整理成一份总计全由真实公式计算的工作簿。',
      modules: [
        {
          id: 'd1-registration',
          day: 1,
          startTime: '09:00',
          endTime: '09:30',
          title: '报到与环境检查',
          handoutSource: '第 0 部分',
          format: 'Plenary',
          objective:
            '讲师会逐位协助排除四个常见的设定障碍：Claude Desktop 已安装、付费方案已生效、Code execution and file creation 已开启，以及已建好 AI Workshop 文件夹与其中的 01 Data、02 Outputs、03 Templates。',
          stages: []
        },
        {
          id: 'd1-m1',
          day: 1,
          startTime: '09:30',
          endTime: '11:00',
          title: '单元一 —— AI Agent 到底是什么',
          handoutSource: '单元一',
          format: 'Lecture',
          objective:
            '先厘清大家心里混在一起的三个概念：传统自动化、聊天机器人、AI Agent。认识 AI 数码同事的四个组成部分，再看讲师完整示范一次。这一节不必安装任何东西——手先离开键盘。',
          stages: []
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
          id: 'd1-m2',
          day: 1,
          startTime: '11:15',
          endTime: '12:15',
          title: '单元二 —— 配置你的第一个 AI Agent',
          handoutSource: '单元二',
          format: 'Hands-on',
          objective:
            '打开电脑动手做。在 Cowork 里建立你的项目、写好 Instructions、只连接一个文件夹，并亲眼看 Claude 在动作前如何先征求你的许可。这一小时结束时，你已经有一个能读写你文件的 AI 数码同事。',
          stages: [
            {
              id: 'd1-m2-s1',
              promptCode: 'P1',
              title: '为你的项目写 System Prompt',
              durationMinutes: 20,
              description:
                '先把 Sinar Jaya 的职务说明一字不漏贴进 Instructions——到了单元三，你会写自己的。'
            },
            {
              id: 'd1-m2-s2',
              promptCode: 'P3',
              title: '交给它第一项任务',
              durationMinutes: 15,
              description:
                '问一个非得打开文件才答得出的问题，看 Claude 自行决定去读取那个文件夹。'
            },
            {
              id: 'd1-m2-s3',
              promptCode: 'P4',
              title: '验证它真的能生成文件',
              durationMinutes: 15,
              description:
                '在 02 Outputs 里生成一个小文件。这一步成功了，这两天其余的内容就都能跑得动。'
            }
          ]
        },
        {
          id: 'd1-lunch',
          day: 1,
          startTime: '12:15',
          endTime: '13:15',
          title: '午餐',
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
          title: '单元三 —— 提示词工程',
          handoutSource: '单元三',
          format: 'Hands-on',
          objective:
            '提示词为什么会失败，以及能解决问题的五段式写法：角色、任务、输入、输出、规则。你会把一个写得不好的提示词，与同一个需求的完整写法并排比较，学会把自有知识交给 Agent 的三种方式，然后为自己的实际工作写一份 System Prompt，留到结业项目时使用。',
          stages: [
            {
              id: 'd1-m3-s1',
              promptCode: 'P5 / P6',
              title: '同一个需求：随手写 vs 认真写',
              durationMinutes: 30,
              description:
                '「分析一下我的销售数据，给我一些洞见」对比五段式写法——顺便看出数据本身的第一个问题。'
            },
            {
              id: 'd1-m3-s2',
              promptCode: 'P7',
              title: '写一份属于你自己的 System Prompt',
              durationMinutes: 40,
              description:
                '针对你本职工作中的真实任务，而不是课堂示范案例。第二天的结业项目会再用到它。'
            }
          ]
        },
        {
          id: 'd1-break-2',
          day: 1,
          startTime: '14:45',
          endTime: '15:00',
          title: '茶点休息',
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
          title: '实操一 —— 用 AI 同事处理 Excel',
          handoutSource: '实操一',
          format: 'Laboratory',
          objective:
            '两小时全程动手。六个月的原始发票明细，刻意保留了真实导出数据才会有的各种瑕疵。先做数据体检再动工，处理掉发现的问题，最后做出一份你敢拿到董事面前解释的汇总工作簿。',
          stages: [
            {
              id: 'd1-lab1-s1',
              promptCode: 'P8',
              title: '步骤一 —— 先看清楚再动手',
              durationMinutes: 25,
              description:
                '先替文件做体检：行数、重复项、空白栏，以及同一个区域出现两种不同拼写的情况。'
            },
            {
              id: 'd1-lab1-s2',
              promptCode: 'P9–P11',
              title: '步骤二 —— 处理发现的问题',
              durationMinutes: 30,
              description: '决定哪些要修正、哪些只标示、哪些原样保留——并完整记录每一项改动。'
            },
            {
              id: 'd1-lab1-s3',
              promptCode: 'P12',
              title: '步骤三 —— 建立汇总工作簿',
              durationMinutes: 35,
              description:
                '要真实公式，不要打死的数字。改动来源中的一个数字，看总计跟着变动——这个测试就是整节课的重点。'
            },
            {
              id: 'd1-lab1-s4',
              promptCode: 'P13',
              title: '步骤四 —— 图表与排版',
              durationMinutes: 20,
              description: '做出电邮发给上级也不会走样的格式。'
            },
            {
              id: 'd1-lab1-s5',
              promptCode: '自行撰写',
              title: '步骤五 —— 你的练习',
              durationMinutes: 10,
              description: '用五段式写法自己写这个提示词，不照抄手册里的范例。'
            }
          ]
        }
      ]
    },
    {
      dayNumber: 2,
      theme: '让它真正投入工作',
      subTitle: 'Word · PowerPoint · 扫描版 PDF · 远程与自动化 · 结业项目',
      description:
        '昨天你教会了 AI 数码同事处理数字。今天它要处理文字、图像与纸本文件——接着你会学到如何从手机把工作派给它，以及让它在你不在时自动执行。这一天以小组结业项目收尾：题目取自组员实际工作中的真实情境，并在全场面前现场演示。',
      modules: [
        {
          id: 'd2-recap',
          day: 2,
          startTime: '09:00',
          endTime: '09:15',
          title: '回顾与今日目标',
          handoutSource: '第二天开场',
          format: 'Plenary',
          objective:
            '动手之前先确认：今天所有内容都建立在单元二完成的设定之上，因此任何还没弄好的问题现在一次解决。花十五分钟排除故障，好过卡上六小时。',
          stages: []
        },
        {
          id: 'd2-lab2',
          day: 2,
          startTime: '09:15',
          endTime: '11:00',
          title: '实操二 —— 用 AI 同事处理 Word 文件',
          handoutSource: '实操二',
          format: 'Laboratory',
          objective:
            'Excel 看的是数字对不对；Word 看的是话说得对不对。这一节大部分时间在掌控语气、结构与篇幅——先从禁掉 AI 文章的三个破绽开始：空洞的开场白、只有赞美没有事实、以及模棱两可的措辞。',
          stages: [
            {
              id: 'd2-lab2-s1',
              promptCode: 'P14',
              title: '步骤一 —— 管理报告',
              durationMinutes: 35,
              description: '依据昨天核对过的工作簿写出一页式报告，存进 02 Outputs。'
            },
            {
              id: 'd2-lab2-s2',
              promptCode: 'P15–P16',
              title: '步骤二 —— 修掉交回来的问题',
              durationMinutes: 30,
              description: '第二版才是价值所在：删掉形容词、补回数字、压缩到一页。'
            },
            {
              id: 'd2-lab2-s3',
              promptCode: 'P17',
              title: '步骤三 —— 变成可重复使用的模板',
              durationMinutes: 25,
              description:
                '把你的公司格式存进 03 Templates，下个月就能从你已经认可的版式直接开始。'
            },
            {
              id: 'd2-lab2-s4',
              promptCode: '自行撰写',
              title: '步骤四 —— 你的练习',
              durationMinutes: 15,
              description:
                '自己写提示词生成一封催收信——并决定：若同一客户有多张逾期发票，该怎么处理。'
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
          id: 'd2-lab3',
          day: 2,
          startTime: '11:15',
          endTime: '12:15',
          title: '实操三 —— 用 AI 同事做 PowerPoint',
          handoutSource: '实操三',
          format: 'Laboratory',
          objective:
            '一小时就够，因为内容你已经有了。永远不要从零叫它做简报——要从一份你已经核对过的文件出发，这样你要检查的就只剩呈现方式。',
          stages: [
            {
              id: 'd2-lab3-s1',
              promptCode: 'P18',
              title: '董事会简报',
              durationMinutes: 35,
              description: '八页投影片，每页都附演讲备注，用于与两位董事进行 15 分钟的半年度检讨。'
            },
            {
              id: 'd2-lab3-s2',
              promptCode: 'P19–P20',
              title: '检查，以及你自己的提案简报',
              durationMinutes: 25,
              description:
                '每一页都用放映模式检查文字有没有溢出，每一个数字都回溯到你的工作簿。'
            }
          ]
        },
        {
          id: 'd2-lunch',
          day: 2,
          startTime: '12:15',
          endTime: '13:15',
          title: '午餐',
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
          title: '单元四 —— 扫描版 PDF 与非结构化数据',
          handoutSource: '单元四',
          format: 'Hands-on',
          objective:
            '多数财务与行政部门最枯燥的一项工作：有人看着扫描版供应商发票，把数字一个个打进会计系统。你要取代的就是这个打字动作——并建立一份能让人在两分钟内核对完机器成果的登记表。',
          stages: [
            {
              id: 'd2-m4-s1',
              promptCode: 'P21',
              title: '步骤一 —— 读取发票',
              durationMinutes: 15,
              description: '为什么扫描版 PDF 是一张照片而不是文字，以及这对准确度意味着什么。'
            },
            {
              id: 'd2-m4-s2',
              promptCode: 'P22',
              title: '步骤二 —— 固定格式提取',
              durationMinutes: 20,
              description:
                '用一个 JSON schema——等于一张每次都以相同方式填写的空白表格——并附上诚实的信心评级，以及需要人工复核的栏位清单。'
            },
            {
              id: 'd2-m4-s3',
              promptCode: 'P23',
              title: '步骤三 —— 汇入试算表',
              durationMinutes: 25,
              description:
                '一份两张工作表的发票登记表：含数量 × 单价的真实公式、差异栏、低信心栏位的黄色标示，以及留白的复核人 / 复核日期 / 批准栏。'
            }
          ]
        },
        {
          id: 'd2-break-2',
          day: 2,
          startTime: '14:15',
          endTime: '14:30',
          title: '茶点休息',
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
          title: '单元五 —— 远程操作与自动执行',
          handoutSource: '单元五',
          format: 'Demonstration',
          objective:
            '两种不必坐在电脑前也能让 AI 数码同事干活的方式：Dispatch——从手机发讯息给坐在你办公桌前的那位同事；以及定时任务——给那位同事一道长期有效的指示。也包含在公司启用这两项功能前，你必须先谈清楚的资安问题。',
          stages: [
            {
              id: 'd2-m5-s1',
              promptCode: 'P24',
              title: '从手机发出的第一则指令',
              durationMinutes: 15,
              description:
                '人在房间另一头、电脑保持唤醒状态，用手机问出销售额最高的三个区域及其马币总额。'
            },
            {
              id: 'd2-m5-s2',
              promptCode: 'P25',
              title: '设定一个每周定时任务',
              durationMinutes: 15,
              description:
                '把工作描述一次，用日常语言设定执行时间，检查 Claude 提出的方案，确认。'
            }
          ]
        },
        {
          id: 'd2-capstone',
          day: 2,
          startTime: '15:00',
          endTime: '16:30',
          title: '结业项目 —— 打造一位数码同事',
          handoutSource: '结业项目',
          format: 'Group build',
          objective:
            '三到四人一组。用九十分钟为一个真实的业务情境设计并建出一位能运作的 AI 数码同事：对账核销、人事文件自动化、定时销售报告——最好的选择，是组内某位成员工作中真实存在的任务。',
          stages: [
            {
              id: 'd2-capstone-s1',
              promptCode: 'P26',
              title: '开场 —— 让 Agent 反过来访谈你',
              durationMinutes: 20,
              description:
                'Claude 会在动笔前最多问你八个问题，接着草拟 System Prompt，并停下来等你批准。'
            },
            {
              id: 'd2-capstone-s2',
              promptCode: '小组作业',
              title: '动手建置',
              durationMinutes: 70,
              description:
                '一份小组共同撰写的 System Prompt、至少两个能运作的提示词、至少一份完成的文件——以及三项局限的说明。'
            }
          ]
        },
        {
          id: 'd2-presentations',
          day: 2,
          startTime: '16:30',
          endTime: '17:00',
          title: '成果发表与结业',
          handoutSource: '结业项目',
          format: 'Plenary',
          objective:
            '每组五分钟，在全场面前现场演示。评分标准：是否真的能运作、System Prompt 的质量、对局限是否诚实、情境是否贴近现实，以及台下非技术背景的听众能否听懂你做了什么。',
          stages: []
        }
      ]
    }
  ],

  faqItems: [
    {
      id: 'faq-1',
      question: '我需要会编程吗？',
      answer:
        '不需要。整本手册都是为非 IT 背景的人撰写的。每个技术名词首次出现时都会用白话解释，术语表里还会再解释一次。全程不碰命令列，也没有任何程式要写——你用日常语言下指令就可以。只要你会用电邮和 Microsoft Office，这门课的每一个步骤你都做得到。',
      category: 'General'
    },
    {
      id: 'faq-2',
      question: '一定要付费版的 Claude 账号吗？',
      answer:
        '是的——Pro、Max、Team 或 Enterprise 皆可。免费方案可以跟你聊天，但它无法生成 Excel、Word、PowerPoint 或 PDF 文件，也无法打开你电脑上的文件夹。而这两项能力正是本课程的全部重点，所以付费方案在这里不是可选项。请在第一天开课前准备好。',
      category: 'Requirements'
    },
    {
      id: 'faq-3',
      question: '我该带什么？开课前要先做什么？',
      answer:
        '一台已安装 Excel、Word 和 PowerPoint 的手提电脑（Windows 10/11，或 2020 年后的 Mac），第二天还要带手机。出发前请先：从 claude.com/download 安装 Claude Desktop、登入并确认方案已生效、开启 Settings › Capabilities › Code execution and file creation，并建立 Documents\\AI Workshop 文件夹，里面含 01 Data、02 Outputs 与 03 Templates。带着这些准备来，你会比全场快一步。',
      category: 'Requirements'
    },
    {
      id: 'faq-4',
      question: '公司电脑封锁安装新软件，会有问题吗？',
      answer:
        '会，而且这是当天唯一无法临时解决的问题。很多公司电脑有安装限制；如果你看到「你的管理员已封锁此应用程式」，就需要 IT 部门批准安装。请提前把这项资讯转给他们：要安装的是 Anthropic 的 Claude Desktop，下载网址为 claude.com/download。若你用的是 Team 或 Enterprise 方案，Claude 管理员同时也控制 code execution 设定，请一并请他们开启。',
      category: 'Requirements'
    },
    {
      id: 'faq-5',
      question: '这门课和「AI Workshop for Accountants」有什么不同？',
      answer:
        '会计师那门课围绕会计任务展开——银行月结单、Form E、中小企业税务。这一门则围绕 Agent 本身：如何配置它、指示它、给它权限，再透过 Excel、Word、PowerPoint 与扫描版 PDF 验证配置确实有效。它不限于会计领域，适合任何需要「把数据变成文件」的办公室岗位。两门课各自独立，两门都上是加分，但不是前提。',
      category: 'Curriculum'
    },
    {
      id: 'faq-6',
      question: '课堂上可以使用我公司的真实资料吗？',
      answer:
        '所有实操都以虚构的马来西亚公司 Sinar Jaya Trading Sdn Bhd 为例，因此不会有任何机密资料外流。结业项目你可以采用自己工作中的真实任务——请使用非机密资料，或把姓名以代号取代后的真实资料。手册附录 D 附有一份 PDPA 检查清单，在你把这套做法用于真实客户工作前，请先逐项确认。',
      category: 'Logistics'
    },
    {
      id: 'faq-7',
      question: '课后我能带走什么？',
      answer:
        '完整的学员手册——每一个步骤，包括那些最容易忘记的小细节，另附白话术语表、26 组提示词的完整提示词库、疑难排解附录，以及课后第一个星期一就能开始的行动计划。你在课堂上做出来的东西也全部归你：配置好的项目、工作簿、报告、模板、董事会简报和发票登记表。',
      category: 'General'
    },
    {
      id: 'faq-8',
      question: 'AI 会不会干脆取代我的工作？',
      answer:
        '不会，而且这门课对此说得很直接。它取代的是打字，判断仍然在你手上。每个实操单元结束时都有需要你亲手核对的验收点；结业项目中，凡宣称自己的 Agent 无需人工监督的组别一律扣分。有一条原则不会因技术如何演进而改变：AI 负责起草，你负责审核，你负责签名。这里的一切让你更快，但没有任何一样让你可以少负责任。',
      category: 'General'
    }
  ],

  featuredLabs: [
    {
      code: 'Lab 1',
      day: '第 1 天',
      title: 'Excel —— 一份你敢拿去解释的工作簿',
      category: '数据与报告',
      duration: '2 小时',
      description:
        '六个月的原始发票明细，刻意保留了真实导出数据才会有的各种瑕疵。先替它做体检再动工，决定哪些要修正、哪些只标示，最后做出一份总计全由真实公式计算、而非手动打上数字的汇总工作簿。',
      keyOutcome:
        '改动来源中的一个数字，总计会跟着变动——这个测试，正是「真工作簿」与「截图」的分界线。',
      samplePrompt: `角色：你是一位管理会计师，正在为 Sinar Jaya Trading Sdn Bhd 的董事
准备每月销售资料。

任务：汇总 2026 年 1 月至 6 月的销售表现。

输入：只使用「01 Data」文件夹中的 Sinar_Jaya_Sales_Data_Jan-Jun_2026.csv，
不要使用任何其他来源。

输出：马币总销售额、销售额最高的三个区域及其占比、业绩最高的三位业务员、
表现最好与最差的月份，以及两项你认为数据中有误或可疑之处。

规则：
- 请把你计算出的总额列出来，方便我核对。
- 若同一个区域名称出现多种拼写，不要自行合并——请分别列出并标示。
- 暂时不要给我建议，只要事实。`
    },
    {
      code: 'Lab 2',
      day: '第 2 天',
      title: 'Word —— 管理报告，以及它的模板',
      category: '写作与公司格式',
      duration: '1 小时 45 分',
      description:
        'Excel 看的是数字对不对，Word 看的是话说得对不对。你会禁掉 AI 文章的三个破绽——空洞的开场白、只有赞美没有事实、模棱两可——把内容改到第二版，再把成果固定成可重复使用的公司模板。',
      keyOutcome:
        '一份你经理真的会读完的一页式报告，外加一个模板，让下个月从你已经认可的版式开始。',
      samplePrompt: `角色：你是财务与行政执行员，正在写给两位董事。

任务：一份关于半年度销售表现的一页式管理报告。

输入：只用你在 Lab 1 做出的汇总工作簿。每一个数字都必须来自那个文件，
不要自行心算或重新计算。

输出：存进「02 Outputs」的一个 Word 文件。要有标题层次、段落简短、以一页为限。

规则：
- 不要空洞的开场白，不要以「在当今的商业环境中」开头。
- 不要用形容词描述业绩。给我数字，而不是「增长亮眼」。
- 不要模棱两可。数据显示什么就说什么，不确定就直说不知道。`
    },
    {
      code: 'Lab 3',
      day: '第 2 天',
      title: 'PowerPoint —— 八页董事会简报',
      category: '简报制作',
      duration: '1 小时',
      description:
        '这一节很快，因为内容你手上已经有了。这个实操的原则只有一句话：永远不要从零叫它做简报——要从一份你已经核对过的文件出发，这样你要检查的就只剩呈现方式。',
      keyOutcome: '八页投影片，每页都附演讲备注，每一个数字都能回溯到你的工作簿。',
      samplePrompt: `角色：你正在为 Sinar Jaya Trading Sdn Bhd 的两位董事准备投影片，
用于一场 15 分钟的半年度检讨会议。

输入：你在 Lab 2 核可的那份管理报告，不要用其他任何资料。

输出：存进「02 Outputs」的一个八页 PowerPoint 文件，每一页都要有演讲备注。

规则：
- 每页文字最多六行。放不下的内容，就移到备注里。
- 每一张图表都必须依据报告中出现过的数字制作。
- 任何一页都不得出现报告里没有的数字。`
    },
    {
      code: 'Module 4',
      day: '第 2 天',
      title: '扫描版 PDF —— 发票资料不必再手动输入',
      category: '非结构化数据与 OCR',
      duration: '1 小时',
      description:
        '一张供应商发票，本质上是一张照片而不是文字。你会用一个固定的 JSON schema 把它提取出来——等于一张每次都以相同方式填写的空白表格——并附上诚实的信心评级，再把它变成一份人工两分钟内就能核对完的登记表。',
      keyOutcome:
        '一份含差异公式、低信心栏位以黄色标示、并留白复核人 / 批准栏的发票登记表。它取代的是打字，判断仍然在你手上。',
      samplePrompt: `请把这张扫描版发票提取成以下栏位：

invoice_number、invoice_date、supplier_name、line_items[]、sales_tax_amount、
delivery_charge、total_payable、bank_account_number、
extraction_confidence（high、medium 或 low —— 你自己诚实的评估）
fields_needing_review（需要人工复核的栏位清单）

以 JSON 格式交给我。所有金额一律用纯数字、保留两位小数，
不要货币符号、不要千位分隔号——例如 16734.00，而不是 RM 16,734.00。`
    },
    {
      code: 'Module 5',
      day: '第 2 天',
      title: 'Dispatch 与定时任务',
      category: '远程与自动化',
      duration: '30 分钟',
      description:
        '两种不必坐在电脑前也能让 AI 数码同事干活的方式。Dispatch 就像从手机发讯息给坐在你办公桌前的同事；定时任务则是给那位同事一道长期有效的指示——每个星期一早上八点，在你进公司之前就做好。',
      keyOutcome:
        '也包含资安讨论：以财务部门而言，Dispatch 只用来读取与整理；撰写、发送与批准，留到你回到办公桌前再做。',
      samplePrompt: `请查看我的 AI Workshop 文件夹，打开销售汇总工作簿，
告诉我销售额最高的三个区域及其马币总额。

直接在这里回覆数字就好，不必生成文件。

[ 用手机发送，电脑在房间另一头保持唤醒状态。 ]`
    },
    {
      code: 'Capstone',
      day: '第 2 天',
      title: '打造一位数码同事，并现场演示',
      category: '小组实作',
      duration: '90 分钟 + 演示',
      description:
        '三到四人一组。可选对账核销、人事文件自动化、定时销售报告——最好的选择，是组内某位成员工作中真实存在的任务。九十分钟建置，五分钟发表，在全场面前现场演示。',
      keyOutcome:
        '评分看的是它是否真的能运作、System Prompt 的质量，以及对局限是否诚实。宣称自己的 Agent 无需人工监督的组别分数最低。',
      samplePrompt: `我们要为 [情境] 建立一位 AI 助理。

在写任何提示词之前，请先访谈我。请一次问一个问题，最多八个，
问出你要写好这份工作的 System Prompt 所需要知道的一切。内容需涵盖：
使用者是谁、输入是什么、输出必须长什么样、公司内部规则，
以及什么情况会构成严重错误。

在我回答完之后，草拟 System Prompt。然后停下来——
在我们批准之前，不要开始执行工作。`
    }
  ],

  audienceRoles: [
    {
      title: '财务与行政执行员',
      desc:
        '整门课就是围绕这个岗位写的。经理不断要、而你每个月手工做出来的那些报告——这两天的投入，最先就是从这里回本。'
    },
    {
      title: '营运与办公室主管',
      desc:
        '供应商发票、信函、备忘录和每周例行资料。学会把一个 Agent 一次配置到位，而不是每次都临时想一句聪明的指令。'
    },
    {
      title: '正在评估 AI 的团队主管',
      desc:
        '在全面推行之前，你需要知道 Agent 究竟能做什么、有哪些事绝不能交给它，以及合理的复核机制应该长什么样。'
    },
    {
      title: '专业事务所',
      desc:
        '审计、税务、秘书与咨询团队——需要把数据变成文件，并希望公司格式靠模板来落实，而不是靠记性。'
    }
  ]
};
