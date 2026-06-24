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
  name: 'Benedict M. Castro, MIT',
  productName: 'Benedict M. Castro - Developer Portfolio',
  role: 'Software Engineer | Java Full Stack Developer | IT Instructor',
  location: 'Basak, Lapu-Lapu City, Cebu, Philippines',
  phone: '+63 998 493 7076',
  email: 'benmoncast@gmail.com',
  headline:
    'Java full stack developer and IT educator building enterprise-ready software, database-driven systems, and future-ready developers.',
  description:
    'A professional developer brand platform for software engineering experience, Java full stack projects, cloud and DevOps growth, teaching work, and technical mentorship.',
  socials: [
    { label: 'GitHub Portfolio', href: '#' },
    { label: 'LinkedIn Profile', href: '#' },
    { label: 'Email', href: 'mailto:benmoncast@gmail.com' },
  ],
  footer: {
    exploreLabel: 'Explore',
    connectLabel: 'Connect',
    note: 'Built with React, TailwindCSS v4, Framer Motion, and a data-driven portfolio system.',
  },
}

export const home = {
  hero: {
    eyebrow: 'Software engineer, educator, and Java full stack developer',
    title: 'Benedict M. Castro, MIT',
    signature: 'Benedict M. Castro',
    description:
      'Dedicated software engineer and IT educator with enterprise application experience, backend engineering strength, database expertise, and more than a decade of teaching future developers.',
    primaryCta: { label: 'View project experience', href: '/projects' },
    secondaryCta: { label: 'Contact Benedict', href: '/contact' },
    availability: 'Open to Java full stack, software engineering, cloud engineering, and DevOps opportunities',
    proofPoints: ['Java and Spring Boot', 'Enterprise applications', 'IT education and mentoring'],
  },
  stats: [
    { value: '10+', label: 'Years in IT education' },
    { value: '40+', label: 'Capstone students guided' },
    { value: '2024', label: 'OCI certified foundation' },
  ],
  productPanel: {
    consoleLabel: 'Career console',
    title: 'Software engineering profile',
    subtitle:
      'Enterprise Java development, REST APIs, database systems, cloud fundamentals, DevOps practices, and technical instruction.',
    rows: [
      { label: 'Primary stack', value: 'Java Spring Boot' },
      { label: 'Database focus', value: 'MySQL and Oracle' },
      { label: 'Career direction', value: 'Full Stack / Cloud / DevOps' },
    ],
  },
  sections: [
    {
      eyebrow: 'Professional profile',
      title: 'A software engineer who also knows how to teach the craft.',
      description:
        'Benedict combines enterprise application development experience with long-running academic instruction in Java, databases, web technologies, software engineering, and full stack development.',
    },
    {
      eyebrow: 'Project experience',
      title: 'Practical software work across enterprise systems, full stack builds, and mentorship.',
      description:
        'The project section highlights backend services, REST API development, database-driven applications, and student capstone guidance using real software engineering practices.',
    },
    {
      eyebrow: 'Professional signal',
      title: 'A profile built around software delivery, mentoring, and continuous learning.',
      description:
        'Recruiters and collaborators can quickly scan experience, technical skills, education, certification, and hands-on project work.',
    },
  ],
  skillsPreview: {
    eyebrow: 'Skills snapshot',
    title: 'A Java-centered full stack skill set with database, cloud, and DevOps foundations.',
    description:
      'Skills are grouped by engineering domain so technical reviewers can quickly understand backend depth, frontend capability, database strength, and tooling maturity.',
  },
  projectsLink: {
    label: 'Explore all project experience',
    href: '/projects',
  },
  finalCta: {
    eyebrow: 'Next step',
    title: 'Looking for a Java full stack developer, instructor, or cloud-ready engineer?',
    description:
      'Reach out with the role, project context, timeline, and success criteria. Benedict brings engineering execution and teaching clarity to technical teams.',
    cta: { label: 'Contact Benedict', href: '/contact' },
  },
}

export const valueProps = [
  {
    title: 'Enterprise Java engineering',
    description:
      'Professional experience maintaining and improving enterprise web service applications with Java, Spring Boot, REST APIs, Oracle Database, SQL, and Git workflows.',
  },
  {
    title: 'Technical instruction and mentorship',
    description:
      'More than a decade of instruction across Java, databases, web development, networking, ReactJS, Spring Boot, and student software engineering projects.',
  },
  {
    title: 'Cloud and DevOps growth path',
    description:
      'Foundational exposure to AWS, Oracle Cloud Infrastructure, CI/CD concepts, Docker basics, shell scripting, deployment support, and automation practices.',
  },
]

