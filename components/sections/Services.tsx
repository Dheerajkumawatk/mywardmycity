import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/content';
import { Icon } from '@/components/ui/Icon';
import { SectionHeading } from '@/components/ui/SectionHeading';

/** Home-page services teaser — the 8 offerings as an icon grid, linking to /services. */
export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-24 bg-white py-section">
      <div className="mx-auto max-w-content px-gutter">
        <SectionHeading id="services-title">हमारी प्रमुख सेवाएं</SectionHeading>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {SERVICES.map((s) => (
            <li key={s.labelHi}>
              <Link
                href="/services"
                className="flex h-full flex-col items-center gap-3 rounded-xl border border-navy/12 bg-white px-3 py-5 text-center shadow-[0_1px_2px_rgba(12,36,97,0.05)] transition-colors hover:border-navy/25 hover:bg-surface"
              >
                <Icon name={s.icon} className={`h-8 w-8 ${s.tint}`} strokeWidth={1.75} />
                <span className="text-[0.8rem] font-medium leading-snug text-ink">{s.labelHi}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-navy underline-offset-4 hover:text-jaipur-saffron hover:underline"
          >
            हर सेवा विस्तार से देखें
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
