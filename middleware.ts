import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

type CookieToSet = { name: string; value: string; options: CookieOptions };

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  return { url, key };
}

/**
 * Keeps the Supabase auth session fresh on every request and gates the admin
 * area: any unauthenticated hit on `/admin/*` (except the login page) is sent
 * to `/admin/login`.
 */
export async function middleware(request: NextRequest) {
  const { url, key } = getSupabaseConfig();

  if (!url || !key) {
    return NextResponse.next();
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet: CookieToSet[]) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options),
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isLogin = pathname === '/admin/login';

  if (pathname.startsWith('/admin') && !isLogin && !user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/admin/login';
    redirectUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  if (isLogin && user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/admin/leads';
    redirectUrl.search = '';
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: ['/admin/:path*'],
};
