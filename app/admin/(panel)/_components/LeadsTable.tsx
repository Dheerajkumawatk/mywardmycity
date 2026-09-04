import type { Lead, LeadType } from '@/lib/supabase/types';
import { StatusSelect } from './StatusSelect';

function fmtDate(iso: string) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso));
}

export function LeadsTable({ leads, variant }: { leads: Lead[]; variant: LeadType }) {
  if (leads.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-navy/20 bg-white p-10 text-center text-sm text-ink-muted">
        No {variant === 'demo' ? 'leads' : 'queries'} match the current filters.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-navy/10 bg-white">
      <table className="w-full min-w-[980px] text-left text-sm">
        <thead className="border-b border-navy/10 bg-surface text-xs uppercase tracking-wide text-ink-muted">
          <tr>
            <th className="px-4 py-3 font-semibold">Date</th>
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Phone</th>
            <th className="px-4 py-3 font-semibold">City / Municipal body</th>
            <th className="px-4 py-3 font-semibold">Ward</th>
            <th className="px-4 py-3 font-semibold">
              {variant === 'demo' ? 'Interest / Plan' : 'Subject'}
            </th>
            <th className="px-4 py-3 font-semibold">Message</th>
            <th className="px-4 py-3 font-semibold">Source</th>
            <th className="px-4 py-3 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-navy/8">
          {leads.map((lead) => (
            <tr key={lead.id} className="align-top hover:bg-surface/60">
              <td className="whitespace-nowrap px-4 py-3 text-xs text-ink-muted">
                {fmtDate(lead.created_at)}
              </td>
              <td className="px-4 py-3 font-medium text-navy">{lead.name}</td>
              <td className="whitespace-nowrap px-4 py-3">
                <a href={`tel:${lead.phone}`} className="text-pkg-blue hover:underline">
                  {lead.phone}
                </a>
              </td>
              <td className="px-4 py-3">{lead.place || '—'}</td>
              <td className="px-4 py-3">{lead.ward || '—'}</td>
              <td className="px-4 py-3">{lead.interest || '—'}</td>
              <td className="max-w-[22rem] px-4 py-3 text-ink-muted">
                {lead.message ? lead.message : '—'}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-xs text-ink-soft">
                {lead.source || '—'}
              </td>
              <td className="px-4 py-3">
                <StatusSelect id={lead.id} value={lead.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
