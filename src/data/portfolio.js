export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
]

export const site = {
  initials: 'BC',
  name: 'Benedict Castro',
  productName: "Benedict Castro - Developer's Portfolio",
  role: 'Full-stack developer and UI systems builder',
  location: 'Philippines / Remote',
  email: 'opportunities@benedictcastro.dev',
  headline: 'Building practical digital products with clean interfaces and reliable systems.',
  description:
    'A developer brand platform for case studies, implementation thinking, and production-grade frontend craft.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Email', href: 'mailto:opportunities@benedictcastro.dev' },
  ],
  footer: {
    exploreLabel: 'Explore',
    connectLabel: 'Connect',
    note: 'Built with React, TailwindCSS v4, Framer Motion, and a data-driven component system.',
  },
}

export const home = {
  hero: {
    eyebrow: 'Personal developer brand platform',
    title: "Benedict Castro - Developer's Portfolio",
    signature: 'Benedict Castro',
    description:
      'I build polished React experiences, reusable UI systems, and workflow-minded web apps that help teams move from idea to working product.',
    primaryCta: { label: 'View projects', href: '/projects' },
    secondaryCta: { label: 'Start a conversation', href: '/contact' },
    availability: 'Available for internships, freelance builds, and product teams',
    proofPoints: ['React UI systems', 'Case-study thinking', 'End-to-end delivery'],
  },
  stats: [
    { value: '12+', label: 'Product flows shipped' },
    { value: '8', label: 'Case-study builds' },
    { value: '4', label: 'Core stacks practiced' },
  ],
  productPanel: {
    consoleLabel: 'Brand console',
    title: 'Portfolio operating system',
    subtitle: 'Case studies, skills, proof, and contact flow in one polished surface.',
    rows: [
      { label: 'Project read depth', value: 'Case study' },
      { label: 'Interaction quality', value: 'Premium' },
      { label: 'Hiring signal', value: 'Clear' },
    ],
  },
  sections: [
    {
      eyebrow: 'Why this portfolio exists',
      title: 'More than a gallery of screenshots.',
      description:
        'The platform frames Benedict as a builder who understands problems, ships practical solutions, and sweats the interface details that make products feel trustworthy.',
    },
    {
      eyebrow: 'Featured work',
      title: 'Case studies with problem, process, and results.',
      description:
        'Each project is structured to show the thinking behind the work, the technical decisions, and the outcome a stakeholder would care about.',
    },
    {
      eyebrow: 'Trusted signals',
      title: 'A portfolio built for scanning and depth.',
      description:
      'Recruiters can move quickly through the highlights, while technical reviewers can open full breakdowns when they need more evidence.',
    },
  ],
  skillsPreview: {
    eyebrow: 'Skills snapshot',
    title: 'A stack organized around product delivery.',
    description:
      'Skills are grouped by how they support shipping real interfaces, data flows, and maintainable systems.',
  },
  projectsLink: {
    label: 'Explore all case studies',
    href: '/projects',
  },
  finalCta: {
    eyebrow: 'Next step',
    title: 'Need a developer who can make the work feel real?',
    description:
      'Open a conversation with context, goals, and timeline. The contact flow is built for a clean handoff.',
    cta: { label: 'Contact Benedict', href: '/contact' },
  },
}

export const valueProps = [
  {
    title: 'SaaS-grade visual hierarchy',
    description:
      'Layouts are optimized for fast scanning, clear calls to action, and a premium sense of structure.',
  },
  {
    title: 'Implementation-first storytelling',
    description:
      'Case studies connect product problems to technical choices, not just finished screens.',
  },
  {
    title: 'Reusable system architecture',
    description:
      'Data, components, routes, and interaction states are modular so the portfolio can evolve.',
  },
]