export const projects = [
  {
    slug: 'enterprise-application-development',
    title: 'Enterprise Application Development',
    category: 'Backend',
    summary:
      'Maintained and enhanced enterprise web service applications using Java, Spring Boot, REST APIs, Oracle Database, SQL, Thymeleaf, and Agile workflows.',
    problem:
      'Enterprise systems require reliable backend services, maintainable application code, optimized database logic, and careful alignment with business and architectural requirements.',
    solution:
      'Developed and optimized Spring Boot REST APIs, maintained Thymeleaf UI components, improved SQL logic in Oracle SQL Developer, validated APIs with Postman, and used Git-based collaboration practices.',
    result:
      'Improved backend functionality, application maintainability, API reliability, and production support readiness for business-critical enterprise applications.',
    outcome:
      'A stronger enterprise application foundation with improved REST API behavior, SQL performance, documentation discipline, and Agile delivery support.',
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'Thymeleaf', 'Oracle Database', 'SQL', 'Git', 'Postman'],
    liveLink: '#',
    githubLink: '#',
    featured: true,
    screenshots: [
      {
        title: 'Enterprise service layer',
        caption: 'Backend services structured around Spring Boot APIs, data access, validation, and maintainability.',
      },
      {
        title: 'Database support workflow',
        caption: 'SQL query optimization and Oracle Database maintenance for application reliability.',
      },
    ],
    metrics: [
      { label: 'Role', value: 'ASE' },
      { label: 'Methodology', value: 'Agile' },
      { label: 'Focus', value: 'REST' },
    ],
    process: [
      'Maintained enterprise web service applications against business and architecture requirements.',
      'Developed and optimized backend functionality through Spring Boot REST API work.',
      'Supported debugging, testing, deployment, documentation, and API validation activities.',
    ],
  },
  {
    slug: 'java-full-stack-development',
    title: 'Java Full Stack Development Projects',
    category: 'Full-stack',
    summary:
      'Designed and implemented database-driven full stack web applications using Java, Spring Boot, MySQL, HTML, CSS, JavaScript, Thymeleaf, and ReactJS learning paths.',
    problem:
      'Full stack applications need clean architecture, RESTful integration, usable interfaces, database design, and practical version control workflows.',
    solution:
      'Applied MVC architecture, RESTful API development, frontend integration, database-backed application design, and Git/GitHub collaboration habits.',
    result:
      'Produced application workflows that connect backend APIs, frontend experiences, database models, and maintainable development practices.',
    outcome:
      'A practical full stack delivery profile grounded in Java, Spring Boot, SQL databases, web technologies, and expanding ReactJS expertise.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'GitHub'],
    liveLink: '#',
    githubLink: '#',
    featured: true,
    screenshots: [
      {
        title: 'Full stack architecture',
        caption: 'Application flow from frontend screens to REST APIs and database-backed records.',
      },
      {
        title: 'Frontend integration',
        caption: 'JavaScript, Thymeleaf, Bootstrap, and ReactJS growth applied to real application interfaces.',
      },
    ],
    metrics: [
      { label: 'Pattern', value: 'MVC' },
      { label: 'Backend', value: 'Java' },
      { label: 'Database', value: 'SQL' },
    ],
    process: [
      'Modeled data and application workflows around real user and business needs.',
      'Implemented RESTful APIs and database logic for frontend integration.',
      'Used Git and GitHub workflows for version control, review, and collaboration.',
    ],
  },
  {
    slug: 'academic-capstone-mentorship',
    title: 'Academic Capstone Project Mentorship',
    category: 'Mentorship',
    summary:
      'Guided student software engineering projects involving database design, application architecture, system integration, cloud deployment, testing, and documentation.',
    problem:
      'Student teams often need structure around scoping, architecture, coding standards, database design, testing, deployment, and technical documentation.',
    solution:
      'Mentored students through project planning, software engineering best practices, object-oriented programming, application architecture, and database-driven development.',
    result:
      'Helped approximately 40 students develop stronger software engineering competence through practical and project-based learning.',
    outcome:
      'A mentorship track that connects academic learning with industry-relevant development practices and project delivery habits.',
    techStack: ['Java', 'MySQL', 'Cloud Platforms', 'Software Engineering', 'Documentation', 'Testing'],
    liveLink: '#',
    githubLink: '#',
    featured: true,
    screenshots: [
      {
        title: 'Project guidance model',
        caption: 'Structured student mentorship from requirements and architecture through implementation and testing.',
      },
      {
        title: 'Capstone delivery support',
        caption: 'Practical support for database design, deployment, documentation, and software engineering standards.',
      },
    ],
    metrics: [
      { label: 'Students', value: '40+' },
      { label: 'Focus', value: 'Capstone' },
      { label: 'Model', value: 'Mentor' },
    ],
    process: [
      'Guided students through database design, application architecture, and implementation planning.',
      'Reviewed project documentation, coding practices, system integration, and testing approaches.',
      'Reinforced professional habits in software engineering, communication, and technical problem solving.',
    ],
  },
  {
    slug: 'cloud-and-devops-learning',
    title: 'Cloud and DevOps Learning Track',
    category: 'Cloud',
    summary:
      'A continuous learning track across AWS, Oracle Cloud Infrastructure, CI/CD concepts, Docker basics, Linux shell scripting, deployment support, and automation practices.',
    problem:
      'Modern Java and full stack engineers need cloud literacy, deployment awareness, automation habits, and infrastructure fundamentals alongside application development.',
    solution:
      'Completed cloud and DevOps-focused training while applying deployment support, environment setup, API testing, scripting, and CI/CD fundamentals in software workflows.',
    result:
      'Strengthened readiness for cloud engineering, DevOps engineering, and modern application delivery responsibilities.',
    outcome:
      'A career path intentionally expanding from Java full stack development into cloud-ready and DevOps-aware engineering.',
    techStack: ['AWS Cloud', 'Oracle Cloud Infrastructure', 'CI/CD', 'Docker', 'Bash', 'Linux', 'Postman'],
    liveLink: '#',
    githubLink: '#',
    featured: false,
    screenshots: [
      {
        title: 'Cloud foundations',
        caption: 'AWS, Oracle Cloud Infrastructure, and Azure fundamentals used to build broader platform awareness.',
      },
      {
        title: 'DevOps practices',
        caption: 'CI/CD concepts, shell scripting, Docker basics, and deployment support as part of modern delivery.',
      },
    ],
    metrics: [
      { label: 'Cloud', value: 'OCI' },
      { label: 'DevOps', value: 'CI/CD' },
      { label: 'Path', value: 'Growth' },
    ],
    process: [
      'Built cloud literacy through Oracle Cloud, AWS, and Azure fundamentals training.',
      'Practiced DevOps-aligned workflows through deployment support, automation concepts, and scripting.',
      'Connected cloud and DevOps learning to full stack software engineering responsibilities.',
    ],
  },
]

