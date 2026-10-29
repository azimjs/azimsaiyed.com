export const PROFILE = {
  name: 'Azim Saiyed',
  role: 'Growth Engineering Manager',
  location: 'Dallas, TX',
  email: 'contact@azimsaiyed.com',
  linkedin: 'https://www.linkedin.com/in/azimsaiyed/',
  github: 'https://github.com/azimjs',
  collective: 'https://collective.com',
};

export const NAV = [
  { id: 'do', label: 'What I do', key: '01' },
  { id: 'work', label: 'Work', key: '02' },
  { id: 'impact', label: 'Impact', key: '++' },
  { id: 'lead', label: 'How I lead', key: '03' },
  { id: 'career', label: 'Career', key: '04' },
  { id: 'contact', label: 'Contact', key: '05' },
];

export const HERO_WORDS = ['grow.', 'convert.', 'scale.', 'ship.'];

export const FOCUS_MARQUEE = [
  'Experimentation',
  'Funnel optimization',
  'Signup flows',
  'Product analytics',
  'Team building',
  'Shipping fast',
  'A/B testing',
];

export const STACK_MARQUEE = [
  'React',
  'TypeScript',
  'Statsig',
  'Segment',
  'BigQuery',
  'Next.js',
  'Node',
  'WebSockets',
  'Design systems',
];

export type PillarIcon = 'flask' | 'funnel' | 'chart' | 'team';

export const PILLARS: { key: string; icon: PillarIcon; title: string; body: string; tags: string[] }[] = [
  {
    key: 'A',
    icon: 'flask',
    title: 'Experimentation at speed',
    body: 'A test culture where every idea ships behind a flag, gets measured, and earns its place.',
    tags: ['A/B tests', 'Feature flags', 'Guardrails'],
  },
  {
    key: 'B',
    icon: 'funnel',
    title: 'Funnels that convert',
    body: "Signup and onboarding flows rebuilt around one question: what's stopping the next click?",
    tags: ['Signup', 'Checkout', 'Onboarding'],
  },
  {
    key: 'C',
    icon: 'chart',
    title: 'Data you can trust',
    body: 'Clean events and shared dashboards so marketing, product, and eng argue about strategy, not numbers.',
    tags: ['Event design', 'Dashboards', 'Insights'],
  },
  {
    key: 'D',
    icon: 'team',
    title: 'Teams that ship',
    body: 'Hiring, coaching, and building a team that owns outcomes end to end, from hypothesis to rollout.',
    tags: ['Hiring', 'Mentorship', 'Rituals'],
  },
];

export interface CaseStudy {
  company: string;
  logo?: string;
  icon?: string;
  pill: string;
  title: string;
  body: string;
  tags: string[];
  metric: { value: string; count?: number; prefix?: string; suffix?: string; label: string };
  variant?: 'tint' | 'hot' | 'ink';
  wide?: boolean;
}

export const CASES: CaseStudy[] = [
  {
    company: 'Collective',
    logo: '/logos/collective-black.svg',
    pill: 'Growth',
    title: 'A funnel that keeps getting better',
    body: 'Rebuilt the signup and onboarding experience end to end. Every step is instrumented and every change ships as an experiment, so wins compound quarter over quarter.',
    tags: ['Funnel', 'Experimentation', 'React'],
    metric: { value: '~10%', count: 10, prefix: '~', suffix: '%', label: 'lift in funnel conversion' },
    variant: 'tint',
    wide: true,
  },
  {
    company: 'Collective',
    logo: '/logos/collective-white.svg',
    pill: 'Platform',
    title: 'An experimentation engine',
    body: 'Turned one-off tests into a repeatable system: flags, guardrail metrics, and a weekly cadence for reading results and killing losers fast.',
    tags: ['Statsig', 'Guardrails', 'Cadence'],
    metric: { value: '2x', count: 2, suffix: 'x', label: 'experiment velocity' },
    variant: 'hot',
  },
  {
    company: 'Blend Labs',
    icon: '/logos/blend.png',
    pill: 'Reliability',
    title: 'Debugging tools that end pager fatigue',
    body: 'Built custom debugging tooling for support and eng, so issues got diagnosed in minutes instead of escalated at 2am.',
    tags: ['Tooling', 'On-call', 'DX'],
    metric: { value: '-40%', count: 40, prefix: '-', suffix: '%', label: 'on-call incidents' },
  },
  {
    company: 'Blend Labs',
    icon: '/logos/blend.png',
    pill: 'Infra',
    title: 'Zoom SDK migration + real-time infra',
    body: 'Led the move to the Zoom Video SDK behind a vendor-agnostic layer, and replaced polling with WebSocket push for real-time financial apps.',
    tags: ['Zoom SDK', 'WebSockets', 'Architecture'],
    metric: { value: 'Real-time', label: 'push instead of polling, across the platform' },
    variant: 'ink',
  },
  {
    company: 'BBVA',
    icon: '/logos/bbva.png',
    pill: 'AI',
    title: 'BBVA Smart Assistant',
    body: "Front-end engineer on an AI banking assistant inside BBVA Spain's mobile apps, years before conversational AI was everywhere.",
    tags: ['Conversational UI', 'Banking'],
    metric: { value: '2017', label: 'AI in banking, early' },
  },
];

