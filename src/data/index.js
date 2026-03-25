// ─────────────────────────────────────────────────────────────────────────────
// data/index.js
// Central data store — edit your resume content here.
// ─────────────────────────────────────────────────────────────────────────────

export const OWNER = {
  name: "Syifan Ikhtiardi",
  role: "Software Quality Assurance Specialist",
  tagline: "Quality Without Compromise",
  location: "Magelang, Indonesia",
  email: "ikhtiardi.s@gmail.com",
  phone: "+62 813-9192-3771",
  linkedin: "https://linkedin.com/in/syifanikhtiardi",
  github: "https://github.com/SyifanIkhtiardi",
  education: "Bachelor of Industrial Engineering",
  university: "Universitas Islam Indonesia",
  languages: "Bahasa Indonesia · English",
  status: "Open to New Opportunities",
};

export const EXPERIENCE = [
  {
    period: "Oct 2023 – Present",
    company: "PT Internet Mulia Untuk Negeri (Nexa)",
    location: "Semarang, Indonesia",
    role: "Software Quality Assurance",
    bullets: [
      "Collaborated with cross-functional teams to identify, document, and resolve software defects, significantly decreasing bug-related incidents and improving overall product performance.",
      "Created and implemented comprehensive test plans and test cases for multiple software projects, substantially reducing post-release defects and enhancing customer satisfaction.",
      "Maintained meticulous documentation of test procedures, results, and defect reports, facilitating clear communication with stakeholders and reducing issue resolution time.",
      "Developed and managed test cases for User Acceptance Testing (UAT), enabling early identification of critical issues and improving product delivery timelines.",
      "Authored user-friendly and detailed user guide documents, leading to higher software adoption rates and a notable reduction in support queries.",
      "Developed user flows from existing projects, streamlining onboarding for new team members and enhancing understanding of app structure.",
      "Actively communicated with customers regarding application issues, gathering feedback and providing timely solutions to inform future enhancements.",
    ],
  },
  {
    period: "Oct 2022 – May 2023",
    company: "PT Privy Identitas Digital (PrivyID)",
    location: "Yogyakarta, Indonesia",
    role: "Quality Assurance Engineer Intern",
    bullets: [
      "Translated designs and technical specifications into comprehensive test cases to maximize coverage and ensure thorough feature validation.",
      "Collaborated with Developers, Designers, and Product Managers to clarify inconsistencies between specifications and outcomes.",
      "Executed test cases diligently and logged defects into the bug tracking system, adhering to company QA standards.",
      "Generated comprehensive test reports providing actionable insights and clear communication with stakeholders.",
    ],
  },
];

/** Skills grouped by Six Eyes category: PERCEPTION / PROCESSING / PERFORMANCE */
export const SKILL_GROUPS = [
  {
    label: "PERCEPTION",
    sublabel: "QA Testing",
    color: "#a855f7",
    skills: [
      {
        name: "Test Planning & Execution",
        desc: "Comprehensive test plans, risk-based strategies, and UAT management across complex platforms.",
        tags: ["Test Plan", "Test Case", "UAT", "Risk Analysis"],
      },
      {
        name: "Bug Tracking & Reporting",
        desc: "Precise defect documentation from reproduction steps through resolution, ensuring zero escape defects.",
        tags: ["Jira", "Qase.io", "Defect Lifecycle", "Root Cause"],
      },
      {
        name: "Security Testing",
        desc: "Vulnerability assessment, OWASP compliance, and penetration testing with Burp Suite and Nessus.",
        tags: ["Burp Suite", "Nessus", "OWASP", "Vuln Scanning"],
      },
    ],
  },
  {
    label: "PROCESSING",
    sublabel: "Automation",
    color: "#3b82f6",
    skills: [
      {
        name: "Test Automation",
        desc: "Scalable automation frameworks for regression, UI, and API coverage across every release cycle.",
        tags: ["Cypress", "Playwright", "Selenium", "Automation"],
      },
      {
        name: "API Testing",
        desc: "Validating API contracts, integration flows, and data integrity across distributed services.",
        tags: ["Postman", "REST API", "Swagger", "Integration"],
      },
    ],
  },
  {
    label: "PERFORMANCE",
    sublabel: "Load Testing",
    color: "#ef4444",
    skills: [
      {
        name: "Performance & Load Testing",
        desc: "Stress-testing systems under peak load using k6 and JMeter to surface bottlenecks before production.",
        tags: ["k6", "JMeter", "Load Testing", "Gatling"],
      },
      {
        name: "Documentation & Tech Writing",
        desc: "Clear test reports, user guides, and SOP documentation that keep teams and stakeholders aligned.",
        tags: ["User Guide", "Test Report", "SOP", "Confluence"],
      },
    ],
  },
];

