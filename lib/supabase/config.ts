const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

export function getOptionalSupabaseConfig() {
  return { url, key };
}

export function getSupabaseConfig(): { url: string; key: string } {
  if (!url || !key) {
    throw new Error(
      'Missing Supabase config. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.',
    );
  }

  return { url, key };
}
