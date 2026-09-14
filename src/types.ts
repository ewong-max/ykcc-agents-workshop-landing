export interface Stage {
  id: string;
  /** Prompt code as printed in the handout, e.g. "P6", "P18". */
  promptCode: string;
  title: string;
  durationMinutes: number;
  description: string;
}

export interface WorkshopModule {
  id: string;
  day: 1 | 2;
  startTime: string; // "09:30"
  endTime: string;   // "11:00"
  title: string;
  /** Where this sits in the participant handout, e.g. "Module 1", "Lab 2". */
  handoutSource: string;
  /** Lecture, hands-on lab, demonstration — shown as a chip on the timeline. */
  format: 'Lecture' | 'Hands-on' | 'Demonstration' | 'Laboratory' | 'Group build' | 'Plenary';
  objective: string;
  stages: Stage[];
  isBreak?: boolean;
  breakType?: 'tea' | 'lunch';
}

export interface DaySchedule {
  dayNumber: 1 | 2;
  theme: string;
  subTitle: string;
  description: string;
  modules: WorkshopModule[];
}

export interface InterestRegistration {
  id: string;
  /** Which workshop this registration is for — this site serves the Agents course. */
  workshop: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  jobRole: string;
  /** How the participant intends to pay — drives which fee tier and paperwork applies. */
  paymentMethod: 'HRDC' | 'Cash';
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Confirmed';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Curriculum' | 'Requirements' | 'Logistics';
}

export interface CourseHighlight {
  title: string;
  subtitle: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

/** One of the four things an AI colleague needs, as taught in Module 1.2. */
export interface AgentPart {
  humanEquivalent: string;
  technicalName: string;
  meaning: string;
}

/** One line of the Role / Task / Input / Output / Rules recipe from Module 3.2. */
export interface RecipePart {
  number: number;
  name: string;
  question: string;
  example: string;
}

/** A prerequisite from Part 0 — "Before You Start". */
export interface Prerequisite {
  requirement: string;
  why: string;
}
