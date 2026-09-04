/** Route-level loading UI. Calm skeleton, no spinner flash. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-content px-gutter py-section">
      <span className="sr-only" role="status">
        सामग्री लोड हो रही है…
      </span>
      <div aria-hidden="true" className="animate-pulse space-y-6">
        <div className="h-8 w-2/3 rounded bg-navy/10" />
        <div className="h-4 w-full rounded bg-navy/10" />
        <div className="h-4 w-5/6 rounded bg-navy/10" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-40 rounded-card bg-navy/10" />
          ))}
        </div>
      </div>
    </div>
  );
}
