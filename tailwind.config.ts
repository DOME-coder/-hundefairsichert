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
    },
  },
  plugins: [],
}

export default config