export const PROJECTS = [
  {
    badge: "LOYALTY PLATFORM",
    title: "Foryou by Sinarmas Land",
    coord: "03.9984° S, 122.5137° E",
    scanType: "MOBILE / ADMIN",
    bg: "MALL",
    desc: "QA coverage for a multi-mall loyalty app (iOS, Android, admin panel) serving DP Mall Semarang, Epiwalk, The Breeze, and Q Big — receipt upload, point calculation, voucher purchasing, gamification, event management, and blast notifications.",
    tags: ["Mobile QA", "Admin Panel", "Regression", "UAT"],
  },
  {
    badge: "EDUCATION APP",
    title: "Stemba Mobile",
    coord: "07.0051° S, 110.4381° E",
    scanType: "MOBILE / WEB",
    bg: "EDU",
    desc: "End-to-end testing for a school management system for SMK 7 Semarang — student and teacher attendance, teaching journals, class settings, question bank, and student exam modules built on Laravel.",
    tags: ["Functional QA", "Web App", "Laravel", "Mobile QA"],
  },
  {
    badge: "INTERNAL TOOL",
    title: "Compliance App",
    coord: "06.2088° S, 106.8456° E",
    scanType: "WEB / INTERNAL",
    bg: "COMP",
    desc: "QA for an internal corporate compliance platform handling SOP document requests, work instruction management, job description viewing, audit request workflows, and whistleblowing features.",
    tags: ["Functional QA", "Document QA", "Workflow", "Security QA"],
  },
  {
    badge: "HR SYSTEM",
    title: "HRIS Bandeng Juwana",
    coord: "06.9667° S, 110.4167° E",
    scanType: "WEB / INTEGRATION",
    bg: "HR",
    desc: "Testing an HR management system with fingerspot attendance machine integration, automated payroll calculation including allowances and deductions, and employee data management.",
    tags: ["Integration QA", "Payroll QA", "Hardware", "UAT"],
  },
  {
    badge: "BOOKING APP",
    title: "Charisma Mobile",
    coord: "05.1477° S, 119.4327° E",
    scanType: "MOBILE / PAYMENT",
    bg: "CLINIC",
    desc: "QA for a beauty clinic reservation app (iOS, Android, admin panel) — appointment booking flows, Xendit payment gateway integration, and clinic management features.",
    tags: ["Mobile QA", "Payment QA", "Xendit", "Booking Flow"],
  },
  {
    badge: "PERSONAL PROJECT",
    title: "TMDB Automation Testing",
    coord: "34.0522° N, 118.2437° W",
    scanType: "WEB / AUTOMATION",
    bg: "TMDB",
    desc: "Automated test suite using Cypress for The Movie Database website, ensuring reliability of core features including movie favoriting workflows and user interactions.",
    tags: ["Cypress", "JavaScript", "Automation", "Web Testing"],
    github: "https://github.com/SyifanIkhtiardi/cypress-themoviedb.org",
  },
];

/** Code snippets shown during intro animation */
export const CODE_RAIN = [
  "scenarios: [{executor:'constant-vus',vus:50,duration:'30s'}]",
  "func TestMain(m *testing.M){os.Exit(m.Run())}",
  "cy.get('[data-cy=submit]').click().should('be.visible')",
  "expect(response.status).toBe(200)",
  "await page.locator('#login-btn').click()",
  "describe('API /auth',()=>{it('returns 401',async()=>{",
  "k6 run --out influxdb=http://localhost:8086/k6 script.js",
  "assert.Equal(t, http.StatusOK, resp.StatusCode)",
  "test('checkout flow',async({page})=>{await page.goto('/')})",
  "SELECT * FROM defects WHERE severity='critical' AND status='open'",
  "cy.intercept('POST','/api/login').as('loginReq')",
  "func BenchmarkAPI(b *testing.B){for i:=0;i<b.N;i++{",
  "playwright.chromium.launch({headless:true})",
  "jmeter -n -t testplan.jmx -l results.jtl",
  "burpsuite --project-file=scan.burp --config-file=config.xml",
];

export const NAV_ITEMS = ["about", "experience", "skills", "projects", "contact"];

export const HERO_STRIP = [
  { label: "Status",   value: "ACTIVE" },
  { label: "Role",     value: "QA ENGINEER" },
  { label: "Location", value: "MAGELANG, ID" },
  { label: "Open To",  value: "NEW ROLES" },
];
