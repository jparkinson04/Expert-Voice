export type HelpCard = {
  num: string;
  iconSvg: string;
  title: string;
  body: string;
};

const ICON_MIC = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`;

const ICON_DOC = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>`;

const ICON_MAIL = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>`;

const ICON_GLOBE = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;

const ICON_TREND = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>`;

const ICON_TEAM = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;

export const helpCards: HelpCard[] = [
  {
    num: '01',
    iconSvg: ICON_MIC,
    title: 'Sound like you, not like everyone else',
    body: 'Personal-voice LinkedIn content extracted from your actual thinking. No AI filler, no recycled advice. The kind of posts your audience replies to because they recognise something real.',
  },
  {
    num: '02',
    iconSvg: ICON_DOC,
    title: 'Long-form that pulls its weight',
    body: 'Blogs and articles that show your thinking in full, so the right people Google you, find depth, and have a reason to reach out. SEO-aware, AI-search-friendly, written to be read.',
  },
  {
    num: '03',
    iconSvg: ICON_MAIL,
    title: 'Newsletters & email that stay close',
    body: "Monthly or fortnightly newsletters that keep you front of mind with the people who've already raised their hand. Built in your tone, repurposed from your existing content so nothing's wasted.",
  },
  {
    num: '04',
    iconSvg: ICON_GLOBE,
    title: 'The right people in your network',
    body: 'Targeted connection campaigns inside your actual Ideal Client Profile, so the content lands in front of decision-makers, not the same 500 contacts on rotation.',
  },
  {
    num: '05',
    iconSvg: ICON_TREND,
    title: 'Numbers that mean something',
    body: "Monthly Momentum Reviews showing what worked, what didn't, and what's next. Not vanity dashboards, clear reads on the content, the network, and the conversations it's creating.",
  },
  {
    num: '06',
    iconSvg: ICON_TEAM,
    title: 'Activate the right team members',
    body: 'For companies: pick the salespeople, consultants, or partners who should be the human voice of the business. We turn them into trust builders, without adding to their workload.',
  },
];
