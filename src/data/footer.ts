export const footerTagline =
  "Personal-voice content for founders and the people who carry the company's trust on their shoulders.";

export type FooterColumn = {
  heading: string;
  links: { href: string; label: string; external?: boolean }[];
};

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Explore',
    links: [
      { href: '/#help', label: 'What we help with' },
      { href: '/#how', label: 'How it works' },
      { href: '/#cases', label: 'Case studies' },
      { href: '/#pricing', label: 'Pricing' },
    ],
  },
  {
    heading: 'Free',
    links: [
      { href: '/audit', label: 'Visibility audit' },
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Newsletter' },
    ],
  },
  {
    heading: 'Talk',
    links: [
      { href: '/#book', label: 'Book a call' },
      { href: 'mailto:jessie@expert-voice.co.uk', label: 'jessie@expert-voice.co.uk' },
      { href: 'https://linkedin.com/in/jessie-parkinson', label: 'LinkedIn', external: true },
    ],
  },
];

export const footerBottom = {
  copyright: '© 2026 Expert Voice Ltd · All rights reserved.',
  made: 'Made with deliberate care in Doncaster.',
};
