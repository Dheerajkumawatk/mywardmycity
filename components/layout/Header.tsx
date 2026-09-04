'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, CTA } from '@/data/content';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';

/** Is `href` the active route for the current `pathname`? */
function isActive(href: string, pathname: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Sticky, accessible site header with a focus-trapped mobile menu. */
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? '/';
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll lock + Esc + basic focus trap for the mobile panel.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex max-w-content items-center gap-3 px-gutter py-3">
        <Link
          href="/"
          onClick={close}
          aria-label="होम"
          className="shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jaipur-saffron"
        >
          <Logo />
        </Link>

        <nav aria-label="मुख्य नेविगेशन" className="ml-auto hidden xl:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href, pathname);
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'inline-flex min-h-[40px] items-center rounded-pill px-3.5 text-[0.95rem] font-medium text-ink/80 hover:bg-surface hover:text-navy',
                      active && 'bg-surface text-navy',
                    )}
                  >
                    {item.labelHi}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={cn('items-center gap-2 xl:flex', 'ml-auto hidden xl:ml-4')}>
          <Button href="/demo" size="sm" variant="primary">
            {CTA.demoHi}
          </Button>
          <Button href="/contact" size="sm" variant="accent">
            {CTA.talkHi}
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-card border border-navy/20 text-navy xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">{open ? 'मेन्यू बंद करें' : 'मेन्यू खोलें'}</span>
        </button>
      </div>

      {open ? (
        <div className="xl:hidden">
          <div className="fixed inset-0 z-30 bg-navy-deep/40" onClick={close} aria-hidden="true" />
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="मोबाइल नेविगेशन"
            className="absolute inset-x-0 top-full z-40 max-h-[80dvh] overflow-y-auto border-b border-navy/15 bg-white p-4 shadow-card"
            style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href, pathname);
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex min-h-[48px] items-center rounded-card px-4 text-base font-medium text-ink hover:bg-surface',
                        active && 'bg-surface text-navy',
                      )}
                    >
                      {item.labelHi}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <Button href="/demo" onClick={close} variant="primary" className="w-full">
                {CTA.demoHi}
              </Button>
              <Button href="/contact" onClick={close} variant="accent" className="w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {CTA.talkHi}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
