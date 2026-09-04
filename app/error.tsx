'use client';

import { useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-content px-gutter py-section text-center">
      <h1 className="text-2xl font-extrabold text-navy">कुछ तकनीकी समस्या आ गई</h1>
      <p className="mx-auto mt-2 max-w-prose text-ink-muted">
        क्षमा करें, यह पृष्ठ अभी लोड नहीं हो सका। कृपया पुनः प्रयास करें।
      </p>
      {error.digest ? (
        <p className="mt-1 text-xs text-ink-soft">संदर्भ: {error.digest}</p>
      ) : null}
      <div className="mt-6 flex justify-center">
        <Button onClick={reset}>
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          पुनः प्रयास करें
        </Button>
      </div>
    </div>
  );
}
