export type PriceTier = {
  label: string;
  title: string;
  tagline: string;
  currency: string;
  amount: string;
  period: string;
  features: string[];
  cta: { href: string; label: string };
  featured?: boolean;
  badge?: string;
};

// Current numbers; new pricing structure incoming, swap when supplied.
export const priceTiers: PriceTier[] = [
  {
    label: 'Add-on',
    title: 'Company Page',
    tagline: 'Professional brand-led content for your business page.',
    currency: '£',
    amount: '299',
    period: '/ month',
    features: [
      'Professional content',
      'Branded visuals',
      'Scheduling & publishing',
    ],
    cta: { href: '#book', label: 'Add this on' },
  },
  {
    label: 'The flagship',
    title: 'Founder Visibility System',
    tagline:
      'Everything you need to build trust at scale through your personal voice.',
    currency: '£',
    amount: '459',
    period: '/ month',
    features: [
      'LinkedIn personal branding',
      'Blog & website content',
      'Content scheduling & publishing',
      'Targeted network growth',
      'Monthly strategy & review',
      'Access to Expert Voice Dashboard',
    ],
    cta: { href: '#book', label: 'Book a call to start' },
    featured: true,
    badge: 'Core offer',
  },
  {
    label: 'Add-on',
    title: 'Outreach System',
    tagline:
      'Layered messaging sequences and follow-ups that open real conversations.',
    currency: '£',
    amount: '199',
    period: '/ month',
    features: [
      'Outreach messaging',
      'Sequenced follow-ups',
      'Message status tracker',
    ],
    cta: { href: '#book', label: 'Add this on' },
  },
];

export const pricingNote =
  'Pricing shown is current. New pricing structure rolling out, final figures to be confirmed.';
