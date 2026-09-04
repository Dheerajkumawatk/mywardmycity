import { cn } from '@/lib/utils';
import { Container } from './Container';

/**
 * A landmarked page section with a consistent heading block. Renders a real
 * <section> with an id (for in-page nav + skip target) and an <h2>.
 *
 * `centered` renders the Jaipur-market style heading — an eyebrow, a centred
 * title flanked by thin rules with a small diamond, and a centred intro.
 */
export function Section({
  id,
  eyebrowHi,
  titleHi,
  introHi,
  className,
  headingClassName,
  children,
  tone = 'default',
  centered = false,
}: {
  id: string;
  eyebrowHi?: string;
  titleHi: string;
  introHi?: string;
  className?: string;
  headingClassName?: string;
  children: React.ReactNode;
  tone?: 'default' | 'tinted' | 'maroon';
  centered?: boolean;
}) {
  const toneClass =
    tone === 'tinted'
      ? 'bg-white'
      : tone === 'maroon'
        ? 'bg-jaipur-maroon text-jaipur-white'
        : 'bg-jaipur-white';

  const onMaroon = tone === 'maroon';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('relative scroll-mt-32 py-section', toneClass, className)}
    >
      <Container>
        <div className={cn('mb-8', centered ? 'mx-auto max-w-2xl text-center' : 'max-w-prose')}>
          {eyebrowHi ? (
            <p
              className={cn(
                'text-sm font-semibold uppercase tracking-[0.18em]',
                onMaroon ? 'text-jaipur-saffron' : 'text-jaipur-green',
              )}
            >
              {eyebrowHi}
            </p>
          ) : null}

          <div
            className={cn(
              'flex items-center gap-3',
              centered ? 'justify-center' : '',
              eyebrowHi ? 'mt-2' : '',
            )}
          >
            {centered ? <Rule onMaroon={onMaroon} side="left" /> : null}
            <h2
              id={`${id}-title`}
              className={cn(
                'font-serif text-3xl font-semibold tracking-tight',
                onMaroon ? 'text-jaipur-white' : 'text-jaipur-maroon',
                headingClassName,
              )}
            >
              {titleHi}
            </h2>
            {centered ? <Rule onMaroon={onMaroon} side="right" /> : null}
          </div>

          {introHi ? (
            <p
              className={cn(
                'mt-3 text-lg',
                onMaroon ? 'text-jaipur-white/85' : 'text-jaipur-charcoal/80',
              )}
            >
              {introHi}
            </p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

function Rule({ onMaroon, side }: { onMaroon: boolean; side: 'left' | 'right' }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'hidden shrink-0 items-center gap-2 sm:flex',
        side === 'left' ? 'flex-row' : 'flex-row-reverse',
      )}
    >
      <span
        className={cn('h-px w-10', onMaroon ? 'bg-jaipur-saffron/55' : 'bg-jaipur-saffron/70')}
      />
      <span
        className={cn(
          'h-1.5 w-1.5 rotate-45 border',
          onMaroon ? 'border-jaipur-saffron/70' : 'border-jaipur-saffron',
        )}
      />
    </span>
  );
}
