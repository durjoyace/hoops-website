import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          primary: '#FF6B35',
          light: '#FFA500',
          hover: '#ff7d4d',
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF6B35',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        purple: {
          accent: '#C8288C',
        },
        dark: {
          DEFAULT: '#000000',
          100: '#0a0a0a',
          200: '#111111',
          300: '#1a1a1a',
          400: '#222222',
          500: '#333333',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'ticker': 'ticker 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-x': 'gradientX 15s ease infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.6)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(255, 107, 0, 0.9) 0%, rgba(200, 40, 140, 0.9) 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF6B35, #FFA500)',
        'dark-gradient': 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 107, 53, 0.4)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 60px rgba(255, 107, 53, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
