import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { ServiceList } from '@/components/sections/ServiceList';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { CtaBand } from '@/components/sections/CtaBand';
import { PAGE_HEADERS, SITE } from '@/data/content';

const h = PAGE_HEADERS.services;

export const metadata: Metadata = {
  title: 'Election Campaign Services',
  description: `${SITE.name} पर candidate website, digital profile, poster-banner design, reels-video editing, social media management, WhatsApp campaign, प्रचार सामग्री और digital war room support एक ही जगह।`,
  keywords: [
    'candidate website services',
    'election poster design',
    'political reels video editing',
    'social media campaign for election',
    'WhatsApp election campaign',
    'digital war room Rajasthan',
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    title: `${SITE.name} Election Campaign Services`,
    description:
      'Website, posters, videos, reels, social media, WhatsApp campaign and digital war room services for candidates.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader {...h} />
      <ServiceList />
      <ProcessSteps />
      <CtaBand headingHi="किस सेवा से शुरुआत करें, तय नहीं? हमें बताएँ — हम सुझाव देंगे।" />
    </>
  );
}
