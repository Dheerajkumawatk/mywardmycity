import { HERO } from '@/data/content';

/** The three hero proof-points, rendered as a full-width band. */
export function StatsStrip() {
  return (
    <section aria-label="आँकड़े" className="bg-navy py-10 text-white">
      <div className="mx-auto grid max-w-content gap-6 px-gutter sm:grid-cols-3">
        {HERO.stats.map((s) => (
          <div key={s.labelHi} className="text-center">
            <p className="text-2xl font-extrabold text-white sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-sm text-white/75">{s.labelHi}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
