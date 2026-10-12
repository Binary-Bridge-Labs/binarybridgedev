// Cấu trúc nội dung dùng chung cho mọi ngôn ngữ. en.ts và vi.ts phải khớp với kiểu này,
// nên thiếu một khóa là TypeScript báo lỗi ngay.

export type ScreenKind = "chat" | "image" | "face" | "dashboard";

export type Heading = { eyebrow: string; title: string; description?: string };
export type Feature = { title: string; text: string };
export type Stat = { value: string; label: string };

export type CareerRole = {
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
};

export type ProjectItem = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  tags: string[];
  screen: ScreenKind;
  challenge: string;
  approach: string;
  highlights: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
  deliverable: string;
  activities: string[];
};

export type TechGroup = {
  title: string;
  items: Array<{ name: string; note: string }>;
};

export type LegalSection = { heading: string; body: string[] };

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  draftNote: string;
  sections: LegalSection[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
    htmlLang: string;
  };
  company: { name: string; tagline: string; address: string };
  ui: {
    skipToContent: string;
    breadcrumb: string;
    homeAria: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    mobileNav: string;
    footerNav: string;
    footerExplore: string;
    footerLegal: string;
    footerContact: string;
    languageLabel: string;
    languageNames: { en: string; vi: string };
    themeToLight: string;
    themeToDark: string;
    startProject: string;
    viewDetails: string;
    backToProjects: string;
    backToHome: string;
    nextProject: string;
    illustrative: string;
    rights: string;
    emailLabel: string;
    addressLabel: string;
    stepLabel: string;
    deliverableLabel: string;
    currentStage: string;
    projectList: string;
    activities: string;
    capabilities: string;
    deliverables: string;
    challengeLabel: string;
    approachLabel: string;
    highlightsLabel: string;
    ctaTitle: string;
    ctaText: string;
    notFoundTitle: string;
    notFoundText: string;
  };
  nav: {
    careers: string;
    projects: string;
    process: string;
    technology: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    screenN: string;
  };
  stats: Stat[];
  sections: {
    featured: Heading;
    careers: Heading;
    projects: Heading;
    process: Heading;
    technology: Heading;
  };
  about: { eyebrow: string; title: string; paragraphs: string[]; values: Feature[] };
  careers: {
    draftNote: string;
    applyCta: string;
    ctaTitle: string;
    ctaText: string;
    roles: CareerRole[];
  };
  projects: ProjectItem[];
  process: ProcessStep[];
  technology: { groups: TechGroup[]; principles: Feature[] };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    consultCta: string;
    projectTypes: string[];
    form: {
      name: string;
      email: string;
      phone: string;
      projectType: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      idleNote: string;
      sentNote: string;
      phoneNotProvided: string;
      subjectPrefix: string;
      bodyName: string;
      bodyEmail: string;
      bodyPhone: string;
      bodyProjectType: string;
      errorName: string;
      errorEmail: string;
      errorMessage: string;
    };
  };
  legal: { privacy: LegalDoc; terms: LegalDoc };
};
