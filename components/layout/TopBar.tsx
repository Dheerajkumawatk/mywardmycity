import { Phone } from 'lucide-react';
import { SITE } from '@/data/content';

/**
 * Thin utility bar above the header. Carries the positioning line and the
 * quick contact + social links.
 */
export function TopBar() {
  return (
    <div className="bg-navy-deep text-white/90">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-6 gap-y-1.5 px-gutter py-2 text-xs">
        <p className="hidden sm:block">{SITE.taglineHi}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-jaipur-saffron" aria-hidden="true" />
            <span>Helpline: {SITE.phone}</span>
          </a>
          {/* Email and social icons hidden until live links are ready. */}
        </div>
      </div>
    </div>
  );
}