export const skillCategories = [
  {
    title: 'Programming languages',
    description: 'Core languages used for backend engineering, web development, and database work.',
    skills: ['Java', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend development',
    description: 'Enterprise Java backend skills for building APIs, services, and database-backed applications.',
    skills: ['Spring Boot', 'Spring MVC', 'RESTful APIs', 'Thymeleaf', 'Maven', 'Gradle'],
  },
  {
    title: 'Frontend development',
    description: 'Web interface skills across traditional server-rendered views and expanding ReactJS expertise.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Thymeleaf', 'ReactJS'],
  },
  {
    title: 'Database technologies',
    description: 'Database design, SQL work, query optimization, and administration fundamentals.',
    skills: ['MySQL', 'Oracle Database', 'Oracle SQL Developer', 'IBM DB2 Express', 'Data Modeling'],
  },
  {
    title: 'Cloud and DevOps',
    description: 'Foundational cloud and delivery tooling for modern application support and deployment workflows.',
    skills: ['AWS Cloud', 'Oracle Cloud Infrastructure', 'CI/CD Pipelines', 'Docker Basic', 'Bash', 'Cygwin'],
  },
  {
    title: 'Software practices',
    description: 'Professional engineering practices used across development, instruction, and application support.',
    skills: ['Agile Scrum', 'SDLC', 'API Testing', 'Code Review', 'Technical Documentation', 'Application Support'],
  },
]

