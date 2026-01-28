import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2.5rem'
      }
    },
    extend: {
      colors: {
        accent: '#D9A441',
        ink: '#07080A',
        surface: '#0D1117',
        surface2: '#111827',
        line: 'rgba(255,255,255,0.10)',
        goldSoft: '#F5D37C'
      },
      fontFamily: {
        sans: ['"Source Sans 3"', '"Work Sans"', 'sans-serif'],
        display: ['"Sora"', '"Cormorant Garamond"', 'serif']
      },
      boxShadow: {
        soft: '0 18px 45px -30px rgba(12, 18, 32, 0.35)',
        glow: '0 0 0 1px rgba(217, 164, 65, 0.25), 0 18px 60px -30px rgba(217, 164, 65, 0.45)'
      }
    }
  }
} satisfies Config;
