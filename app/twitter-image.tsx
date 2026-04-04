import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Global GTM OS — Sell to America from Anywhere'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            background: 'linear-gradient(135deg, transparent 0%, rgba(99, 102, 241, 0.15) 100%)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px', textAlign: 'center' }}>
          <div style={{ fontSize: '72px', fontWeight: 900, color: 'white', marginBottom: '20px', letterSpacing: '-2px' }}>
            Global GTM OS
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, background: 'linear-gradient(90deg, #818cf8, #a78bfa)', backgroundClip: 'text', color: 'transparent', marginBottom: '40px' }}>
            Sell to America from Anywhere
          </div>
          <div style={{ display: 'flex', gap: '60px' }}>
            {[{ v: '12K+', l: 'Leads Generated' }, { v: '34%', l: 'Reply Rate' }, { v: '89', l: 'Countries' }].map((s) => (
              <div key={s.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: 900, color: '#818cf8' }}>{s.v}</div>
                <div style={{ fontSize: '18px', color: '#64748b' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #6366f1, #7c3aed)' }} />
      </div>
    ),
    { ...size }
  )
}
