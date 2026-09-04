import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { LeadForm } from '@/components/forms/LeadForm';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { PAGE_HEADERS, SITE } from '@/data/content';

const h = PAGE_HEADERS.demo;

export const metadata: Metadata = {
  title: 'Free Demo for Candidate Website',
  description: `${SITE.name} पर free demo request करें. नगर निकाय चुनाव के लिए आपके नाम और वार्ड पर sample candidate page, poster और reel 48 घंटे में WhatsApp पर मिलती है।`,
  keywords: [
    'free candidate website demo',
    'election campaign demo',
    'political poster demo',
    'candidate digital profile demo',
    'चुनाव वेबसाइट डेमो',
  ],
  alternates: { canonical: '/demo' },
  openGraph: {
    title: `${SITE.name} Free Demo`,
    description:
      'Get a free sample candidate page, poster and reel for your Rajasthan election campaign.',
    url: '/demo',
  },
};

const DEMO_INCLUDES = [
  'आपके नाम पर सैंपल कैंडिडेट पेज',
  'एक कस्टम पोस्टर (आपकी फोटो व चिन्ह के साथ)',
  'एक 15–20 सेकंड की रील',
  'पैकेज और समय-सीमा का साफ़ ब्यौरा',
];

export default function DemoPage() {
  return (
    <>
      <PageHeader {...h} />

      <section className="bg-white py-section">
        <div className="mx-auto grid max-w-content gap-10 px-gutter lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-xl font-extrabold text-navy">डेमो में आपको क्या मिलेगा</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              {DEMO_INCLUDES.map((d) => (
                <li key={d} className="flex gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-jaipur-green" aria-hidden="true" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-card border border-navy/12 bg-surface p-4 text-sm text-ink-muted">
              डेमो पूरी तरह मुफ़्त है और इसके लिए कोई अग्रिम भुगतान नहीं। पसंद आने पर ही आप पैकेज चुनते हैं।
            </div>
          </div>

          <LeadForm variant="demo" />
        </div>
      </section>

      <ProcessSteps tone="surface" />
    </>
  );
}
