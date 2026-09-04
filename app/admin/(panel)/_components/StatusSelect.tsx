'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { LeadStatus } from '@/lib/supabase/types';
import { cn } from '@/lib/utils';

const OPTIONS: { value: LeadStatus; label: string }[] = [
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'done', label: 'Done' },
];

const TONE: Record<LeadStatus, string> = {
  new: 'bg-jaipur-saffron/10 text-jaipur-saffron ring-jaipur-saffron/30',
  contacted: 'bg-pkg-blue/10 text-pkg-blue ring-pkg-blue/30',
  done: 'bg-jaipur-green/10 text-jaipur-green ring-jaipur-green/30',
};

export function StatusSelect({ id, value }: { id: string; value: LeadStatus }) {
  const router = useRouter();
  const [status, setStatus] = useState<LeadStatus>(value);
  const [busy, setBusy] = useState(false);

  async function update(nextStatus: LeadStatus) {
    const prev = status;
    setStatus(nextStatus);
    setBusy(true);
    const { error } = await createClient().from('leads').update({ status: nextStatus }).eq('id', id);
    setBusy(false);
    if (error) {
      setStatus(prev);
      return;
    }
    router.refresh();
  }

  return (
    <select
      value={status}
      disabled={busy}
      onChange={(e) => update(e.target.value as LeadStatus)}
      className={cn(
        'rounded-full px-2.5 py-1 text-xs font-semibold ring-1 outline-none disabled:opacity-60',
        TONE[status],
      )}
    >
      {OPTIONS.map((o) => (
        <option key={o.value} value={o.value} className="bg-white text-ink">
          {o.label}
        </option>
      ))}
    </select>
  );
}
