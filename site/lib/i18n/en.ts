import type { Dictionary } from "./types";

// Nội dung tiếng Anh (ngôn ngữ mặc định).
export const en: Dictionary = {
  meta: {
    title: "Binary Bridge Labs | Mobile App & Digital Product Engineering Studio",
    description:
      "Binary Bridge Labs builds iOS, Android, cross-platform, web and AI-powered apps. From idea and design to launch and long-term operations.",
    keywords: [
      "mobile app development",
      "iOS app development",
      "Android app development",
      "React Native",
      "Flutter",
      "web development",
      "AI integration",
      "Binary Bridge Labs",
    ],
    ogLocale: "en_US",
    htmlLang: "en",
  },
  company: {
    name: "Binary Bridge Labs",
    tagline: "A studio for mobile app development and digital product engineering.",
    address: "Floor 3, 85 Nguyen Phong Sac Street, Cau Giay Ward, Hanoi, Vietnam",
  },
  ui: {
    skipToContent: "Skip to main content",
    breadcrumb: "Breadcrumb",
    homeAria: "Binary Bridge Labs, back to home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    footerNav: "Footer navigation",
    footerExplore: "Explore",
    footerLegal: "Legal",
    footerContact: "Contact",
    languageLabel: "Language",
    languageNames: { en: "English", vi: "Tiếng Việt" },
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    startProject: "Start a project",
    viewDetails: "View details",
    backToProjects: "Back to projects",
    backToHome: "Back to home",
    nextProject: "Next project",
    illustrative: "Visuals are for illustration only and are not screenshots of the real products.",
    rights: "All rights reserved.",
    emailLabel: "Email",
    addressLabel: "Address",
    stepLabel: "Step",
    deliverableLabel: "Deliverable",
    currentStage: "Current stage",
    projectList: "Project list",
    activities: "Key activities",
    capabilities: "What we deliver",
    deliverables: "Deliverables",
    challengeLabel: "The challenge",
    approachLabel: "Our approach",
    highlightsLabel: "Highlights",
    ctaTitle: "Have an app idea? Let's shape it together.",
    ctaText: "Tell us about your product and goals. We will come back with a clear scope, timeline and budget range.",
    notFoundTitle: "Page not found",
    notFoundText: "The page you are looking for may have moved or no longer exists.",
  },
  nav: {
    careers: "Careers",
    projects: "Projects",
    process: "Process",
    technology: "Technology",
    about: "About",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Mobile app & digital product engineering",
    titleStart: "We build apps that",
    titleAccent: "take your business further",
    description:
      "Binary Bridge Labs designs and builds iOS, Android and cross-platform apps, web systems and AI integrations. We take your product from first idea to a stable release used by millions.",
    primaryCta: "Start a project",
    secondaryCta: "Explore projects",
    screenN: "View screen {n}",
  },
  // Số liệu lấy từ nội dung website cũ. Cần xác minh trước khi công bố.
  stats: [
    { value: "15M+", label: "Users worldwide" },
    { value: "160+", label: "Countries reached" },
    { value: "12M+", label: "App downloads" },
    { value: "1M+", label: "Active subscribers" },
  ],
  sections: {
    featured: {
      eyebrow: "Featured products",
      title: "Products we are proud of",
      description: "A short look at three products we designed and built. Visuals are illustrative, not screenshots.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Build products with a focused team",
      description:
        "We are a small studio of engineers, designers and product people. Tell us about your work and where you want to grow.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Products trusted by their users",
      description:
        "Select a project to see its overview. Visuals are illustrative, not screenshots of the real products.",
    },
    process: {
      eyebrow: "Process",
      title: "Five steps from idea to users",
      description: "A transparent process with clear milestones and a deliverable at every stage.",
    },
    technology: {
      eyebrow: "Technology",
      title: "The tools we master",
      description:
        "We choose technology for the problem, not the trend. Every decision comes with a clear reason and trade-off.",
    },
  },
  about: {
    eyebrow: "About us",
    title: "The engineering studio behind well-loved apps",
    paragraphs: [
      "Binary Bridge Labs is a studio focused on mobile app development and digital product engineering. We combine rigorous software engineering with product thinking to turn ideas into fast, scalable apps people trust.",
      "Our products have passed 12 million downloads, many of them focused on creative AI and intelligent assistants.",
    ],
    values: [
      {
        title: "Data-driven thinking",
        text: "We measure before we act, run experiments continuously and learn quickly through MVPs.",
      },
      {
        title: "Deep engineering",
        text: "Our team has hands-on experience with native apps, cross-platform frameworks, web and AI models in production.",
      },
      {
        title: "Long-term partnership",
        text: "We stay with you from the first MVP until the product scales and runs reliably.",
      },
    ],
  },
  // Vị trí tuyển dụng là nội dung mẫu để xem bố cục. Cần thay bằng vị trí thật trước khi công bố.
  careers: {
    draftNote: "Sample roles for layout review. Replace them with confirmed openings before publishing.",
    applyCta: "Send your profile",
    ctaTitle: "Don't see your role? Still get in touch.",
    ctaText: "Send us your CV and a short note on the work you do best. We read every application.",
    roles: [
      {
        title: "Mobile Engineer (React Native / Flutter)",
        team: "Engineering",
        location: "Hanoi, Vietnam",
        type: "Full-time",
        summary: "Build cross-platform apps from one codebase, with clean architecture and automated tests.",
      },
      {
        title: "iOS Engineer (Swift)",
        team: "Engineering",
        location: "Hanoi, Vietnam",
        type: "Full-time",
        summary: "Build native iOS apps with SwiftUI, held to App Store quality and performance standards.",
      },
      {
        title: "Android Engineer (Kotlin)",
        team: "Engineering",
        location: "Hanoi, Vietnam",
        type: "Full-time",
        summary: "Build native Android apps with Jetpack Compose, tested across real devices and OS versions.",
      },
      {
        title: "AI Engineer",
        team: "Engineering",
        location: "Hanoi, Vietnam",
        type: "Full-time",
        summary: "Integrate language and image models into products, with evaluation and cost control.",
      },
      {
        title: "Product Designer (UI/UX)",
        team: "Design",
        location: "Hanoi, Vietnam",
        type: "Full-time",
        summary: "Lead user research, flows, interactive prototypes and the design system.",
      },
    ],
  },
  projects: [
    {
      slug: "ask-ai",
      name: "Ask AI",
      category: "AI conversational assistant",
      summary:
        "A conversational assistant built on the ChatGPT API, designed for quick, clear answers on the phone.",
      tags: ["Mobile", "AI", "LLM"],
      screen: "chat",
      challenge:
        "Users want quick answers without wading through long threads or complex menus, and they expect that experience on a small screen.",
      approach:
        "We built a chat-first interface with short, scannable answers, fast streaming responses and an input area designed for one-handed use.",
      highlights: [
        "Streaming responses for a fast perceived speed",
        "Compact answer layout designed for mobile",
        "Prompt and response tuning for clarity",
      ],
    },
    {
      slug: "wonder",
      name: "Wonder",
      category: "AI image editing",
      summary:
        "Image editing in the latent space of a diffusion model, fine-tuned from an open-source model.",
      tags: ["Diffusion", "Creative"],
      screen: "image",
      challenge:
        "Prompt-based photo editing is powerful but unpredictable, so people need controls that keep the original image recognizable.",
      approach:
        "We added edit strength and scene controls on top of the model, and showed each edit as a preview with a clear before-and-after comparison.",
      highlights: [
        "Adjustable edit strength for predictable results",
        "Scene prompts with quick presets",
        "Preview and comparison before saving",
      ],
    },
    {
      slug: "facedance",
      name: "FaceDance",
      category: "Facial expression transfer",
      summary:
        "Research on deep learning with a 3D face mesh to transfer facial expressions and movement naturally.",
      tags: ["3D", "Deep learning"],
      screen: "face",
      challenge:
        "Expression transfer has to look natural from different angles and under different lighting, and small landmark errors quickly look artificial.",
      approach:
        "We track a 3D face mesh with landmarks, then smooth expression parameters over time so the motion stays stable and believable.",
      highlights: [
        "Landmark-based 3D face tracking",
        "Temporal smoothing for stable motion",
        "Expression intensity controls",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Discover",
      text: "We clarify business goals, user segments and scope. Core features and technical risks are identified from the start.",
      deliverable: "Requirements document and roadmap",
      activities: [
        "Business goals and success metrics",
        "User segments and core use cases",
        "Technical feasibility and risk review",
      ],
    },
    {
      step: "02",
      title: "UI/UX Design",
      text: "We sketch user flows, build interactive prototypes and test them with real users before writing code.",
      deliverable: "Prototype and design system",
      activities: ["User flows and wireframes", "Interactive prototype", "Usability testing with real users"],
    },
    {
      step: "03",
      title: "Development",
      text: "We build in short sprints, review code often and use CI/CD so every build can be tested.",
      deliverable: "Sprint builds for review",
      activities: ["Two-week sprints with demos", "Code review and pairing", "CI/CD on every merge"],
    },
    {
      step: "04",
      title: "Testing",
      text: "We run unit and integration tests and test on physical devices. We measure performance, security and experience across OS versions.",
      deliverable: "Quality report",
      activities: [
        "Unit and integration tests",
        "Testing on physical devices",
        "Performance, security and accessibility checks",
      ],
    },
    {
      step: "05",
      title: "Launch",
      text: "We publish to the App Store and Google Play, monitor metrics after release and keep optimizing with real data.",
      deliverable: "Released app and tracking report",
      activities: ["Store submission and review", "Analytics and crash monitoring", "Iteration plan based on real data"],
    },
  ],
  technology: {
    groups: [
      {
        title: "Mobile",
        items: [
          { name: "React Native", note: "Cross-platform apps from one codebase" },
          { name: "Flutter", note: "Smooth interfaces on every device" },
          { name: "Swift", note: "Native iOS apps" },
          { name: "Kotlin", note: "Native Android apps" },
        ],
      },
      {
        title: "Web and backend",
        items: [
          { name: "React", note: "Modern web interfaces" },
          { name: "Node.js", note: "APIs and business logic" },
          { name: "Firebase", note: "Authentication, real-time data and push notifications" },
        ],
      },
    ],
    principles: [
      {
        title: "Choose for the problem",
        text: "We compare options against your constraints, including team, timeline and platform features, before we commit.",
      },
      {
        title: "Measure before optimizing",
        text: "Performance and cost decisions are backed by profiling and production data, not assumptions.",
      },
      {
        title: "Stay replaceable",
        text: "We keep clean boundaries so a tool can be swapped without rewriting the whole product.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your idea",
    description:
      "Send us a brief overview of your project. We will reply within one business day with a proposal covering scope, timeline and cost.",
    consultCta: "Book a 30-minute consultation",
    projectTypes: ["iOS app", "Android app", "Cross-platform app", "Web application", "AI integration", "Other"],
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone number",
      projectType: "Project type",
      message: "Project description",
      namePlaceholder: "Jane Doe",
      emailPlaceholder: "name@company.com",
      phonePlaceholder: "+1 555 000 0000",
      messagePlaceholder: "Product goals, target users, timeline...",
      submit: "Send project details",
      idleNote: "We only use this information to reply to your request.",
      sentNote:
        "Your email app should have opened with your message. If it did not, email us directly at {email}.",
      phoneNotProvided: "Not provided",
      subjectPrefix: "[New project]",
      bodyName: "Name",
      bodyEmail: "Email",
      bodyPhone: "Phone",
      bodyProjectType: "Project type",
      errorName: "Please enter your full name.",
      errorEmail: "Please enter a valid email address.",
      errorMessage: "Please describe your project (at least 10 characters).",
    },
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: October 2026",
      intro:
        "This policy explains what information we collect through this website, how we use it and the choices you have.",
      draftNote: "Draft for review. Have legal counsel confirm this text before publishing.",
      sections: [
        {
          heading: "Information we collect",
          body: [
            "When you submit the contact form, we receive your name, email address, phone number (optional), project type and project description.",
            "Like most websites, our hosting provider may log basic technical data such as IP address, browser type and pages visited.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use your information to reply to your enquiry, prepare a proposal and, if you choose to work with us, manage the project.",
            "We do not sell your personal information.",
          ],
        },
        {
          heading: "Storage and security",
          body: [
            "Enquiries are stored in our business mailboxes, and access is limited to the people working on your request.",
            "We apply reasonable technical and organizational measures to protect your information.",
          ],
        },
        {
          heading: "Sharing",
          body: [
            "We share information only with service providers needed to run this website or deliver your project. They must keep it confidential.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You can ask to access, correct or delete the personal information we hold about you. Contact us at the address below.",
          ],
        },
        {
          heading: "Contact",
          body: ["For privacy questions, email us at contact@binarybridge.dev."],
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      updated: "Last updated: October 2026",
      intro: "These terms govern your use of this website. By using it, you agree to them.",
      draftNote: "Draft for review. Have legal counsel confirm this text before publishing.",
      sections: [
        {
          heading: "Use of this website",
          body: [
            "You may use this website for lawful purposes, such as learning about Binary Bridge Labs and contacting us.",
            "Do not attempt to disrupt the website or access areas you are not authorized to use.",
          ],
        },
        {
          heading: "Content and intellectual property",
          body: [
            "Text, graphics and designs on this website belong to Binary Bridge Labs or its licensors.",
            "Names and visuals of third-party products belong to their respective owners.",
          ],
        },
        {
          heading: "Illustrations and project summaries",
          body: [
            "Visuals of projects on this website are illustrative. Project descriptions are summaries and may not reflect current product features.",
          ],
        },
        {
          heading: "Project engagements",
          body: [
            "Work is governed by a separate written agreement or statement of work signed by both parties. This website does not create a contract.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the extent permitted by law, we are not liable for indirect or consequential damages arising from use of this website.",
          ],
        },
        {
          heading: "Changes",
          body: ["We may update these terms. The date at the top of the page shows the latest revision."],
        },
      ],
    },
  },
};
