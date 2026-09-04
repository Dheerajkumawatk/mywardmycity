import type { Metadata, Viewport } from 'next';
import './globals.css';

import { SITE } from '@/data/content';

const siteUrl = SITE.url?.trim() || 'http://localhost:3000';
const title = `${SITE.name} — Digital Election Campaign Services | ${SITE.legalName}`;
const description =
  'MyCityMyWard.com by Bharat Pehchan provides candidate websites, digital profiles, posters, reels, videos, social media management, WhatsApp campaigns and digital war room support for Rajasthan Nagar Nikay Election 2026.';
const ogImageAlt = `${SITE.name} digital election campaign services`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${SITE.name}` },
  description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: 'Digital Election Campaign Services',
  keywords: [
    'Rajasthan Nagar Nikay Election 2026',
    'digital election campaign',
    'candidate website',
    'political campaign website',
    'election social media management',
    'election poster design',
    'political reels video',
    'digital war room',
    'WhatsApp campaign',
    'नगर निकाय चुनाव 2026',
    'कैंडिडेट वेबसाइट',
    'चुनाव प्रचार डिजिटल',
    'पार्षद प्रत्याशी वेबसाइट',
    'सोशल मीडिया कैंपेन',
    'डिजिटल वॉर रूम',
    'भारत पहचान',
    'MyCityMyWard',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: siteUrl,
    siteName: SITE.name,
    title,
    description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: ogImageAlt }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0C2461',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
