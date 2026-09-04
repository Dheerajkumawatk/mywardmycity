import { Phone, Mail } from 'lucide-react';
import { SITE, SOCIAL } from '@/data/content';
import { SocialIcon } from '@/components/ui/SocialIcon';

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
          <span aria-hidden="true" className="text-white/25">|</span>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 text-jaipur-saffron" aria-hidden="true" />
            <span>{SITE.email}</span>
          </a>

          <ul className="flex items-center gap-2.5 pl-1">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