export const projects = [
  {
    slug: 'profile-management-platform',
    title: 'Profile Management Platform',
    category: 'Full-stack',
    summary:
      'A CRUD-driven profile system with a clean dashboard, reusable form states, and structured user records.',
    problem:
      'Students and administrators needed a faster way to manage personal records without digging through spreadsheets or inconsistent forms.',
    solution:
      'Built a focused React interface backed by API-ready data patterns, validation states, and dashboard-style record management.',
    result:
      'Reduced the interaction cost of common profile tasks and created a foundation that can scale into role-based workflows.',
    outcome: 'A maintainable profile workflow with clear data entry, editing, and review paths.',
    techStack: ['React', 'TailwindCSS', 'Spring Boot', 'MySQL', 'Axios'],
    liveLink: '#',
    githubLink: '#',
    featured: true,
    screenshots: [
      {
        title: 'Admin overview',
        caption: 'A dense but readable dashboard for scanning records and actions.',
      },
      {
        title: 'Profile editor',
        caption: 'Validation-aware forms with a predictable save flow.',
      },
    ],
    metrics: [
      { label: 'Primary flows', value: '5' },
      { label: 'Reusable fields', value: '18' },
      { label: 'Data model', value: 'CRUD' },
    ],
    process: [
      'Mapped profile fields and administrative actions.',
      'Designed reusable form states for create, edit, error, and success.',
      'Structured the interface around scanning, editing, and confirming changes.',
    ],
  },
  {
    slug: 'campus-event-hub',
    title: 'Campus Event Hub',
    category: 'Frontend',
    summary:
      'A responsive event discovery interface for browsing schedules, featured programs, and registration details.',
    problem:
      'Campus announcements were scattered across channels, making it hard for students to find relevant events quickly.',
    solution:
      'Created a mobile-first event hub with category filters, event cards, highlight sections, and clear registration paths.',
    result:
      'Improved discoverability by making events scannable, filterable, and easy to act on from any viewport.',
    outcome: 'A single front door for campus activities with clear hierarchy and interaction states.',
    techStack: ['React', 'TailwindCSS', 'Framer Motion', 'React Router'],
    liveLink: '#',
    githubLink: '#',
    featured: true,
    screenshots: [
      {
        title: 'Event discovery',
        caption: 'Filterable cards designed for fast mobile scanning.',
      },
      {
        title: 'Program detail',
        caption: 'A structured view for schedule, venue, and call to action.',
      },
    ],
    metrics: [
      { label: 'Categories', value: '6' },
      { label: 'Breakpoints', value: '3' },
      { label: 'Motion states', value: '12' },
    ],
    process: [
      'Grouped events by student intent and urgency.',
      'Created card and detail patterns that work across mobile and desktop.',
      'Added subtle transitions to make browsing feel responsive without slowing users down.',
    ],
  },
  {
    slug: 'inventory-intelligence-dashboard',
    title: 'Inventory Intelligence Dashboard',
    category: 'Dashboard',
    summary:
      'A SaaS-style dashboard concept for tracking inventory health, alerts, and operational decisions.',
    problem:
      'Operational teams need a way to see stock risk, movement, and priority items without manually reviewing raw tables.',
    solution:
      'Designed a dashboard with status cards, trend sections, searchable tables, and focused empty states.',
    result:
      'Turned fragmented inventory signals into an organized command center for repeated daily use.',
    outcome: 'A calm, work-focused interface for monitoring inventory and acting on exceptions.',
    techStack: ['React', 'TailwindCSS', 'Charts', 'Data Modeling'],
    liveLink: '#',
    githubLink: '#',
    featured: true,
    screenshots: [
      {
        title: 'Inventory health',
        caption: 'Status summaries and alerts designed for daily operations.',
      },
      {
        title: 'Stock table',
        caption: 'Dense table interactions with clear risk labels.',
      },
    ],
    metrics: [
      { label: 'Tracked states', value: '9' },
      { label: 'Dashboard zones', value: '4' },
      { label: 'Table actions', value: '7' },
    ],
    process: [
      'Defined inventory states by priority and user action.',
      'Built reusable status, metric, and table patterns.',
      'Balanced density with spacing so operational users can scan repeatedly.',
    ],
  },
  {
    slug: 'portfolio-brand-system',
    title: 'Developer Portfolio Brand System',
    category: 'UI System',
    summary:
      'A component-driven portfolio system with routes, case studies, theme persistence, and reusable content modules.',
    problem:
      'Generic developer templates often bury the actual value proposition under repetitive sections and weak hierarchy.',
    solution:
      'Built a SaaS-inspired portfolio structure that treats personal branding as a product experience.',
    result:
      'Created a scalable portfolio foundation that can be updated through structured data instead of scattered markup.',
    outcome: 'A production-minded portfolio architecture that supports growth, clarity, and polish.',
    techStack: ['React', 'React Router', 'TailwindCSS v4', 'Framer Motion'],
    liveLink: '#',
    githubLink: '#',
    featured: false,
    screenshots: [
      {
        title: 'Brand landing',
        caption: 'A premium first impression with strong identity and conversion paths.',
      },
      {
        title: 'Case study route',
        caption: 'Reusable storytelling structure for every project.',
      },
    ],
    metrics: [
      { label: 'Routes', value: '8' },
      { label: 'Data files', value: '1' },
      { label: 'Reusable components', value: '14+' },
    ],
    process: [
      'Defined content objects for projects, skills, testimonials, and timelines.',
      'Created a reusable design system for cards, sections, badges, and buttons.',
      'Added route transitions, scroll reveals, and persistent dark mode.',
    ],
  },
]

