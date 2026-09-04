import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Tailwind-aware className combiner. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Format an ISO date as a Hindi (Devanagari-numeral) long date. */
export function formatDateHi(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat('hi-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

/** Current year as a Devanagari-friendly string via Intl. */
export function currentYear(): number {
  return new Date().getFullYear();
}

/** Guards a value that must be a non-empty string. */
export function hasText(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}
