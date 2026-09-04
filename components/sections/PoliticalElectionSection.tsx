import Image from 'next/image';
import { ArrowRight, CheckCircle2, Megaphone, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const POINTS = [
  'उम्मीदवार की प्रोफेशनल वेबसाइट और डिजिटल प्रोफाइल',
  'पोस्टर, बैनर, रील्स और सोशल मीडिया कंटेंट कैलेंडर',
  'वार्ड के मुद्दों, उपलब्धियों और संकल्प-पत्र की साफ प्रस्तुति',
  'व्हाट्सऐप, फेसबुक, इंस्टाग्राम और यूट्यूब के लिए तैयार सामग्री',
];

export function PoliticalElectionSection() {
  return (
    <section
      id="political-election"
      aria-labelledby="political-election-title"
      className="bg-white py-section"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <figure className="relative h-[24rem] overflow-hidden rounded-card border border-navy/10 bg-sky-50 shadow-card sm:h-[32rem] lg:h-[38rem]">
            <Image
              src="/images/political-election-candidate.jpg"
              alt="चुनावी सभा में भाषण देते हुए उम्मीदवार"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
              priority={false}
            />
          </figure>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-jaipur-green">
              Political Election Campaign
            </p>
            <h2
              id="political-election-title"
              className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
            >
              चुनाव में आपकी पहचान, संदेश और पहुंच को डिजिटल ताकत दें
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              नगर निकाय चुनाव में मतदाता उम्मीदवार की सोच, काम और संकल्प को जल्दी समझना चाहते हैं।
              MyCityMyWard आपकी टीम के लिए वेबसाइट, पोस्टर, वीडियो, सोशल मीडिया और डिजिटल वार
              रूम को एक ही जगह व्यवस्थित करता है, ताकि हर वार्ड तक आपका संदेश साफ और भरोसेमंद
              तरीके से पहुंचे।
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {POINTS.map((point) => (
                <li key={point} className="flex gap-3 rounded-lg border border-navy/10 bg-surface p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-jaipur-green" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-relaxed text-ink">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-lg bg-[#FFF4EC] p-4">
                <Megaphone className="mt-1 h-6 w-6 shrink-0 text-jaipur-saffron" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-extrabold text-navy">तेज प्रचार सामग्री</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    रोज की पोस्ट, घोषणा, जनसंपर्क और कार्यक्रमों के लिए तैयार डिजाइन।
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-lg bg-[#EEF7F1] p-4">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-jaipur-green" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-extrabold text-navy">जिम्मेदार कैंपेन</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    साफ भाषा, सही डिस्क्लेमर और तय समय-सीमा के साथ अभियान सपोर्ट।
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/demo" variant="accent" size="lg" className="rounded-pill">
                फ्री डेमो बनवाएं
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="rounded-pill">
                कैंपेन पर बात करें
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
