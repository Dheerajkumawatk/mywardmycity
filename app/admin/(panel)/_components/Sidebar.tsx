'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inbox, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV = [
  { href: '/admin/leads', label: 'Website Leads', hint: 'Demo requests — all plans', icon: Inbox },
  { href: '/admin/queries', label: 'Contact Queries', hint: 'Messages from the contact form', icon: MessageSquare },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-navy/10 bg-navy px-4 py-6 text-white/80 md:flex">
      <div className="px-2">
        <p className="text-sm font-extrabold uppercase tracking-wide text-white">MyCityMyWard</p>
        <p className="text-xs text-white/55">Admin panel</p>
      </div>

      <nav className="mt-8 flex flex-col gap-1">
        {NAV.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors',
                active ? 'bg-white/15 text-white' : 'hover:bg-white/10 hover:text-white',
              )}
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                <span className="block font-semibold">{item.label}</span>
                <span className="block text-xs text-white/55">{item.hint}</span>
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
