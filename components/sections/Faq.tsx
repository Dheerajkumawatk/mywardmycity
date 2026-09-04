import { Plus } from 'lucide-react';
import { FAQ } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

/** Accessible FAQ built on native <details>/<summary> — no client JS needed. */
export function Faq({ tone = 'white' }: { tone?: 'white' | 'surface' }) {
  return (
    <section
      aria-labelledby="faq-title"
      className={tone === 'surface' ? 'bg-surface py-section' : 'bg-white py-section'}
    >
      <div className="mx-auto max-w-3xl px-gutter">
        <SectionHeading id="faq-title">अक्सर पूछे जाने वाले सवाल</SectionHeading>

        <div className="mt-8 divide-y divide-navy/10 rounded-card border border-navy/12 bg-white">
          {FAQ.map((item) => (
            <details key={item.qHi} className="group px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[0.95rem] font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {item.qHi}
                <Plus
                  className="h-4 w-4 shrink-0 text-jaipur-saffron transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-ink-muted">{item.aHi}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
