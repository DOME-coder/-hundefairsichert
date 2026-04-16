import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          beige:      '#FFF0E1',
          accent:     '#E8A87C',
          accentDark: '#C47D4E',
          text:       '#333333',
          border:     '#E0D5C9',
          grayLight:  '#F5F5F5',
          grayMid:    '#888888',
          success:    '#4CAF50',
          error:      '#E57373',
        },
      },
      fontFamily: {
        heading: ['var(--font-raleway)', 'sans-serif'],
        body:    ['var(--font-poppins)', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      transitionTimingFunction: {
        'emil':     'cubic-bezier(0.32, 0.72, 0, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring':   'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        'brand-xs':   '0 1px 2px rgba(196, 125, 78, 0.06)',
        'brand-sm':   '0 2px 8px rgba(196, 125, 78, 0.06), 0 1px 2px rgba(196, 125, 78, 0.04)',
        'brand-md':   '0 8px 24px rgba(196, 125, 78, 0.08), 0 2px 6px rgba(196, 125, 78, 0.05)',
        'brand-lg':   '0 20px 48px rgba(196, 125, 78, 0.12), 0 4px 12px rgba(196, 125, 78, 0.06)',
        'brand-xl':   '0 32px 72px rgba(196, 125, 78, 0.16), 0 8px 20px rgba(196, 125, 78, 0.08)',
        'brand-glow': '0 0 0 6px rgba(232, 168, 124, 0.08), 0 12px 32px rgba(232, 168, 124, 0.22)',
      },
      keyframes: {
        'float': {
          '0%,100%': { transform: 'translateY(0) rotate(0)' },
          '33%':     { transform: 'translateY(-8px) rotate(1deg)' },
          '66%':     { transform: 'translateY(4px) rotate(-1deg)' },
        },
        'gradient-drift': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%,100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':     { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'ripple-ring': {
          '0%':   { transform: 'scale(1)',   opacity: '0.6' },
          '100%': { transform: 'scale(2.6)', opacity: '0'   },
        },
        'scroll-draw': {
          '0%':     { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%':    { transform: 'scaleY(1)', transformOrigin: 'top' },
          '50.01%': { transformOrigin: 'bottom' },
          '100%':   { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        'float':           'float 6s ease-in-out infinite',
        'float-delayed':   'float 6s ease-in-out 2s infinite',
        'gradient-drift':  'gradient-drift 8s ease-in-out infinite',
        'shimmer':         'shimmer 6s ease-in-out infinite',
        'pulse-soft':      'pulse-soft 3s ease-in-out infinite',
        'ripple':          'ripple-ring 2.4s ease-out infinite',
        'ripple-delay':    'ripple-ring 2.4s ease-out 1.3s infinite',
        'scroll-draw':     'scroll-draw 2.4s ease-in-out infinite',
      },
      fontSize: {
        'display': ['clamp(2.5rem, 1.5rem + 5vw, 5.25rem)',       { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'h1':      ['clamp(2rem, 1.3rem + 3.2vw, 3.75rem)',       { lineHeight: '1.08', letterSpacing: '-0.03em'  }],
        'h2':      ['clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem)',    { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        'h3':      ['clamp(1.375rem, 1.1rem + 1.1vw, 1.875rem)',  { lineHeight: '1.2',  letterSpacing: '-0.02em'  }],
      },
      backdropBlur: {
        '2xl': '40px',
      },
    },
  },
  plugins: [],
}

export default config
