import {
  AgentPart,
  CourseHighlight,
  DaySchedule,
  FaqItem,
  Prerequisite,
  RecipePart,
  WorkshopModule
} from '../types';

/** The two languages this site ships in. */
export type Lang = 'en' | 'zh';

/** One of the six featured hands-on builds. Images live in the component, index-matched. */
export interface FeaturedLab {
  code: string;
  day: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  keyOutcome: string;
  samplePrompt: string;
}

/** One "who should attend" card. Icons live in the component, index-matched. */
export interface AudienceRole {
  title: string;
  desc: string;
}

export interface NavLink {
  href: string;
  label: string;
}

/**
 * Everything on the page that changes with language.
 *
 * Language-neutral facts — contact details, the HRD Corp programme number,
 * fee amounts, the venue address — stay in ../data/workshopData.ts and are
 * shared by both languages, so a correction only has to be made once.
 */
export interface SiteContent {
  /** Value for the <html lang> attribute. */
  htmlLang: string;
  documentTitle: string;
  metaDescription: string;

  /**
   * The HRD Corp-registered course title. Identical in both languages:
   * a claimable course may only be marketed under its registered title.
   */
  courseTitleLead: string;
  courseTitleAccent: string;

  subtitle: string;
  tagline: string;
  heroQuote: string;
  targetAudience: string;

  schedule: {
    datesLabel: string;
    datesShort: string;
    timeLabel: string;
  };

  header: {
    skipToContent: string;
    brandSubline: string;
    navLabel: string;
    openMenu: string;
    closeMenu: string;
    registerCta: string;
    languageLabel: string;
  };

  nav: NavLink[];

  hero: {
    badge: string;
    quoteFooter: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    imageAlt: string;
    visualTitle: string;
    visualBody: string;
    takeawaysTitle: string;
    takeawaysNote: string;
    takeaways: { lead: string; rest: string }[];
  };

  anatomy: {
    eyebrow: string;
    heading: string;
    intro: string;
    partLabel: (index: number) => string;
    humanEquivalentPrefix: string;
  };

  recipe: {
    eyebrow: string;
    heading: string;
    intro: string;
    sideNote: string;
    warningTitle: string;
    warningBody: string;
  };

  labs: {
    eyebrow: string;
    heading: string;
    introLead: string;
    tablistLabel: string;
    promptBoxTitle: string;
    promptBoxNote: string;
    checkpointLabel: string;
    cta: string;
    counter: (current: number, total: number) => string;
  };

  benefits: {
    eyebrow: string;
    heading: string;
    intro: string;
  };

  agenda: {
    eyebrow: string;
    heading: string;
    intro: string;
    daySelectLabel: string;
    dayLabel: (day: number) => string;
    sessionsLabel: string;
    stagesLabel: string;
    handoutLabel: string;
    /** The module format chip, keyed by the language-neutral format value. */
    formatLabels: Record<WorkshopModule['format'], string>;
    lunchBreak: string;
    teaBreak: string;
    minuteSuffix: string;
    footnote: string;
    footnoteDates: string;
    cta: string;
  };

  registration: {
    eyebrow: string;
    heading: string;
    introAt: string;
    introVenueSuffix: string;
    introSuffix: string;
    feeTitle: string;
    feeHrdcSuffix: string;
    feeCashSuffix: string;
    groupDiscountNote: string;
    programmeNoLabel: string;
    mycoidLabel: string;
    claimableBadgeAlt: string;
    registeredBadgeAlt: string;
    labels: {
      fullName: string;
      email: string;
      phone: string;
      company: string;
      paymentMethod: string;
    };
    placeholders: {
      fullName: string;
      email: string;
      phone: string;
      company: string;
    };
    paymentHrdc: string;
    paymentCash: string;
    pdpaNote: string;
    submitIdle: string;
    submitting: string;
    notConfiguredTitle: string;
    notConfiguredBody: string;
    errorTitle: string;
    genericError: string;
    thankYou: (name: string) => string;
    recordedFor: string;
    recordedSuffix: string;
    summaryTitle: string;
    summaryLabels: {
      id: string;
      name: string;
      email: string;
      phone: string;
      company: string;
      paymentMethod: string;
    };
    nextTitle: string;
    nextBody: string;
    registerAnother: string;
  };

  prepare: {
    eyebrow: string;
    heading: string;
    intro: string;
    folderEyebrow: string;
    folderTitle: string;
    folderBodyBefore: string;
    folderBodyMiddle: string;
    folderBodyAfter: string;
    folderItems: { name: string; note: string }[];
    folderNote: string;
    switchTitle: string;
    switchBodyBefore: string;
    switchBodyPath: string;
    switchBodyAfter: string;
    switchNote: string;
  };

  audience: {
    eyebrow: string;
    heading: string;
    managerNoteTitle: string;
    managerNoteBody: string;
  };

  faq: {
    eyebrow: string;
    heading: string;
    intro: string;
    finalCtaHeading: string;
    finalCtaBody: string;
    finalCta: string;
  };

  footer: {
    logoAlt: string;
    pdpaLine: string;
    exploreHeading: string;
    workshopHeading: string;
    facts: string[];
    programmeNoLabel: string;
    claimableLine: string;
    copyright: (year: number) => string;
    signOff: string;
  };

  runningExample: {
    company: string;
    summary: string;
    yourRole: string;
    arc: string;
  };

  agentParts: AgentPart[];
  promptRecipe: RecipePart[];
  courseHighlights: CourseHighlight[];
  prerequisites: Prerequisite[];
  workshopDays: DaySchedule[];
  faqItems: FaqItem[];
  featuredLabs: FeaturedLab[];
  audienceRoles: AudienceRole[];
}
