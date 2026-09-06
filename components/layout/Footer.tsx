import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { SITE, FOOTER } from '@/data/content';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/75">
      <div className="mx-auto max-w-content px-gutter py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr_1.1fr]">
          <div>
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{FOOTER.aboutHi}</p>
            {/* Social icons hidden until live links are ready. */}
          </div>

          <nav aria-label="त्वरित लिंक">
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">त्वरित लिंक</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER.quickLinks.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="hover:text-white">
                    {item.labelHi}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="हमारी सेवाएं">
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">हमारी सेवाएं</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER.servicesHi.map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-white">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">संपर्क करें</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-jaipur-saffron" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              {/* Email hidden until the public inbox is ready. */}
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-jaipur-saffron" aria-hidden="true" />
                <span>
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">कार्य समय</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {SITE.hours.map((h) => (
                <li key={h.dHi}>
                  <span className="block font-medium text-white/90">{h.dHi}</span>
                  <span className="block whitespace-nowrap">{h.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-gutter py-4 text-xs sm:flex-row">
          <p>{SITE.copyrightHi}</p>
          <div className="flex gap-4">
            {FOOTER.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
