import { WHY_US, WHY_US_HEADING_HI, TESTIMONIAL } from '@/data/content';
import { Icon } from '@/components/ui/Icon';

export function WhyChooseUs() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24 bg-navy py-section text-white">
      <div className="mx-auto max-w-content px-gutter">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <h2 id="about-title" className="text-center text-2xl font-extrabold text-white sm:text-3xl lg:text-left">
              {WHY_US_HEADING_HI}
            </h2>

            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {WHY_US.map((w) => (
                <li
                  key={w.labelHi}
                  className="flex flex-col items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.04] px-2 py-4 text-center"
                >
                  <Icon name={w.icon} className={`h-7 w-7 ${w.tint}`} strokeWidth={1.75} />
                  <span className="text-[0.72rem] font-medium leading-snug text-white/85">
                    {w.labelHi}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="rounded-2xl bg-white p-6 text-ink shadow-lift">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy text-lg font-bold text-white"
              >
                {TESTIMONIAL.nameHi.slice(0, 1)}
              </span>
              <blockquote className="text-sm leading-relaxed text-ink">
                &ldquo;{TESTIMONIAL.quoteHi}&rdquo;
                <footer className="mt-3 text-sm font-semibold not-italic text-navy">
                  – {TESTIMONIAL.nameHi}, <span className="font-normal text-ink-muted">{TESTIMONIAL.roleHi}</span>
                </footer>
              </blockquote>
            </div>
            <div aria-hidden="true" className="mt-4 flex justify-end gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-navy" />
              <span className="h-1.5 w-1.5 rounded-full bg-navy/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-navy/25" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
