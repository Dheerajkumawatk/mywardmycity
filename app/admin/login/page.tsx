'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2, Lock } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get('next') || '/admin/leads';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError('Incorrect email or password.');
      setBusy(false);
      return;
    }

    router.replace(next);
    router.refresh();
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col justify-center px-6 py-12">
      <div className="rounded-2xl border border-navy/10 bg-white p-7 shadow-card">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
          <Lock className="h-5 w-5" aria-hidden="true" />
        </span>
        <h1 className="mt-4 text-xl font-extrabold text-navy">Admin login</h1>
        <p className="mt-1 text-sm text-ink-muted">MyCityMyWard — leads &amp; queries</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-navy/20 bg-white px-3 py-2.5 text-sm outline-none focus:border-navy focus-visible:ring-2 focus-visible:ring-jaipur-saffron"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-navy">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-navy/20 bg-white px-3 py-2.5 text-sm outline-none focus:border-navy focus-visible:ring-2 focus-visible:ring-jaipur-saffron"
            />
          </div>

          {error ? (
            <p role="alert" className="text-sm font-medium text-pkg-red">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={busy}
            className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-jaipur-saffron px-5 text-sm font-bold text-white transition-colors hover:bg-[#d9571a] disabled:opacity-70"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
