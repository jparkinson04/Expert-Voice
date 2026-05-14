export type CaseStudy = {
  href: string;
  category: string;
  name: string;
  body: string;
  stats: { value: string; label: string }[];
};

// Landing-page cards. Each links to a dedicated /case-studies/<slug> page.
// Company names only (no personal names). Social results only (no revenue).
export const caseStudies: CaseStudy[] = [
  {
    href: '/case-studies/air-education',
    category: 'EdTech · UK Schools',
    name: 'AIR Education',
    body: 'Founder-led content and SEO blogging that put AIR in front of the schools researching AI tools.',
    stats: [
      { value: '10×', label: 'Google traffic' },
      { value: '+741%', label: 'Newsletter readers' },
    ],
  },
  {
    href: '/case-studies/sonar-engagement',
    category: 'Social Value Consulting',
    name: 'Sonar Engagement',
    body: 'From sporadic posting to a consistent voice in the Social Value sector, with a growing pipeline of decision-maker connections.',
    stats: [
      { value: '+551', label: 'Followers in 90 days' },
      { value: '+227%', label: 'Post engagement' },
    ],
  },
  {
    href: '/case-studies/yess-foundation',
    category: 'Youth Charity · Multi-platform',
    name: 'YESS Foundation',
    body: 'LinkedIn, TikTok, and email working together to reach schools, facilitators, and the young people YESS exists to serve.',
    stats: [
      { value: '17.5%', label: 'LinkedIn engagement' },
      { value: '62%', label: 'Email open rate' },
    ],
  },
  {
    href: '/case-studies/luminnote',
    category: 'AI Platform · TikTok-led',
    name: 'LuminNote',
    body: 'Built a TikTok channel from zero, then scaled it to nearly a million views in two months through data-led content iteration.',
    stats: [
      { value: '819K', label: 'Views in 60 days' },
      { value: '+1,067%', label: 'Month-on-month growth' },
    ],
  },
];
