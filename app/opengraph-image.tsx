import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Hoops Creating Hope - Every Dribble Rewrites the Future'
export const size = {
  width: 1200,
  height: 630,
}
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
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          position: 'relative',
        }}
      >
        {/* Orange accent gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            background: 'linear-gradient(135deg, transparent 0%, rgba(255, 107, 53, 0.15) 100%)',
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
          }}
        >
          {/* Logo/Basketball icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="45" fill="#FF6B35" stroke="white" strokeWidth="3" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="white" strokeWidth="2.5" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="2.5" />
              <path d="M 30 8 Q 10 50 30 92" fill="none" stroke="white" strokeWidth="2.5" />
              <path d="M 70 8 Q 90 50 70 92" fill="none" stroke="white" strokeWidth="2.5" />
            </svg>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: 'white',
              marginBottom: '20px',
              letterSpacing: '-2px',
            }}
          >
            HOOPS CREATING HOPE
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 600,
              background: 'linear-gradient(90deg, #FF6B35, #FF8F65)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '40px',
            }}
          >
            Every Dribble Rewrites the Future
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '60px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 900, color: '#FF6B35' }}>2,500+</div>
              <div style={{ fontSize: '18px', color: '#888' }}>Students Impacted</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 900, color: '#FF6B35' }}>85%</div>
              <div style={{ fontSize: '18px', color: '#888' }}>Graduation Rate</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 900, color: '#FF6B35' }}>60%</div>
              <div style={{ fontSize: '18px', color: '#888' }}>Girls Participation</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #FF6B35, #C8288C)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
