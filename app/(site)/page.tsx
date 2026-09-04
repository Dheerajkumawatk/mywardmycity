import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { PoliticalElectionSection } from '@/components/sections/PoliticalElectionSection';
import { Packages } from '@/components/sections/Packages';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { NewsChannelSection } from '@/components/sections/NewsChannelSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { SITE } from '@/data/content';

export const metadata: Metadata = {
  title: 'Rajasthan Digital Election Campaign Services',
  description:
    'Rajasthan Nagar Nikay Election 2026 के लिए candidate website, digital profile, poster design, reels, videos, social media campaign, WhatsApp campaign और digital war room services.',
  keywords: [
    'Rajasthan election campaign services',
    'candidate website Rajasthan',
    'Nagar Nikay Election 2026',
    'political digital marketing',
    'election campaign Rajasthan',
    'पार्षद प्रत्याशी वेबसाइट',
    'चुनाव प्रचार डिजिटल',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE.name} — Rajasthan Digital Election Campaign`,
    description:
      'Candidate website, posters, reels, social media and digital war room support for Rajasthan Nagar Nikay Election 2026.',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PoliticalElectionSection />
      <Packages />
      <ProcessSteps />
      <NewsChannelSection />
      <WhyChooseUs />
      <ClosingCta />
    </>
  );
}
