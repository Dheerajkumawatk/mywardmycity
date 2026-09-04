import { createClient } from '@/lib/supabase/server';
import type { Lead } from '@/lib/supabase/types';
import { LeadsExplorer } from '../_components/LeadsExplorer';

export const dynamic = 'force-dynamic';

export default async function LeadsPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .eq('type', 'demo')
    .order('created_at', { ascending: false });

  const leads = (data ?? []) as Lead[];

  return (
    <section aria-labelledby="leads-title">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 id="leads-title" className="text-xl font-extrabold text-navy">
            Website Leads
          </h1>
          <p className="mt-1 text-sm text-ink-muted">
            Every plan&apos;s demo request — from the demo page form.
          </p>
        </div>
        <span className="rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">
          {leads.length} total
        </span>
      </div>

      {error ? (
        <p className="mt-6 rounded-lg border border-pkg-red/30 bg-pkg-red/[0.06] px-4 py-3 text-sm font-medium text-pkg-red">
          Could not load data: {error.message}. Make sure the <code>leads</code> table and its RLS
          policies exist in Supabase (run <code>supabase/schema.sql</code>).
        </p>
      ) : (
        <LeadsExplorer leads={leads} variant="demo" />
      )}
    </section>
  );
}
