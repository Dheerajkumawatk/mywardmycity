import { cn } from '@/lib/utils';

/** Centered content column with responsive gutters. */
export function Container({
  className,
  children,
  as: Tag = 'div',
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn('mx-auto w-full max-w-content px-gutter', className)}>{children}</Tag>
  );
}