export interface ImpactTile {
  tag: string;
  count: number;
  prefix?: string;
  suffix: string;
  label: string;
  size?: 'lg' | 'wide';
  tint?: boolean;
}

export const IMPACT: ImpactTile[] = [
  { tag: 'Experience', count: 10, suffix: '+', label: 'years building in fintech and SaaS, from healthcare to banking to the back office for solopreneurs.', size: 'lg' },
  { tag: 'Collective', count: 10, prefix: '~', suffix: '%', label: 'funnel conversion lift' },
  { tag: 'People', count: 20, suffix: '+', label: 'engineers mentored across my career', tint: true },
  { tag: 'Collective', count: 2, suffix: 'x', label: 'experiment velocity', tint: true },
  { tag: 'Blend Labs', count: 40, prefix: '-', suffix: '%', label: 'on-call incidents' },
];

export const PRINCIPLES = [
  { title: 'Bias to ship', body: 'Small bets, shipped this week, beat perfect plans shipped next quarter. Flags make it safe.' },
  { title: 'Metrics over opinions', body: 'Every project starts with the number it should move and ends with whether it did.' },
  { title: 'Engineers own outcomes', body: 'My team sits with product, design, and marketing. They pick problems, not just tickets.' },
  { title: 'Grow the people', body: "Clear expectations, honest feedback, real stretch work. The team's growth is the job." },
];

export interface Role {
  company: string;
  logo: string;
  years: string;
  title: string;
  location?: string;
  now?: boolean;
  points: string[];
  steps?: { title: string; years: string; current?: boolean }[];
}

export const ROLES: Role[] = [
  {
    company: 'Collective',
    logo: '/logos/collective-icon.png',
    years: '2025 to now',
    title: 'Growth Engineering Manager',
    location: 'Dallas, TX',
    now: true,
    points: ['Leading the Growth engineering team', 'Experimentation and the signup funnel', 'Hiring and growing engineers'],
    steps: [
      { title: 'Growth Engineering Manager', years: '2026 to now', current: true },
      { title: 'Staff Software Engineer', years: '2025 to 2026' },
    ],
  },
  {
    company: 'Blend Labs',
    logo: '/logos/blend.png',
    years: '2022 to 2025',
    title: 'Senior Software Engineer',
    points: ['Led Zoom Video SDK migration', 'Cut on-call incidents 40% with custom debugging tools', 'Real-time WebSocket infrastructure'],
  },
  {
    company: 'Writer',
    logo: '/logos/writer.png',
    years: '2019 to 2021',
    title: 'Senior Front End Developer',
    points: ['Architected the core React app', 'Lerna monorepo and CI/CD'],
  },
  {
    company: 'BBVA',
    logo: '/logos/bbva.png',
    years: '2017 to 2019',
    title: 'Front End Developer',
    points: ["BBVA Smart Assistant, AI banking in BBVA Spain's apps"],
  },
  {
    company: 'Highmark Health',
    logo: '/logos/hmhs.png',
    years: '2016 to 2017',
    title: 'Application Developer',
    points: ['Where it started: shipping production software in healthcare'],
  },
];

export const EDUCATION = [
  { degree: 'M.S. Computer Science', school: 'University of North Carolina', logo: '/logos/unc.png' },
  { degree: 'B.E. Computer Engineering', school: 'Gujarat Technological University', logo: '/logos/gtu.png' },
];
