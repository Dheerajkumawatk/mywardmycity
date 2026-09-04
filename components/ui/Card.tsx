import { cn } from '@/lib/utils';

/** Clean contemporary card with a thin decorative top border. */
export function Card({
  className,
  children,
  as: Tag = 'div',
  accent = true,
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  accent?: boolean;
}) {
  return (
    <Tag
      className={cn(
        'relative rounded-card border border-jaipur-maroon/12 bg-white p-5 shadow-card',
        accent &&
          'before:absolute before:inset-x-0 before:top-0 before:h-1 before:rounded-t-card before:bg-gradient-to-r before:from-jaipur-pink before:via-jaipur-saffron before:to-jaipur-green before:content-[""]',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn('font-serif text-xl font-semibold text-jaipur-maroon', className)}>
      {children}
    </h3>
  );
}
