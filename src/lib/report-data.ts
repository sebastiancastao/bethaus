export type ReportTheme =
  | "Technical"
  | "SEO"
  | "Market"
  | "Operations"
  | "Brand"
  | "Data";

export type ReportFilter = ReportTheme | "All";

export type ResourceLink = {
  label: string;
  url: string;
  kind: "Document" | "Spreadsheet";
};

export type ReportMetric = {
  label: string;
  value: string;
};

export type ReportDetail = {
  title: string;
  objective: string;
  actions?: string[];
  itemsLabel?: string;
  items?: string[];
  result?: string;
  impact?: string[];
  links?: ResourceLink[];
};

export type ReportSection = {
  id: string;
  order: string;
  theme: ReportTheme;
  title: string;
  headline: string;
  summary: string;
  metrics: ReportMetric[];
  details: ReportDetail[];
  sectionImpact: string[];
  links?: ResourceLink[];
};

export const projectMeta = {
  title: "Bethaus Project",
  subtitle: "Operational & Strategic Implementation Report",
  phase: "Initial Implementation",
  status: "Completed",
  priority: "High",
  responsible: "Project Team",
  deadline: "December 25, 2025",
};

export const executiveSummary =
  "During the initial implementation phase, the team built the technical, strategic, and operational foundations needed to launch and scale the Bethaus platform across Latin America.";

export const focusAreas = [
  "Website architecture and technical readiness",
  "SEO strategy and keyword research",
  "Brand positioning and communication framework",
  "Content and information infrastructure",
  "Operational organisation and documentation management",
];

export const launchOutcomes = [
  "A clear brand identity",
  "A search-optimised site architecture",
  "Validated market demand across LATAM",
  "Reliable internal documentation",
  "Strong foundations for organic growth",
];

export const quickFacts = [
  {
    value: "9",
    label: "workstreams completed",
    description: "From technical setup to data monitoring.",
    filter: "All" as const,
  },
  {
    value: "97",
    label: "approved backlinks reviewed",
    description: "Authority development across media outlets.",
    filter: "SEO" as const,
  },
  {
    value: "20",
    label: "priority casino games defined",
    description: "Homepage inventory locked for launch.",
    filter: "Technical" as const,
  },
  {
    value: "5",
    label: "keyword research tracks",
    description:
      "Terminology, friction, strategy, academy, and transactional.",
    filter: "SEO" as const,
  },
  {
    value: "LATAM",
    label: "market validation scope",
    description: "Regional demand checked before page creation.",
    filter: "Market" as const,
  },
  {
    value: "1",
    label: "central documentation hub",
    description: "Orbit System acting as the source of truth.",
    filter: "Operations" as const,
  },
];

export const readinessTracks = [
  {
    label: "Website architecture",
    description: "Spanish-first URLs, inventory logic, and favicon package.",
  },
  {
    label: "Search foundation",
    description: "Backlink validation and keyword research across LATAM.",
  },
  {
    label: "Brand system",
    description: "Brand brief and editorial rules aligned for launch.",
  },
  {
    label: "Operational control",
    description: "Execution planning, dependencies, and document governance.",
  },
  {
    label: "Data reliability",
    description: "Snapshots, data ingestion monitoring, and validation.",
  },
];

