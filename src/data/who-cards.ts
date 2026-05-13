export type WhoCard = {
  tag: string;
  title: string;
  bodyHtml: string;
  items: string[];
};

export const whoCards: WhoCard[] = [
  {
    tag: 'For founders & consultants',
    title: 'You are the product.',
    bodyHtml:
      "When you're the one selling expertise, consulting, coaching, advisory, professional services, your personal brand isn't optional. People hire <em>you</em>, not your logo. We build the visibility that turns expertise into conversations.",
    items: [
      'Founders running professional services or consultancies',
      'Executive coaches, advisors, and independent operators',
      'HR, leadership and L&D specialists',
      'Anyone whose face needs to come before their company name',
    ],
  },
  {
    tag: 'For companies & teams',
    title: 'Your people <em>are</em> your reach.',
    bodyHtml:
      "Buy a subscription, pick the right team members, your top salespeople, your consultants, your subject-matter experts, and let them become the human face of the business. Trust doesn't scale through logos. It scales through people.",
    items: [
      'Sales teams who could be opening conversations on LinkedIn',
      'Consultants & account leads with expertise worth showing',
      'Founder + 2 or 3 leadership team activations',
      'Service businesses where trust is the sale',
    ],
  },
];
