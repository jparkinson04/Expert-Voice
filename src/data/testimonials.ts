export type Testimonial = {
  paragraphs: string[];
  name: string;
  role: string;
  initials: string;
  logo?: string;
  featured?: boolean;
};

// Signed-off wording from the named clients. Update only with explicit
// approval from the person quoted.
export const testimonials: Testimonial[] = [
  {
    paragraphs: [
      "I love how easy Expert Voice makes it. I just send a quick voice note each week and somehow it turns into blog posts and social content that sound exactly like me. It’s saved me hours and made our messaging way more consistent. I honestly don’t know how we managed without it.",
    ],
    name: 'Dave Surfleet',
    role: 'AIR Education',
    initials: 'DS',
    logo: '/logos/air-education.jpeg',
    featured: true,
  },
  {
    paragraphs: [
      "I originally decided to work with Jessie because of a recommendation from a past client, but what really sold me was our initial call. I felt truly understood from the start. Jessie being involved every step of the way took the pressure off me to think about content constantly, allowing me to focus on other areas of my business while still seeing exactly how the process worked. I now see how much of a difference good content makes. I’d recommend Jessie to anyone looking to grow their personal brand or expand their business.",
    ],
    name: 'Tom Barnett',
    role: 'Cyber Pip',
    initials: 'TB',
    logo: '/logos/cyber-pip.png',
  },
  {
    paragraphs: [
      "Working with Jessie has been seamless. She listens, adapts, and makes the content feel genuinely tailored. I just answer one question a week and she handles the rest, saving me so much time and keeping my brand consistent. Couldn’t recommend Expert Voice enough!",
    ],
    name: 'Dylan Wright',
    role: 'Autonary AI',
    initials: 'DW',
    logo: '/logos/autonary-ai.avif',
  },
  {
    paragraphs: [
      "Well prepared and thought through, I’m excited with new ideas and already seen massive growth across our social channels. Our brand is in good hands.",
    ],
    name: 'Denise Pitot',
    role: 'YESS Foundation-UK',
    initials: 'DP',
    logo: '/logos/yess-foundation.jpg',
  },
];
