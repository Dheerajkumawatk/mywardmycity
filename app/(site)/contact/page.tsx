import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { ContactChannels } from '@/components/sections/ContactChannels';
import { LeadForm } from '@/components/forms/LeadForm';
import { Faq } from '@/components/sections/Faq';
import { PAGE_HEADERS, SITE } from '@/data/content';

const h = PAGE_HEADERS.contact;

export const metadata: Metadata = {
  title: 'Contact for Election Campaign',
  description: `${SITE.name} से contact करें: call ${SITE.phone}, email ${SITE.email} या WhatsApp. Candidate website, posters, reels, social media और digital war room support के लिए आज बात करें।`,
  keywords: [
    'contact election campaign agency',
    'candidate website contact',
    'political campaign support Rajasthan',
    'digital war room contact',
    'चुनाव प्रचार एजेंसी संपर्क',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact ${SITE.name}`,
    description:
      'Talk to Bharat Pehchan for candidate websites, election creatives, social media and digital campaign support.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader {...h} />
      <ContactChannels />

      <section className="bg-surface py-section">
        <div className="mx-auto max-w-2xl px-gutter">
          <LeadForm variant="contact" />
        </div>
      </section>

      <Faq />
    </>
  );
}
