import type { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NAV_ITEMS } from '@/data/content';

export const metadata: Metadata = {
  title: 'पृष्ठ नहीं मिला (404)',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-gutter py-section text-center">
      <p className="text-5xl font-extrabold text-jaipur-saffron">404</p>
      <h1 className="mt-2 text-2xl font-extrabold text-navy">यह पृष्ठ नहीं मिला</h1>
      <p className="mx-auto mt-2 max-w-prose text-ink-muted">
        जिस पृष्ठ की आप तलाश कर रहे हैं वह उपलब्ध नहीं है या स्थानांतरित हो गया है। कृपया मुख्य पृष्ठ पर लौटें।
      </p>

      <div className="mt-6 flex justify-center">
        <Button href="/">
          <Home className="h-4 w-4" aria-hidden="true" />
          मुख्य पृष्ठ
        </Button>
      </div>

      <nav aria-label="अनुभाग" className="mt-8">
        <ul className="flex flex-wrap justify-center gap-2">
          {NAV_ITEMS.map((n) => (
            <li key={n.id}>
              <Link
                href={`/${n.href}`}
                className="rounded-pill border border-navy/20 bg-white px-3 py-1.5 text-sm text-ink/80 hover:border-navy"
              >
                {n.labelHi}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
