export type TrustClient = {
  name: string;
  logo: string;
};

export const trustLabel = 'Trusted by consultants, founders & operators';

// Clients with supplied logos. Christian Sait remains in the case-studies
// section until a logo is provided.
export const trustClients: TrustClient[] = [
  { name: 'AIR Education', logo: '/logos/air-education.jpeg' },
  { name: 'Autonary AI', logo: '/logos/autonary-ai.avif' },
  { name: 'Cyber Pip', logo: '/logos/cyber-pip.png' },
  { name: 'Emotion at Work', logo: '/logos/emotion-at-work.png' },
  { name: 'LuminNote', logo: '/logos/luminnote.ico' },
  { name: 'Sonar Engagement', logo: '/logos/sonar-engagement.webp' },
  { name: 'YESS Foundation', logo: '/logos/yess-foundation.jpg' },
];
