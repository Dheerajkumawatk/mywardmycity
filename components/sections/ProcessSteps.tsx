import { PROCESS_STEPS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

/** "How it works" — four numbered steps. */
export function ProcessSteps({ tone = 'surface' }: { tone?: 'surface' | 'white' }) {
  return (
    <section
      aria-labelledby="process-title"
      className={tone === 'white' ? 'bg-white py-section' : 'bg-surface py-section'}
    >
      <div className="mx-auto max-w-content px-gutter">
        <SectionHeading id="process-title">यह कैसे काम करता है</SectionHeading>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.titleHi}
              className="relative rounded-card border border-navy/12 bg-white p-5 shadow-card"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 text-base font-bold text-navy">{step.titleHi}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{step.descHi}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