export const sections: ReportSection[] = [
  {
    id: "website-technical-setup",
    order: "01",
    theme: "Technical",
    title: "Website Technical Setup",
    headline:
      "The platform was aligned to Spanish-speaking markets and made device-ready at the brand asset level.",
    summary:
      "The first implementation block focused on getting the core website architecture ready for launch conditions in LATAM.",
    metrics: [
      { label: "Initiatives", value: "2" },
      { label: "Favicon assets", value: "7" },
      { label: "URL strategy", value: "Spanish-first" },
    ],
    details: [
      {
        title: "URL Language Alignment",
        objective:
          "Ensure the website architecture matches the language of the target market.",
        actions: ["All website URLs were converted from English to Spanish."],
        impact: [
          "Improves SEO relevance in Spanish-speaking markets.",
          "Provides a more intuitive navigation experience.",
          "Aligns content strategy with URL structure.",
        ],
      },
      {
        title: "Favicon Implementation",
        objective:
          "Ensure the brand icon appears correctly in Google search results, browser tabs, and mobile devices.",
        actions: ["The complete favicon package was created and implemented."],
        itemsLabel: "Files generated",
        items: [
          "favicon.ico",
          "favicon-32x32.png",
          "favicon-16x16.png",
          "apple-touch-icon.png",
          "android-chrome-192x192.png",
          "android-chrome-512x512.png",
          "site.webmanifest",
        ],
        impact: [
          "Improves brand recognition.",
          "Ensures compatibility across browsers and devices.",
        ],
      },
    ],
    sectionImpact: [
      "SEO-ready information architecture",
      "Spanish-language navigation consistency",
      "Stable visual identity across search and devices",
    ],
  },
  {
    id: "seo-authority-development",
    order: "02",
    theme: "SEO",
    title: "SEO Authority Development",
    headline:
      "High-quality backlink opportunities were validated before outreach prioritisation.",
    summary:
      "Authority building started with a quality-controlled backlink review instead of volume-first acquisition.",
    metrics: [
      { label: "Approved opportunities", value: "97" },
      { label: "Priority lens", value: "Authority + relevance" },
      { label: "Market reach", value: "Multi-country" },
    ],
    details: [
      {
        title: "Backlink Validation",
        objective:
          "Strengthen the website's authority through high-quality backlinks.",
        actions: [
          "Reviewed a list of 97 approved backlink opportunities.",
          "Validated domain quality and relevance.",
          "Prioritised authoritative media websites.",
        ],
        itemsLabel: "Examples of high-authority domains",
        items: [
          "El Pais",
          "El Mundo",
          "Europa Press",
          "El Economista",
          "La Razon",
          "Onda Cero",
          "Finviz",
          "Newsbreak",
        ],
        impact: [
          "Improves domain authority.",
          "Supports search rankings.",
          "Expands visibility across multiple markets.",
        ],
      },
    ],
    sectionImpact: [
      "Authority growth based on relevance, not raw volume",
      "A cleaner outreach queue for future link acquisition",
      "Cross-market visibility potential from trusted publishers",
    ],
  },
  {
    id: "casino-platform-architecture",
    order: "03",
    theme: "Technical",
    title: "Casino Platform Architecture",
    headline:
      "Site structure decisions were tied to real provider and game availability to avoid empty pages at launch.",
    summary:
      "The casino architecture was defined from actual inventory constraints, ensuring a realistic launch structure with SEO implications in mind.",
    metrics: [
      { label: "Priority games", value: "20" },
      { label: "Validated verticals", value: "6" },
      { label: "Inventory source", value: "Providers + games" },
    ],
    details: [
      {
        title: "Technical Inventory Definition",
        objective:
          "Build a casino site structure based only on available providers and games, avoiding empty categories.",
        actions: [
          "Confirmed the key inputs required to design the casino architecture.",
          "Validated provider availability before drafting category pages.",
          "Used launch inventory to shape page hierarchy and content priorities.",
        ],
        itemsLabel: "Confirmed launch inputs",
        items: [
          "Game Providers: Pragmatic Play, Evolution, Playtech, NetEnt, Red Tiger, Hacksaw, Spinomenal",
          "Game Verticals: Crash Games, Live Casino, Game Shows, Bingo / Keno, Virtual Sports, Poker",
          "Core Games: Top 20 priority casino games defined for homepage visibility",
        ],
        impact: [
          "Prevents an incorrect site structure.",
          "Improves launch readiness.",
          "Supports SEO architecture planning.",
        ],
        links: [
          {
            label: "Main architecture document",
            url: "https://docs.google.com/document/d/1S8g2r0qoHk7geAoSXhHRDllDnICKfO-TpwEcCi9UK6c/edit",
            kind: "Document",
          },
        ],
      },
    ],
    sectionImpact: [
      "No empty launch categories",
      "Homepage visibility aligned to revenue-critical titles",
      "Technical and SEO architecture grounded in real inventory",
    ],
  },
  {
    id: "seo-strategy-keyword-research",
    order: "04",
    theme: "SEO",
    title: "SEO Strategy & Keyword Research",
    headline:
      "Keyword research mapped real search demand across acquisition, support, strategy, and education.",
    summary:
      "The search strategy was built around five complementary research tracks designed to reduce vocabulary bias and target actual user intent in LATAM.",
    metrics: [
      { label: "Research tracks", value: "5" },
      { label: "Target scope", value: "LATAM-wide" },
      { label: "Intent coverage", value: "Support to transactional" },
    ],
    details: [
      {
        title: "Regional Terminology Validation",
        objective: "Avoid regional vocabulary bias across LATAM markets.",
        itemsLabel: "Examples analysed",
        items: [
          "parlay / combinada / acumulada",
          "tragamonedas / slots / maquinitas",
          "bono de bienvenida / bono de registro",
        ],
        result:
          "Selected the highest-volume primary term and integrated semantic variations into content.",
        links: [
          {
            label: "Regional terminology sheet",
            url: "https://docs.google.com/spreadsheets/d/1gSnzOkHCLmOzepuN_PkFOu_kLFkBpSsz-oYnHdgF7Es/edit",
            kind: "Spreadsheet",
          },
        ],
      },
      {
        title: "User Friction Research",
        objective:
          "Identify searches made by users when they encounter platform issues.",
        itemsLabel: "Searches analysed",
        items: [
          "como retirar dinero",
          "como depositar",
          "verificacion de cuenta",
        ],
        result:
          "Guides the creation of help guides and support content for user friction moments.",
        links: [
          {
            label: "Help and tutorials research",
            url: "https://docs.google.com/spreadsheets/d/1KeAK_e5pctgbc4UQZA4okRiGNSwJmNkSisjLGT-OEYQ/edit",
            kind: "Spreadsheet",
          },
        ],
      },
      {
        title: "Casino Strategy & Mechanics Research",
        objective:
          "Identify advanced searches related to game strategies and mechanics.",
        itemsLabel: "Topics analysed",
        items: [
          "RTP in slots",
          "volatility",
          "Aviator strategies",
          "Lightning roulette mechanics",
        ],
        result:
          "Created the base for expert-led content that can address informed casino users.",
        links: [
          {
            label: "Strategy and mechanics research",
            url: "https://docs.google.com/spreadsheets/d/1dwjJ2hdGjvZRjSIzr_LYJJlzLkoUVNKnMi0M1WaQZsU/edit",
            kind: "Spreadsheet",
          },
        ],
      },
      {
        title: "Educational Content Research",
        objective:
          "Develop an educational knowledge hub for beginner users.",
        itemsLabel: "Topics analysed",
        items: [
          "bankroll management",
          "stake definition",
          "Martingale strategy",
          "Fibonacci betting system",
        ],
        result:
          "Defined the thematic foundation for an academy designed around onboarding and user education.",
        links: [
          {
            label: "Academy research",
            url: "https://docs.google.com/spreadsheets/d/1EtaWHhWcLUFGWcJ1hVw6_Lrm2N07onKvUcORWgvcB60/edit",
            kind: "Spreadsheet",
          },
        ],
      },
      {
        title: "Transactional Keyword Research",
        objective: "Identify high-conversion searches.",
        itemsLabel: "Examples",
        items: [
          "Gates of Olympus",
          "Sweet Bonanza",
          "Aviator",
          "Free spins",
          "Welcome bonus",
        ],
        result:
          "Pinpointed the terms most likely to convert and support commercial landing pages.",
        links: [
          {
            label: "Transactional keyword research",
            url: "https://docs.google.com/spreadsheets/d/1zGg5d6V9DIGKBvrLA5ryWwGzEfenNF5inSPFK3SWT5c/edit",
            kind: "Spreadsheet",
          },
        ],
      },
    ],
    sectionImpact: [
      "Demand-backed content planning",
      "Cross-country vocabulary alignment",
      "Coverage across beginner, support, expert, and transactional intent",
    ],
  },
  {
    id: "market-research-sports-betting",
    order: "05",
    theme: "Market",
    title: "Market Research for Sports Betting",
    headline:
      "Local demand signals were validated before creating sports pages and navigation structures.",
    summary:
      "This research block focused on making sports content and navigation responsive to country-level demand instead of relying on generic international assumptions.",
    metrics: [
      { label: "Validation streams", value: "3" },
      { label: "Navigation outcome", value: "Geo-IP inputs" },
      { label: "Decision scope", value: "Country-level" },
    ],
    details: [
      {
        title: "Local League Validation",
        objective:
          "Determine which national leagues justify dedicated pages.",
        itemsLabel: "Examples analysed",
        items: ["LPF", "Liga Promerica", "Liga Mayor El Salvador"],
        result:
          "Prevented creating pages without real search demand in each market.",
      },
      {
        title: "International Competition Prioritisation",
        objective:
          "Understand which competitions are most relevant per country.",
        itemsLabel: "Examples",
        items: ["Champions League", "NBA", "MLB", "NFL"],
        result:
          "Supports menus and quick links that adapt to the most relevant competitions by market.",
      },
      {
        title: "Category Priority by Country",
        objective:
          "Identify which sports and casino categories matter most in each country.",
        itemsLabel: "Validated priorities",
        items: [
          "Sports: Football, Baseball, Boxing, Tennis",
          "Casino: Slots, Live Casino, Crash Games",
        ],
        result:
          "Supports Geo-IP navigation personalisation and better market-specific UX decisions.",
      },
    ],
    sectionImpact: [
      "Avoids low-demand page creation",
      "Improves relevance of quick links and menus",
      "Feeds future localisation and personalisation logic",
    ],
  },
  {
    id: "project-organisation",
    order: "06",
    theme: "Operations",
    title: "Project Organisation",
    headline:
      "Execution was structured early through task mapping, ownership, and timeline clarity.",
    summary:
      "The project operating model was defined before scaling execution, reducing ambiguity in the initial implementation phase.",
    metrics: [
      { label: "Execution lens", value: "Dependencies + owners" },
      { label: "Structure", value: "Task classification" },
      { label: "Outcome", value: "Organised start" },
    ],
    details: [
      {
        title: "Operational Planning",
        objective:
          "Organise the initial execution framework for the project.",
        actions: [
          "Identified operational tasks.",
          "Classified them by type.",
          "Assigned responsibilities.",
          "Defined dependencies and timelines.",
        ],
        impact: ["Ensures an organised and efficient project start."],
      },
    ],
    sectionImpact: [
      "Better sequencing of launch work",
      "Clear accountability during implementation",
      "Reduced execution ambiguity",
    ],
  },
  {
    id: "documentation-management",
    order: "07",
    theme: "Operations",
    title: "Documentation Management",
    headline:
      "The Orbit System was established as the reliable repository for project deliverables.",
    summary:
      "Documentation was centralised and cleaned so the team could work from a single, trusted system instead of fragmented files.",
    metrics: [
      { label: "Repository model", value: "Orbit System" },
      { label: "Data hygiene", value: "Deduplicated" },
      { label: "Outcome", value: "Single source of truth" },
    ],
    details: [
      {
        title: "Orbit System Repository",
        objective: "Maintain a centralised documentation system.",
        actions: [
          "Uploaded all key documents and deliverables.",
          "Ensured proper classification.",
          "Eliminated duplicates.",
        ],
        impact: [
          "Provides the team with a single reliable source of project information.",
        ],
      },
    ],
    sectionImpact: [
      "Faster document retrieval",
      "Lower risk of version confusion",
      "Higher team confidence in shared references",
    ],
  },
  {
    id: "brand-strategy",
    order: "08",
    theme: "Brand",
    title: "Brand Strategy",
    headline:
      "Brand positioning and editorial guidance were documented before launch content production.",
    summary:
      "The brand system was formalised with a strategic brief and a writing framework that keeps communication consistent across channels.",
    metrics: [
      { label: "Core documents", value: "2" },
      { label: "Scope", value: "Identity + editorial" },
      { label: "Outcome", value: "Unified communication" },
    ],
    details: [
      {
        title: "Brand Brief Development",
        objective:
          "Define the brand's identity and communication guidelines.",
        itemsLabel: "Contents of the brief",
        items: [
          "brand identity",
          "values",
          "communication tone",
          "competitive advantages",
          "target audiences",
          "value propositions",
          "digital objectives",
        ],
        result:
          "Created a shared reference point for messaging, positioning, and brand differentiation.",
        links: [
          {
            label: "Brand brief",
            url: "https://docs.google.com/document/d/1qtVpZ_n8sGZmoONP0u48RuCEGNzCBCJRLFOwalFr47o/edit",
            kind: "Document",
          },
          {
            label: "Editorial style guide",
            url: "https://docs.google.com/document/d/1ngXBGD_FhFzFT5kxcCBaxPpnkVZxYkCcky8BHuMDloU/edit",
            kind: "Document",
          },
        ],
      },
    ],
    sectionImpact: [
      "A clearer brand voice for launch",
      "Sharper differentiation against competitors",
      "More consistent briefs for content and design teams",
    ],
  },
  {
    id: "data-infrastructure",
    order: "09",
    theme: "Data",
    title: "Data Infrastructure",
    headline:
      "Snapshotting and ingestion monitoring were set up to keep reporting and operational data trustworthy.",
    summary:
      "Analytics reliability was treated as part of launch readiness, with technical controls added before scale.",
    metrics: [
      { label: "Snapshot status", value: "Implemented" },
      { label: "Source status", value: "Connected" },
      { label: "Validation status", value: "Monitored" },
    ],
    details: [
      {
        title: "Snapshot Setup & Data Ingestion Monitoring",
        objective: "Ensure the system processes data correctly.",
        actions: [
          "Implemented the system snapshot.",
          "Connected data sources.",
          "Monitored data ingestion.",
          "Validated data accuracy.",
        ],
        impact: ["Ensures reliable analytics and operational data."],
      },
    ],
    sectionImpact: [
      "More dependable analytics at launch",
      "Higher confidence in operational reporting",
      "Early detection of ingestion issues",
    ],
  },
];

