import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Recon Technologies — On-farm hypochlorous acid generation for dairy farms';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#14532d',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ color: '#86efac', fontSize: 20, fontWeight: 600, letterSpacing: 4, marginBottom: 28, textTransform: 'uppercase' as const }}>
          On-Farm HOCl Generation · Since 2008
        </div>
        <div style={{ color: 'white', fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
          Recon Technologies
        </div>
        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 30, marginTop: 22, maxWidth: 740, lineHeight: 1.4 }}>
          Generate fresh hypochlorous acid on your dairy farm. Cut pre-dip costs by 65–85%.
        </div>
        <div style={{ marginTop: 52, display: 'flex', gap: 36 }}>
          {['Made in Michigan', '300,000+ Cows Protected', 'Serving 16+ States'].map((stat) => (
            <div key={stat} style={{ color: '#86efac', fontSize: 18, fontWeight: 600 }}>
              ✓ {stat}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
