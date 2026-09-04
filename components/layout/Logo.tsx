import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Brand logo — the supplied MWMC artwork (emblem + wordmark), served from
 * /public/images. No extra text is rendered alongside it.
 *
 *  - `onDark` → wraps the mark in a white plate so the navy wordmark stays
 *    legible on dark surfaces (footer).
 */
export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  const img = (
    <Image
      src="/images/logo-mark.png"
      alt="MyWardMyCity.com"
      width={1265}
      height={426}
      priority
      className={cn('h-10 w-auto sm:h-11', className)}
    />
  );

  if (onDark) {
    return (
      <span className="inline-flex rounded-lg bg-white px-3 py-2">{img}</span>
    );
  }

  return img;
}
