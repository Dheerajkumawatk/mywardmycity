/** @type {import('next').NextConfig} */

// Security headers applied to every route. The Content-Security-Policy is
// intentionally strict; adjust the map/frame/connect directives only when a new
// trusted third party is actually integrated.
const isDev = process.env.NODE_ENV !== 'production';

const ContentSecurityPolicy = [
  "default-src 'self'",
  // Next.js injects small inline bootstrap scripts; 'unsafe-inline' is required
  // for the framework runtime. No third-party script hosts are allowed.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://maps.googleapis.com https://maps.gstatic.com https://*.googleusercontent.com",
  // Supabase REST + Auth + Realtime for lead capture and the admin panel.
  "connect-src 'self' https://onpldonrikwkbkjvrdly.supabase.co wss://onpldonrikwkbkjvrdly.supabase.co",
  // Google Maps embed iframe only. Remove if the consent-aware map is disabled.
  'frame-src https://www.google.com https://maps.google.com',
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self), browsing-topics=()',
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Only add hosts here for images that are licensed / permitted for reuse.
      // By default all campaign imagery is served from /public/images.
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
