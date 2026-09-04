import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SITE } from '@/data/content';
import { SocialIcon } from '@/components/ui/SocialIcon';

/** Direct-contact cards: call, WhatsApp, email, office, hours. */
export function ContactChannels() {
  return (
    <section aria-label="संपर्क माध्यम" className="bg-white py-section">
      <div className="mx-auto max-w-content px-gutter">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={SITE.phoneHref}
            className="flex items-start gap-4 rounded-card border border-navy/12 bg-white p-5 shadow-card transition-colors hover:border-navy/25"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface">
              <Phone className="h-5 w-5 text-jaipur-saffron" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-bold text-navy">कॉल करें</span>
              <span className="mt-0.5 block text-sm text-ink-muted">{SITE.phone}</span>
              <span className="mt-0.5 block text-xs text-ink-soft">{SITE.hours[0].dHi} · {SITE.hours[0].t}</span>
            </span>
          </a>

          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-card border border-navy/12 bg-white p-5 shadow-card transition-colors hover:border-navy/25"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface">
              <SocialIcon name="whatsapp" className="h-5 w-5 text-jaipur-green" />
            </span>
            <span>
              <span className="block text-sm font-bold text-navy">व्हाट्सएप</span>
              <span className="mt-0.5 block text-sm text-ink-muted">तुरंत जवाब — चैट शुरू करें</span>
              <span className="mt-0.5 block text-xs text-ink-soft">{SITE.phone}</span>
            </span>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="flex items-start gap-4 rounded-card border border-navy/12 bg-white p-5 shadow-card transition-colors hover:border-navy/25"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface">
              <Mail className="h-5 w-5 text-jaipur-saffron" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-bold text-navy">ईमेल</span>
              <span className="mt-0.5 block break-all text-sm text-ink-muted">{SITE.email}</span>
            </span>
          </a>

          <div className="flex items-start gap-4 rounded-card border border-navy/12 bg-white p-5 shadow-card">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface">
              <MapPin className="h-5 w-5 text-jaipur-saffron" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-bold text-navy">कार्यालय</span>
              <span className="mt-0.5 block text-sm text-ink-muted">
                {SITE.addressLine1}
                <br />
                {SITE.addressLine2}
              </span>
            </span>
          </div>

          <div className="flex items-start gap-4 rounded-card border border-navy/12 bg-white p-5 shadow-card sm:col-span-2 lg:col-span-2">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface">
              <Clock className="h-5 w-5 text-jaipur-saffron" aria-hidden="true" />
            </span>
            <span className="w-full">
              <span className="block text-sm font-bold text-navy">कार्य समय</span>
              <span className="mt-1 grid gap-1 text-sm text-ink-muted sm:grid-cols-2">
                {SITE.hours.map((h) => (
                  <span key={h.dHi}>
                    <span className="font-medium text-ink">{h.dHi}:</span> {h.t}
                  </span>
                ))}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
