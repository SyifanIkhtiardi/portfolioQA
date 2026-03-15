// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

// ─── About ────────────────────────────────────────────────────────────────────
export const ABOUT_PARAGRAPHS_LEFT = [
  `I'm Syifan, a Software Quality Assurance Specialist based in Magelang, Indonesia.
   I've spent my career ensuring that software doesn't just work — it works beautifully
   and reliably for the people who depend on it.`,
  `My day-to-day involves crafting comprehensive test plans, hunting down defects before
   users encounter them, and writing documentation that actually helps people. I work
   closely with developers, designers, and product managers to keep quality front and
   center throughout the entire lifecycle.`,
]

export const ABOUT_PARAGRAPHS_RIGHT = [
  `Beyond manual and automated testing, I've grown a strong interest in performance
   engineering — writing load test scripts with k6 to expose bottlenecks before they
   become production problems. I find the intersection of technical rigor and user empathy
   particularly compelling.`,
  `When I'm not chasing bugs, I'm thinking about how to make software easier to adopt,
   how to communicate complexity clearly, and how to leave every codebase in better
   shape than I found it.`,
]

export const WHAT_I_DO = [
  {
    title: 'Test Engineering',
    desc:  'From test strategy to execution — I design plans that are thorough, reproducible, and meaningful. Every test case has a purpose; every bug report tells a story.',
  },
  {
    title: 'Performance Testing',
    desc:  'Using k6 and JavaScript, I write load and stress test scripts that reveal how systems behave under pressure — before your users find out the hard way.',
  },
  {
    title: 'UAT Management',
    desc:  'I bridge the gap between technical teams and end users, managing acceptance testing cycles that surface real-world issues early and keep delivery on track.',
  },
  {
    title: 'Documentation',
    desc:  'Clear, human-centered user guides and technical docs that reduce confusion, drive adoption, and make support teams breathe easier.',
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCES = [
  {
    period:  'Oct 2023 — Present',
    company: 'Nexa',
    role:    'Software Quality Assurance',
    location:'Semarang, Indonesia',
    badge:   'Current',
    current: true,
    summary: 'At PT Internet Mulia Untuk Negeri, I work as the primary QA across multiple software products, embedded within cross-functional teams and involved from the earliest stages of each feature\'s life.',
    tasks: [
      'Collaborate with developers to identify, document, and resolve defects — translating technical findings into clear, actionable reports that accelerate resolution.',
      'Design and implement comprehensive test plans and test cases that catch issues well before they reach production, improving overall product reliability.',
      'Build and maintain thorough test documentation — from test procedures to defect reports — ensuring every stakeholder stays aligned on quality status.',
      'Lead User Acceptance Testing cycles, coordinating between product owners and end users to surface critical issues early and keep release timelines on track.',
      'Author detailed, user-friendly guide documents that reduce the learning curve, drive adoption, and cut down on support overhead.',
      'Map user flows from existing products, helping new team members onboard faster and giving the whole team a clearer shared understanding of app behavior.',
      'Write and execute performance test scripts using k6, simulating high-traffic scenarios to surface bottlenecks and provide developers actionable insights on latency, throughput, and error rates.',
      'Stay in direct communication with customers around issues, gathering feedback that shapes future improvements and builds genuine trust.',
    ],
  },
  {
    period:  'Oct 2022 — May 2023',
    company: 'PrivyID',
    role:    'QA Engineer Intern',
    location:'Yogyakarta, Indonesia',
    badge:   'Internship',
    current: false,
    summary: 'PT Privy Identitas Digital is a digital identity and e-signature platform. As a QA intern I was embedded in product squads and worked across the full testing lifecycle.',
    tasks: [
      'Translated designs and technical specifications into comprehensive, structured test cases that maximized coverage and caught edge cases early.',
      'Worked closely with developers, designers, and product managers to clarify gaps between what was specified and what was built — keeping everyone honest and aligned.',
      'Executed test cases systematically and logged defects in the bug tracking system, maintaining the consistency and accuracy that QA standards demand.',
      'Produced thorough test reports that gave stakeholders a clear, honest picture of quality at every milestone.',
    ],
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    category: 'Core Practices',
    items: ['Test Planning', 'Test Case Design', 'Bug Tracking', 'UAT Management',
            'Performance Testing', 'Regression Testing', 'User Flow Mapping', 'Technical Writing'],
  },
  {
    category: 'Testing Tools',
    items: ['Cypress', 'Playwright', 'k6', 'Postman', 'Burp Suite', 'Nessus', 'Qase.io', 'Jira'],
  },
  {
    category: 'Scripting',
    items: ['JavaScript', 'k6 Scripts', 'API Testing', 'Test Automation'],
  },
  {
    category: 'Soft Skills',
    items: ['Cross-functional Collaboration', 'Stakeholder Communication',
            'Analytical Thinking', 'Customer Communication'],
  },
  {
    category: 'Languages',
    items: ['Bahasa Indonesia — Fluent', 'English — Reading & Listening'],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    index:  '01',
    type:   'Automation Testing',
    name:   'TMDb Website Automation',
    desc:   'An end-to-end automated test suite built with Cypress for The Movie Database website. The project covers the complete user journey of marking movies as favorites — from authentication through UI interactions to data persistence — ensuring the feature behaves exactly as expected across runs.',
    tech:   ['Cypress', 'JavaScript', 'E2E Testing', 'TMDb API'],
    link:   'https://github.com/SyifanIkhtiardi/cypress-themoviedb.org',
    linkLabel: 'View on GitHub',
  },
]

// ─── Contact ──────────────────────────────────────────────────────────────────
export const CONTACT_LINKS = [
  { label: 'Email',    value: 'ikhtiardi.s@gmail.com',               href: 'mailto:ikhtiardi.s@gmail.com' },
  { label: 'LinkedIn', value: 'syifanikhtiardi',                      href: 'https://www.linkedin.com/in/syifanikhtiardi/' },
  { label: 'GitHub',   value: 'SyifanIkhtiardi',                      href: 'https://github.com/SyifanIkhtiardi' }
]

export const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/SyifanIkhtiardi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/syifanikhtiardi/' },
  { label: 'Email',    href: 'mailto:ikhtiardi.s@gmail.com' },
]
