import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#FF6B35',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
        }}
      >
        {/* Basketball icon */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Basketball circle */}
          <circle cx="50" cy="50" r="45" fill="#FF6B35" stroke="white" strokeWidth="3" />
          {/* Horizontal line */}
          <line x1="5" y1="50" x2="95" y2="50" stroke="white" strokeWidth="2.5" />
          {/* Vertical line */}
          <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="2.5" />
          {/* Left curve */}
          <path d="M 30 8 Q 10 50 30 92" fill="none" stroke="white" strokeWidth="2.5" />
          {/* Right curve */}
          <path d="M 70 8 Q 90 50 70 92" fill="none" stroke="white" strokeWidth="2.5" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
