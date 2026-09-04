import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'accent' | 'secondary' | 'ghost' | 'onDark';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-card px-5 py-2.5 text-base font-semibold ' +
  'transition-colors duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jaipur-saffron ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary: 'bg-navy text-white hover:bg-navy-deep',
  accent: 'bg-jaipur-saffron text-white hover:bg-[#d9571a]',
  secondary:
    'border border-navy/25 bg-white text-navy hover:border-navy hover:bg-surface',
  ghost: 'text-navy underline underline-offset-4 hover:text-jaipur-saffron',
  onDark: 'bg-white text-navy hover:bg-surface',
};

const sizes: Record<Size, string> = {
  sm: 'min-h-[40px] px-4 py-2 text-[0.95rem]',
  md: '',
  lg: 'px-6 py-3 text-lg',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button(props: ButtonProps | AnchorProps) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('href' in props && props.href !== undefined) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    if (external || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          {...(external || href.startsWith('http')
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          className={classes}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
