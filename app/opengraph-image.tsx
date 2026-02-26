import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hoops Creating Hope — Basketball + Education for Underserved Youth in India'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #FF6B35, #FFA500, #C8288C)',
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
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '32px',
            padding: '60px 80px',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            HOOPS CREATING HOPE
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.9)',
              textAlign: 'center',
              fontWeight: 600,
              marginBottom: '40px',
            }}
          >
            Every Dribble Rewrites the Future
          </div>
          <div
            style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '16px',
                padding: '16px 28px',
              }}
            >
              <span style={{ fontSize: 42, fontWeight: 900, color: 'white' }}>2,500+</span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '2px' }}>Students</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '16px',
                padding: '16px 28px',
              }}
            >
              <span style={{ fontSize: 42, fontWeight: 900, color: 'white' }}>85%</span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '2px' }}>Retention</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '16px',
                padding: '16px 28px',
              }}
            >
              <span style={{ fontSize: 42, fontWeight: 900, color: 'white' }}>3</span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '2px' }}>Cities</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
