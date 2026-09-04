import { createBrowserClient } from '@supabase/ssr';
<<<<<<< HEAD
import { getSupabaseConfig } from './config';
=======

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !key) {
    throw new Error('Missing Supabase env: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }

  return { url, key };
}
>>>>>>> b2db0113b47479c26f7b254bd581580957996d68

/** Supabase client for use in Client Components / browser code. */
export function createClient() {
  const { url, key } = getSupabaseConfig();
<<<<<<< HEAD

=======
>>>>>>> b2db0113b47479c26f7b254bd581580957996d68
  return createBrowserClient(url, key);
}