export const skillCategories = [
  {
    title: 'Frontend',
    description: 'Interfaces built for polish, accessibility, and reusable systems.',
    skills: ['React', 'React Router', 'TailwindCSS', 'Framer Motion', 'Responsive UI', 'Accessibility'],
  },
  {
    title: 'Backend',
    description: 'API-minded development with reliable data flows and clear contracts.',
    skills: ['Spring Boot', 'REST APIs', 'MySQL', 'Authentication flows', 'Validation', 'CRUD systems'],
  },
  {
    title: 'Tools and workflow',
    description: 'Practical engineering habits that keep projects maintainable.',
    skills: ['Git', 'Vite', 'ESLint', 'Postman', 'Data modeling', 'Component architecture'],
  },
]

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Independent project work',
    period: '2025 - Present',
    location: 'Remote',
    description:
      'Designing and implementing responsive React applications with a strong focus on reusable UI systems and product clarity.',
    bullets: [
      'Built component-driven interfaces for portfolio, dashboard, and CRUD workflows.',
      'Translated product goals into route structures, data models, and interaction states.',
      'Improved perceived quality through motion, spacing, responsive behavior, and accessibility.',
    ],
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
  },
  {
    role: 'Full-stack Developer',
    company: 'Academic and capstone builds',
    period: '2024 - Present',
    location: 'Philippines',
    description:
      'Creating practical web systems that combine frontend interfaces with backend-ready data structures and API workflows.',
    bullets: [
      'Implemented CRUD flows for user and profile management scenarios.',
      'Connected UI states to data requirements, validation rules, and user feedback.',
      'Documented projects through case-study style breakdowns for technical review.',
    ],
    tags: ['Spring Boot', 'MySQL', 'REST APIs'],
  },
  {
    role: 'UI Systems Builder',
    company: 'Personal developer brand',
    period: '2023 - Present',
    location: 'Hybrid',
    description:
      'Developing a personal design language that makes developer work easier to evaluate and remember.',
    bullets: [
      'Created visual systems for cards, badges, navigation, sections, forms, and timelines.',
      'Focused on clean hierarchy, scannability, and conversion paths for hiring audiences.',
      'Built interfaces that feel modern without sacrificing speed or usability.',
    ],
    tags: ['Design systems', 'UX writing', 'Portfolio strategy'],
  },
]

export const education = [
  {
    institution: 'University technology program',
    program: 'Information Technology',
    period: '2022 - Present',
    location: 'Philippines',
    description:
      'Coursework and project work focused on software development, databases, web systems, and practical problem solving.',
    highlights: ['Web application development', 'Database design', 'System analysis', 'Software engineering'],
  },
  {
    institution: 'Self-directed engineering practice',
    program: 'Frontend systems and product UI',
    period: 'Ongoing',
    location: 'Remote',
    description:
      'Continuous practice through portfolio builds, interface experiments, and production-style React architecture.',
    highlights: ['Component architecture', 'Responsive design', 'Motion systems', 'Accessibility fundamentals'],
  },
]

export const certifications = [
  'Responsive web design practice',
  'React application architecture',
  'REST API integration fundamentals',
  'Database-backed application workflows',
]

export const testimonials = [
  {
    name: 'Project collaborator',
    role: 'Student founder',
    message:
      'Benedict turns rough product ideas into interfaces that feel organized, polished, and much easier to explain.',
    highlight: 'Clear product thinking',
    rating: '5.0',
  },
  {
    name: 'Technical reviewer',
    role: 'Instructor',
    message:
      'The strongest part of his work is how he connects the user flow to the implementation details instead of treating them separately.',
    highlight: 'Implementation clarity',
    rating: '4.9',
  },
  {
    name: 'Team partner',
    role: 'Capstone teammate',
    message:
      'He cares about the small interface states that usually get missed, especially forms, empty states, and mobile behavior.',
    highlight: 'Reliable UI craft',
    rating: '5.0',
  },
]

