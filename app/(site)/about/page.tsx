import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CtaBand } from '@/components/sections/CtaBand';
import { PAGE_HEADERS, ABOUT, SITE } from '@/data/content';

const h = PAGE_HEADERS.about;

export const metadata: Metadata = {
  title: 'About Bharat Pehchan',
  description: `${SITE.name} (${SITE.legalName}) राजस्थान के नगर निकाय चुनावों के लिए candidate websites, campaign creatives, social media, WhatsApp outreach और data-driven digital support देने वाली टीम है।`,
  keywords: [
    'Bharat Pehchan',
    'MyCityMyWard',
    'digital campaign team Rajasthan',
    'political campaign agency Rajasthan',
    'नगर निकाय चुनाव डिजिटल टीम',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About ${SITE.legalName}`,
    description:
      'A Rajasthan-focused digital campaign team for municipal election candidates and campaign managers.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader {...h} />

      <section className="bg-white py-section">
        <div className="mx-auto max-w-content px-gutter">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div className="max-w-prose">
              <p className="text-lg font-semibold text-navy">{ABOUT.leadHi}</p>
              {ABOUT.paraHi.map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted">
                  {p}
                </p>
              ))}
            </div>

            <aside className="rounded-card border border-jaipur-saffron/30 bg-[#FCEEE3] p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-jaipur-saffron">
                हमारा मक़सद
              </h2>
              <p className="mt-2 text-[0.95rem] font-medium leading-relaxed text-navy">
                {ABOUT.missionHi}
              </p>
            </aside>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.valuesHi.map((v) => (
              <li key={v.titleHi} className="rounded-card border border-navy/12 bg-white p-5 shadow-card">
                <h3 className="text-base font-bold text-navy">{v.titleHi}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{v.descHi}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StatsStrip />
      <WhyChooseUs />
      <CtaBand headingHi="अपने अभियान के लिए एक भरोसेमंद डिजिटल टीम चाहिए? बात करते हैं।" />
    </>
  );
}
