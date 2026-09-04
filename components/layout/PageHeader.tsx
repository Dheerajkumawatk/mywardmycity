import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/**
 * Consistent page-top block for every non-home route: breadcrumb, eyebrow,
 * H1 and a short intro on a soft civic-blue band.
 */
export function PageHeader({
  crumbHi,
  eyebrowHi,
  titleHi,
  introHi,
}: {
  crumbHi: string;
  eyebrowHi: string;
  titleHi: string;
  introHi: string;
}) {
  return (
    <section className="border-b border-navy/10 bg-gradient-to-br from-sky-100 via-sky-50 to-white">
      <div className="mx-auto max-w-content px-gutter py-10 sm:py-14">
        <nav aria-label="ब्रेडक्रम्ब" className="flex items-center gap-1 text-sm text-ink-muted">
          <Link href="/" className="hover:text-navy">
            होम
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="font-medium text-navy">{crumbHi}</span>
        </nav>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-jaipur-saffron">
          {eyebrowHi}
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-extrabold leading-[1.2] text-navy sm:text-[2.5rem]">
          {titleHi}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">{introHi}</p>
      </div>
    </section>
  );
}
