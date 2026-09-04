import type { MetadataRoute } from 'next';
import { SITE } from '@/data/content';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — डिजिटल चुनाव अभियान सेवा`,
    short_name: SITE.brandShort,
    description:
      'राजस्थान के नगर निकाय चुनाव 2026 के लिए कैंडिडेट वेबसाइट, पोस्टर, वीडियो, सोशल मीडिया और डिजिटल वॉर रूम।',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#0C2461',
    lang: 'hi-IN',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
  };
}
