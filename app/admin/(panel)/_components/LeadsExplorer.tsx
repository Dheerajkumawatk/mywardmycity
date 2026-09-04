'use client';

import { useMemo, useState } from 'react';
import { Download, Search } from 'lucide-react';
import type { Lead, LeadStatus, LeadType } from '@/lib/supabase/types';
import { cn } from '@/lib/utils';
import { LeadsTable } from './LeadsTable';

const STATUS_TABS: { value: 'all' | LeadStatus; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'done', label: 'Done' },
];

function toCsv(rows: Lead[]) {
  const cols: (keyof Lead)[] = [
    'created_at',
    'type',
    'name',
    'phone',
    'place',
    'ward',
    'interest',
    'message',
    'source',
    'status',
  ];
  const esc = (v: unknown) => {
    const s = v == null ? '' : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [cols.join(','), ...rows.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n');
}

export function LeadsExplorer({ leads, variant }: { leads: Lead[]; variant: LeadType }) {
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<'all' | LeadStatus>('all');
  const [interest, setInterest] = useState('all');

  const interestOptions = useMemo(
    () => Array.from(new Set(leads.map((l) => l.interest).filter((v): v is string => !!v))).sort(),
    [leads],
  );

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return leads.filter((l) => {
      if (status !== 'all' && l.status !== status) return false;
      if (interest !== 'all' && l.interest !== interest) return false;
      if (!needle) return true;
      return [l.name, l.phone, l.place, l.ward, l.interest, l.message, l.source]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(needle));
    });
  }, [leads, q, status, interest]);

  const counts = useMemo(() => {
    const c = { all: leads.length, new: 0, contacted: 0, done: 0 } as Record<string, number>;
    for (const l of leads) c[l.status] = (c[l.status] ?? 0) + 1;
    return c;
  }, [leads]);

  function downloadCsv() {
    const blob = new Blob([toCsv(filtered)], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${variant === 'demo' ? 'leads' : 'queries'}-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative min-w-[240px] flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
            aria-hidden="true"
          />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, phone, city, message…"
            className="w-full rounded-lg border border-navy/20 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-navy focus-visible:ring-2 focus-visible:ring-jaipur-saffron"
          />
        </div>

        {interestOptions.length > 0 ? (
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="rounded-lg border border-navy/20 bg-white px-3 py-2 text-sm outline-none focus:border-navy"
          >
            <option value="all">All plans / interests</option>
            {interestOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        ) : null}

        <button
          type="button"
          onClick={downloadCsv}
          className="inline-flex items-center gap-1.5 rounded-lg border border-navy/20 px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-surface"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Export CSV
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {STATUS_TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setStatus(tab.value)}
            className={cn(
              'rounded-full px-3 py-1 text-xs font-semibold ring-1 transition-colors',
              status === tab.value
                ? 'bg-navy text-white ring-navy'
                : 'bg-white text-ink-muted ring-navy/15 hover:bg-surface',
            )}
          >
            {tab.label}
            <span className="ml-1.5 opacity-70">{counts[tab.value] ?? 0}</span>
          </button>
        ))}
        <span className="ml-auto text-xs text-ink-muted">
          Showing {filtered.length} of {leads.length}
        </span>
      </div>

      <LeadsTable leads={filtered} variant={variant} />
    </div>
  );
}