export const experience = [
  {
    role: 'IT Instructor',
    company: 'University of Cebu Lapu-Lapu and Mandaue',
    period: 'August 2025 - Present',
    location: 'Cebu, Philippines',
    description:
      'Delivering instruction in Java, Spring Boot, REST APIs, ReactJS, MySQL, Oracle Database, and modern software engineering practices.',
    bullets: [
      'Handle Database 1 and 2, IT Elective with Java Spring Boot, and ReactJS subjects.',
      'Develop curriculum materials, laboratory exercises, coding challenges, and hands-on full stack projects.',
      'Mentor students in object-oriented programming, application architecture, database design, coding standards, and enterprise application design.',
    ],
    tags: ['Java', 'Spring Boot', 'ReactJS', 'MySQL', 'Oracle Database'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Accenture Philippines',
    period: 'September 2024 - March 2025',
    location: 'Philippines',
    description:
      'Maintained enterprise web service applications and supported backend, UI, database, Agile, testing, and deployment activities.',
    bullets: [
      'Developed and optimized Spring Boot REST APIs to improve backend functionality and system performance.',
      'Maintained UI components with Thymeleaf, HTML, CSS, and JavaScript.',
      'Optimized SQL queries, used Oracle SQL Developer, validated APIs with Postman, and collaborated through Git-based Agile workflows.',
    ],
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Oracle Database', 'Agile'],
  },
  {
    role: 'ICT and IT Faculty',
    company: 'University of San Jose-Recoletos',
    period: 'February 2018 - August 2024',
    location: 'Cebu, Philippines',
    description:
      'Delivered industry-aligned instruction in Java OOP, database systems, MySQL, web development, cloud fundamentals, scripting, and software engineering.',
    bullets: [
      'Prepared students for software engineering careers through practical and project-based learning.',
      'Guided approximately 40 students in capstone projects involving development, integration, cloud deployment, and documentation.',
      'Introduced server-side architecture, scalability, performance, reliability, networking, operating systems, PowerShell, and Cygwin.',
    ],
    tags: ['Java', 'MySQL', 'Web Development', 'Cloud Fundamentals'],
  },
  {
    role: 'Cisco Instructor and IT Faculty',
    company: 'AMA Computer College - Cebu Campus',
    period: 'May 2014 - September 2017',
    location: 'Cebu, Philippines',
    description:
      'Developed and delivered courses in Java programming, MySQL database management, web development, and Cisco networking.',
    bullets: [
      'Facilitated hands-on software development and networking laboratory sessions.',
      'Delivered Cisco Networking instruction aligned with CCNA standards.',
      'Covered IP addressing, routing and switching, network troubleshooting, and Cisco Packet Tracer simulations.',
    ],
    tags: ['Java', 'MySQL', 'Cisco Networking', 'Packet Tracer'],
  },
]

export const education = [
  {
    institution: 'Cebu Institute of Technology - University',
    program: 'Master in Information Technology (MIT)',
    period: 'Graduated: June 2023',
    location: 'Cebu, Philippines',
    description:
      'Graduate-level preparation in information technology, software engineering practices, systems thinking, and applied computing.',
    highlights: ['Software Engineering', 'Information Technology', 'Systems Thinking', 'Applied Computing'],
  },
  {
    institution: 'University of Cebu Lapu-Lapu and Mandaue',
    program: 'Bachelor of Science in Information Technology (BSIT)',
    period: 'Graduated: March 2011',
    location: 'Cebu, Philippines',
    description:
      'Undergraduate foundation in software development, databases, networking, web technologies, and information systems.',
    highlights: ['Software Development', 'Database Systems', 'Web Technologies', 'Networking'],
  },
]

export const certifications = [
  'Oracle Cloud Infrastructure 2024 Certified Foundations Associate',
  'Master Spring Boot 3 and Spring Framework 6 with Java',
  'Database Fundamentals: Database Administration Basics',
  'Java Certified Foundations Associate: Development Environment',
  'Java Certified Foundations Associate: Java Concepts and Features',
  'Linux: Introduction to Shell Scripting for DevOps',
  'AWS Cloud Practitioner Essentials',
  'Microsoft Azure Fundamentals (AZ-900)',
]

export const testimonials = [
  {
    name: 'Software engineering',
    role: 'Core competency',
    message:
      'Strong foundation in object-oriented programming, software design principles, REST API development, backend development, application maintenance, and system integration.',
    highlight: 'Engineering depth',
    rating: 'Core',
  },
  {
    name: 'Technical education',
    role: 'Professional strength',
    message:
      'Experienced in curriculum development, project-based instruction, mentoring, coaching, communication, and guiding students toward industry-relevant software practices.',
    highlight: 'Mentorship',
    rating: '10+ yrs',
  },
  {
    name: 'Cloud and DevOps',
    role: 'Growth track',
    message:
      'Continuously expanding expertise in AWS, Oracle Cloud Infrastructure, CI/CD concepts, Docker fundamentals, Bash scripting, and deployment-oriented workflows.',
    highlight: 'Cloud-ready',
    rating: 'OCI',
  },
]

export const contact = {
  eyebrow: 'Contact',
  title: 'Discuss a Java full stack, software engineering, teaching, cloud, or DevOps opportunity.',
  description:
    'Send the role context, project goals, timeline, and what success looks like. The form includes validation, loading, success, and error states.',
  responseTime: 'Available for professional opportunities and technical collaboration',
  options: [
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { label: 'Phone', value: site.phone, href: 'tel:+639984937076' },
    { label: 'Location', value: site.location, href: '#' },
    { label: 'Focus', value: 'Java full stack, software engineering, cloud, DevOps, and IT instruction', href: '#' },
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
        placeholder: 'Tell me about the role, project, timeline, or collaboration.',
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
  learningSignal: 'Professional training',
  livePreview: 'Live preview',
  github: 'GitHub',
  backHome: 'Back home',
  backToProjects: 'Back to projects',
  discussSimilarBuild: 'Discuss a related opportunity',
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
    title: 'A software engineer and IT educator with enterprise, database, and full stack experience.',
    description:
      'Benedict M. Castro, MIT brings together industry software engineering experience and more than a decade of higher education instruction.',
    narrative:
      'His background spans Java, Spring Boot, RESTful APIs, MySQL, Oracle Database, Thymeleaf, JavaScript, HTML, CSS, Agile methodologies, cloud fundamentals, DevOps concepts, and technical instruction. He is passionate about building scalable software solutions, mentoring future developers, and continuously expanding into full stack development, cloud computing, and modern software engineering practices.',
  },
  skills: {
    eyebrow: 'Technical skills',
    title: 'A practical Java full stack toolkit with database, cloud, DevOps, and teaching depth.',
    description:
      "The skills section reflects Benedict's professional stack across programming languages, backend development, frontend development, databases, cloud technologies, tools, and software engineering practices.",
  },
  projects: {
    eyebrow: 'Project experience',
    title: 'Case studies across enterprise applications, full stack development, mentorship, and cloud learning.',
    description:
      'These project records translate resume experience into portfolio-ready case studies covering problems, solutions, results, technologies, and delivery process.',
    emptyTitle: 'No project experience in this category',
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
      eyebrow: 'Project views',
      title: 'Portfolio-ready project placeholders.',
      description:
        'Each project experience supports structured screenshot records, ready to replace with real application images or diagrams.',
    },
    stack: {
      eyebrow: 'Stack and process',
      title: 'The technical path behind the work.',
      techTitle: 'Technologies used',
      processTitle: 'Process timeline',
    },
    outcomeEyebrow: 'Outcome',
  },
  experience: {
    eyebrow: 'Professional experience',
    title: 'A career spanning enterprise software engineering and higher education instruction.',
    description:
      'The timeline highlights software engineering, Java full stack development, database instruction, capstone mentorship, and Cisco/networking education.',
  },
  education: {
    eyebrow: 'Education',
    title: 'Graduate and undergraduate preparation in information technology.',
    description:
      'Education includes a Master in Information Technology from Cebu Institute of Technology - University and a BSIT from University of Cebu Lapu-Lapu and Mandaue.',
  },
  certifications: {
    eyebrow: 'Certifications and training',
    title: 'Cloud, Java, Spring Boot, database, Linux, AWS, and Azure learning tracks.',
  },
  notFound: {
    eyebrow: '404',
    title: 'This route is not part of the portfolio system.',
    description:
      "Use the primary navigation or return home to continue exploring Benedict Castro's developer portfolio.",
  },
}
