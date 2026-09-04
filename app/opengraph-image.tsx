import { ImageResponse } from 'next/og';
import { SITE, HERO } from '@/data/content';

export const alt = 'MyCityMyWard.com — डिजिटल चुनाव अभियान सेवा (भारत पहचान)';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #E1EEF9 0%, #FFFFFF 60%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 999, background: '#0C2461', display: 'flex' }} />
          <div style={{ fontSize: 34, fontWeight: 800, color: '#0C2461' }}>{SITE.name}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 30, color: '#5B6472', fontWeight: 600 }}>{HERO.eyebrowHi}</div>
          <div style={{ fontSize: 68, fontWeight: 800, color: '#F26522', lineHeight: 1.1 }}>
            {HERO.titleAccentHi}
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, color: '#0C2461', lineHeight: 1.1 }}>
            {HERO.titleRestHi}
          </div>
          <div style={{ fontSize: 28, color: '#1F2937' }}>{SITE.taglineHi}</div>
        </div>

        <div style={{ display: 'flex', height: 10, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ flex: 1, background: '#F26522' }} />
          <div style={{ flex: 1, background: '#0C2461' }} />
          <div style={{ flex: 1, background: '#1FA24A' }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
