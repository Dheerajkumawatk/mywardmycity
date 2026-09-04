import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CTA } from '@/data/content';
import { SocialIcon } from '@/components/ui/SocialIcon';

/**
 * Reusable closing call-to-action band. Used at the foot of most pages.
 * Defaults to the demo + talk pairing; pass props to tailor per page.
 */
export function CtaBand({
  headingHi = 'आज ही शुरुआत करें और अपने चुनाव अभियान को डिजिटल ताकत दें!',
  primaryHref = '/demo',
  primaryLabelHi = CTA.demoHi,
  secondaryHref = '/contact',
  secondaryLabelHi = CTA.talkHi,
}: {
  headingHi?: string;
  primaryHref?: string;
  primaryLabelHi?: string;
  secondaryHref?: string;
  secondaryLabelHi?: string;
}) {
  return (
    <section aria-labelledby="cta-band-title" className="bg-[#FCEEE3] py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-gutter text-center lg:flex-row lg:justify-between lg:text-left">
        <h2
          id="cta-band-title"
          className="text-xl font-extrabold leading-snug text-navy sm:text-2xl"
        >
          {headingHi}
        </h2>
        <div className="flex shrink-0 flex-wrap justify-center gap-4 sm:flex-nowrap">
          <Link
            href={primaryHref}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-pill bg-jaipur-saffron px-6 text-base font-bold text-white shadow-card transition-colors hover:bg-[#d9571a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jaipur-saffron focus-visible:ring-offset-2"
          >
            {primaryLabelHi}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-pill border-2 border-navy bg-white px-6 text-base font-bold text-navy transition-colors hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jaipur-saffron focus-visible:ring-offset-2"
          >
            {secondaryLabelHi}
            <SocialIcon name="whatsapp" className="h-4 w-4 text-jaipur-green" />
          </Link>
        </div>
      </div>
    </section>
  );
}