export const contact = {
  eyebrow: 'Contact',
  title: 'Have a product idea, internship role, or build request?',
  description:
    'Send the context, timeline, and what success looks like. The form includes validation, loading, success, and error states.',
  responseTime: 'Typical response window: 24-48 hours',
  options: [
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { label: 'Location', value: site.location, href: '#' },
    { label: 'Focus', value: 'React products, dashboards, and portfolio systems', href: '#' },
  ],
  form: {
    fields: {
      name: {
        label: 'Name',
        placeholder: 'Your name',
        error: 'Enter at least 2 characters.',
      },
      email: {
        label: 'Email',
        placeholder: 'you@example.com',
        error: 'Enter a valid email address.',
      },
      message: {
        label: 'Message',
        placeholder: 'Tell me about the opportunity, timeline, and what you want to build.',
        error: 'Share at least 20 characters of context.',
      },
    },
    submitLabel: 'Send inquiry',
    successMessage:
      'Your message is ready. This demo form shows the success state without sending to a backend.',
    errorMessage: 'Please fix the highlighted fields before sending.',
  },
}

export const uiLabels = {
  caseStudy: 'Case study',
  filter: 'Filter',
  screenshot: 'Screenshot',
  learningSignal: 'Learning signal',
  livePreview: 'Live preview',
  github: 'GitHub',
  backHome: 'Back home',
  backToProjects: 'Back to projects',
  discussSimilarBuild: 'Discuss a similar build',
  skipToContent: 'Skip to content',
  loadingPortfolio: 'Loading portfolio system',
  brandLogoAlt: 'Developer workspace illustration for Benedict Castro portfolio',
  openChannel: 'Open channel',
  openNavigation: 'Open navigation menu',
  closeNavigation: 'Close navigation menu',
  switchToLight: 'Switch to light mode',
  switchToDark: 'Switch to dark mode',
}

export const pageContent = {
  about: {
    eyebrow: 'About',
    title: 'A developer brand built around clarity, craft, and useful systems.',
    description:
      'Benedict Castro builds interfaces that make product value easier to understand, evaluate, and trust.',
    narrative:
      'This portfolio is intentionally structured like a modern SaaS surface: clear navigation, crisp sections, strong proof points, and detailed case study routes. It is designed for people who need to evaluate both visual craft and implementation judgment.',
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Capabilities grouped by how modern products are actually built.',
    description:
      'The skill system is intentionally categorized so technical reviewers can scan strengths without digging through a long undifferentiated tag list.',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Case studies that show the product problem, technical path, and result.',
    description:
      'Browse by project type, then open any case study for a deeper breakdown of the problem, solution, tech stack, process, and outcome.',
    emptyTitle: 'No projects in this category',
    emptyDescription: 'Choose another filter to view available case studies.',
  },
  projectDetails: {
    notFound: {
      eyebrow: 'Project not found',
      title: 'That case study is not available.',
      description: 'Return to the project index to browse the current portfolio work.',
    },
    storyBlocks: [
      { label: 'Problem', key: 'problem' },
      { label: 'Solution', key: 'solution' },
      { label: 'Result', key: 'result' },
    ],
    screenshots: {
      eyebrow: 'Screenshots',
      title: 'Placeholder product views.',
      description:
        'Each case study supports screenshot records in the project data structure, ready to swap for production images.',
    },
    stack: {
      eyebrow: 'Stack and process',
      title: 'The technical path behind the interface.',
      techTitle: 'Tech stack',
      processTitle: 'Process timeline',
    },
    outcomeEyebrow: 'Outcome',
  },
  experience: {
    eyebrow: 'Experience',
    title: 'A practical timeline of product-minded frontend and full-stack work.',
    description:
      'The experience timeline focuses on responsibilities, shipped patterns, and the engineering habits behind each project.',
  },
  education: {
    eyebrow: 'Education',
    title: 'Academic foundation plus continuous product engineering practice.',
    description:
      'Education is presented as a timeline, with certifications and learning tracks grouped as proof of ongoing development.',
  },
  certifications: {
    eyebrow: 'Certifications',
    title: 'Focused learning tracks.',
  },
  notFound: {
    eyebrow: '404',
    title: 'This route is not part of the portfolio system.',
    description:
      "Use the primary navigation or return home to continue exploring Benedict Castro's developer portfolio.",
  },
}
