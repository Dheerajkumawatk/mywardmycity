import { cn } from '@/lib/utils';

/** Centred heading flanked by a short rule + diamond — used across sections. */
export function SectionHeading({
  id,
  children,
  className,
  onDark = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)}>
      <Rule side="left" onDark={onDark} />
      <h2
        id={id}
        className={cn(
          'text-center text-2xl font-extrabold tracking-tight sm:text-[1.75rem]',
          onDark ? 'text-white' : 'text-navy',
        )}
      >
        {children}
      </h2>
      <Rule side="right" onDark={onDark} />
    </div>
  );
}

function Rule({ side, onDark }: { side: 'left' | 'right'; onDark: boolean }) {
  const c = onDark ? 'bg-white/45' : 'bg-navy/35';
  const d = onDark ? 'border-white/60' : 'border-jaipur-saffron';
  return (
    <span
      aria-hidden="true"
      className={cn(
        'hidden shrink-0 items-center gap-1.5 sm:flex',
        side === 'left' ? 'flex-row' : 'flex-row-reverse',
      )}
    >
      <span className={cn('h-0.5 w-3 rounded', c)} />
      <span className={cn('h-0.5 w-3 rounded', c)} />
      <span className={cn('h-1.5 w-1.5 rotate-45 border', d)} />
    </span>
  );
}
