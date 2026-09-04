import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { PoliticalElectionSection } from '@/components/sections/PoliticalElectionSection';
import { Packages } from '@/components/sections/Packages';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { PAGE_HEADERS, SITE } from '@/data/content';

const h = PAGE_HEADERS.packages;

export const metadata: Metadata = {
  title: 'Digital Election Campaign Packages',
  description: `${SITE.name} के election campaign packages ₹2,999 से शुरू: Digital Identity, Start, Election Starter, Grow, Pro और Digital War Room. Candidate website, posters, reels और social media support included.`,
  keywords: [
    'election campaign packages',
    'candidate website price',
    'digital election campaign package',
    'political social media package',
    'Rajasthan election package',
    'चुनाव प्रचार पैकेज',
  ],
  alternates: { canonical: '/packages' },
  openGraph: {
    title: `${SITE.name} Packages — Election Campaign Plans`,
    description:
      'Affordable digital campaign packages for candidate websites, posters, reels, social media and war room support.',
    url: '/packages',
  },
};

export default function PackagesPage() {
  return (
    <>
      <PageHeader {...h} />
      <PoliticalElectionSection />
      <Packages showHeading={false} />
      <Faq />
      <CtaBand headingHi="कौन-सा पैकेज आपके लिए सही है? दो मिनट में बात करके तय कर लेते हैं।" />
    </>
  );
}
