import { createBrowserClient } from '@supabase/ssr';

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !key) {
    throw new Error('Missing Supabase env: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }

  return { url, key };
}

/** Supabase client for use in Client Components / browser code. */
export function createClient() {
  const { url, key } = getSupabaseConfig();
  return createBrowserClient(url, key);
}
