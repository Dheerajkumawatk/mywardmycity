import { Check } from 'lucide-react';
import { SERVICE_DETAILS } from '@/data/content';
import { Icon } from '@/components/ui/Icon';

/** Full service breakdown for the /services page. */
export function ServiceList() {
  return (
    <section aria-label="सेवाओं की सूची" className="bg-white py-section">
      <div className="mx-auto max-w-content px-gutter">
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICE_DETAILS.map((s) => (
            <article
              key={s.titleHi}
              className="flex flex-col rounded-card border border-navy/12 bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface">
                  <Icon name={s.icon} className={`h-6 w-6 ${s.tint}`} strokeWidth={1.75} />
                </span>
                <h2 className="text-lg font-extrabold text-navy">{s.titleHi}</h2>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.descHi}</p>

              <ul className="mt-4 grid gap-2 border-t border-navy/10 pt-4 text-[0.85rem] text-ink sm:grid-cols-2">
                {s.pointsHi.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-jaipur-green" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
