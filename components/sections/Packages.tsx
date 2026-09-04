import Link from 'next/link';
import { Check, Star } from 'lucide-react';
import { PACKAGES, PACKAGES_NOTE_HI, type PackageColor } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const STYLE: Record<PackageColor, { text: string; btn: string; check: string }> = {
  green: { text: 'text-pkg-green', btn: 'bg-pkg-green hover:bg-[#188a3f]', check: 'text-pkg-green' },
  blue: { text: 'text-pkg-blue', btn: 'bg-pkg-blue hover:bg-[#1a53a8]', check: 'text-pkg-blue' },
  purple: { text: 'text-pkg-purple', btn: 'bg-pkg-purple hover:bg-[#67329c]', check: 'text-pkg-purple' },
  orange: { text: 'text-pkg-orange', btn: 'bg-pkg-orange hover:bg-[#d9571a]', check: 'text-pkg-orange' },
  navy: { text: 'text-pkg-navy', btn: 'bg-pkg-navy hover:bg-navy-deep', check: 'text-pkg-navy' },
  red: { text: 'text-pkg-red', btn: 'bg-pkg-red hover:bg-[#c22f24]', check: 'text-pkg-red' },
};

/**
 * Pricing grid. Rendered as a teaser section on the home page and as the main
 * body of `/packages`. Set `showHeading={false}` when the page already carries
 * its own <h1> (e.g. behind a <PageHeader>).
 */
export function Packages({
  showHeading = true,
  className,
}: {
  showHeading?: boolean;
  className?: string;
}) {
  return (
    <section
      id="packages"
      aria-labelledby={showHeading ? 'packages-title' : undefined}
      aria-label={showHeading ? undefined : 'पैकेज'}
      className={cn('scroll-mt-24 bg-surface py-section', className)}
    >
      <div className="mx-auto max-w-content px-gutter">
        {showHeading ? (
          <SectionHeading id="packages-title">
            हमारे पैकेज{' '}
            <span className="text-lg font-semibold text-navy/60">
              (अपने बजट और ज़रूरत के अनुसार चुनें)
            </span>
          </SectionHeading>
        ) : null}

        <div
          className={cn(
            'grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
            showHeading ? 'mt-12' : 'mt-2',
          )}
        >
          {PACKAGES.map((p) => {
            const s = STYLE[p.color];
            const href = p.id === 'war-room' ? '/contact' : `/demo?plan=${p.id}`;
            return (
              <div
                key={p.id}
                className={cn(
                  'flex h-full flex-col overflow-hidden rounded-card bg-white',
                  p.popular
                    ? 'border-2 border-pkg-orange shadow-lift xl:-translate-y-4'
                    : 'border border-navy/12 shadow-card',
                )}
              >
                {p.popular && p.badgeHi ? (
                  <div className="bg-pkg-orange py-1.5 text-center text-xs font-bold uppercase tracking-wide text-white">
                    {p.badgeHi}
                  </div>
                ) : null}

                <div className={cn('flex flex-1 flex-col p-5', !p.popular && 'pt-6')}>
                  <div className="flex min-h-[3.25rem] flex-col justify-center text-center">
                    <h3 className={cn('text-sm font-extrabold uppercase leading-tight tracking-wide', s.text)}>
                      {p.nameEn}
                    </h3>
                  </div>
                  <p className={cn('text-center text-[1.7rem] font-extrabold leading-none', s.text)}>
                    {p.priceHi}
                  </p>

                  <ul className="mt-4 flex-1 space-y-2.5 border-t border-navy/10 pt-4 text-[0.82rem] text-ink">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', s.check)} aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={href}
                    className={cn(
                      'mt-5 inline-flex min-h-[40px] items-center justify-center rounded-lg px-4 text-sm font-bold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jaipur-saffron focus-visible:ring-offset-2',
                      s.btn,
                    )}
                  >
                    {p.ctaHi}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-ink-muted">
          <Star className="h-4 w-4 fill-jaipur-saffron text-jaipur-saffron" aria-hidden="true" />
          {PACKAGES_NOTE_HI}
        </p>
      </div>
    </section>
  );
}
