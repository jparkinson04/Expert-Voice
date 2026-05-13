export type CaseStudy = {
  href: string;
  category: string;
  name: string;
  body: string;
  stats: { value: string; label: string }[];
};

// Numbers are real client outcomes, verify with CONTENT.md before editing.
// Links point to '#' for v1; case-study pages are planned for v1.5.
export const caseStudies: CaseStudy[] = [
  {
    href: '#',
    category: 'Social value consulting',
    name: 'Christian Sait',
    body: 'Turned LinkedIn into a consistent inbound channel through opinion-led personal posts and a targeted ICP outreach engine.',
    stats: [
      { value: '+93', label: 'ICP connections' },
      { value: '36%', label: 'Acceptance rate' },
    ],
  },
  {
    href: '#',
    category: 'EdTech / education',
    name: 'AIR Education',
    body: "Founder-led authority content paired with SEO blogs that 10x'd Google traffic and produced a 4% blog-to-demo conversion rate.",
    stats: [
      { value: '10x', label: 'Google traffic' },
      { value: '741%', label: 'Newsletter growth' },
    ],
  },
  {
    href: '#',
    category: 'Hospitality tech',
    name: 'Autonary AI',
    body: 'Five months of LinkedIn growth that turned the founder into a recognised voice in hospitality tech, and built a pipeline of inbound conversations.',
    stats: [
      { value: '+664', label: 'ICP connections' },
      { value: '1,594', label: 'Engagements' },
    ],
  },
  {
    href: '#',
    category: 'Charity / youth',
    name: 'YESS Foundation',
    body: 'Multi-platform content programme covering LinkedIn personal, company page, TikTok and newsletter, focused on reaching young people through facilitators and schools.',
    stats: [
      { value: '4', label: 'Active channels' },
      { value: 'Monthly', label: 'Newsletter' },
    ],
  },
  {
    href: '#',
    category: 'EQ consultancy',
    name: 'Phil, Emotion at Work',
    body: 'Workplace emotional intelligence consultancy positioned through founder-led content that translates research into the language clients actually use.',
    stats: [
      { value: '3x/wk', label: 'Post cadence' },
      { value: 'B2B', label: 'L&D buyers' },
    ],
  },
  {
    href: '#',
    category: 'Creator / TikTok',
    name: 'LuminNote',
    body: 'TikTok-first creator growth: 169 followers gained, top videos hitting 50K, 40K and 14.5K views. The only revenue-driving channel for this client.',
    stats: [
      { value: '50K+', label: 'Top video' },
      { value: '12.5K', label: 'Total likes' },
    ],
  },
];