export const sourceLibrary: ResourceLink[] = [
  {
    label: "Casino architecture document",
    url: "https://docs.google.com/document/d/1S8g2r0qoHk7geAoSXhHRDllDnICKfO-TpwEcCi9UK6c/edit",
    kind: "Document",
  },
  {
    label: "Regional terminology sheet",
    url: "https://docs.google.com/spreadsheets/d/1gSnzOkHCLmOzepuN_PkFOu_kLFkBpSsz-oYnHdgF7Es/edit",
    kind: "Spreadsheet",
  },
  {
    label: "Help and tutorials research",
    url: "https://docs.google.com/spreadsheets/d/1KeAK_e5pctgbc4UQZA4okRiGNSwJmNkSisjLGT-OEYQ/edit",
    kind: "Spreadsheet",
  },
  {
    label: "Strategy and mechanics research",
    url: "https://docs.google.com/spreadsheets/d/1dwjJ2hdGjvZRjSIzr_LYJJlzLkoUVNKnMi0M1WaQZsU/edit",
    kind: "Spreadsheet",
  },
  {
    label: "Academy research",
    url: "https://docs.google.com/spreadsheets/d/1EtaWHhWcLUFGWcJ1hVw6_Lrm2N07onKvUcORWgvcB60/edit",
    kind: "Spreadsheet",
  },
  {
    label: "Transactional keyword research",
    url: "https://docs.google.com/spreadsheets/d/1zGg5d6V9DIGKBvrLA5ryWwGzEfenNF5inSPFK3SWT5c/edit",
    kind: "Spreadsheet",
  },
  {
    label: "Brand brief",
    url: "https://docs.google.com/document/d/1qtVpZ_n8sGZmoONP0u48RuCEGNzCBCJRLFOwalFr47o/edit",
    kind: "Document",
  },
  {
    label: "Editorial style guide",
    url: "https://docs.google.com/document/d/1ngXBGD_FhFzFT5kxcCBaxPpnkVZxYkCcky8BHuMDloU/edit",
    kind: "Document",
  },
];

export const overallResults = [
  "A structured website architecture",
  "A validated multi-country SEO strategy",
  "A unified brand communication framework",
  "A centralised documentation system",
  "Data infrastructure ready for analytics",
  "A clear roadmap for content and growth",
];
