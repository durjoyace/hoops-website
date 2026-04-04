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
          background: 'linear-gradient(135deg, #4f46e5, #6366f1, #7c3aed)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.25)',
            borderRadius: '32px',
            padding: '60px 80px',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 900, color: 'white', textAlign: 'center', lineHeight: 1.1, marginBottom: '20px' }}>
            Global GTM OS
          </div>
          <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.9)', textAlign: 'center', fontWeight: 500, marginBottom: '40px' }}>
            Sell to America from Anywhere
          </div>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {['12K+ Leads', '34% Reply Rate', '89 Countries'].map((stat) => (
              <div
                key={stat}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  fontSize: 18,
                  color: 'white',
                  fontWeight: 600,
                }}
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
