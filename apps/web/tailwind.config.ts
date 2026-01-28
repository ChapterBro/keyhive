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
        accent: '#D9A441'
      },
      fontFamily: {
        sans: ['"Source Sans 3"', '"Work Sans"', 'sans-serif'],
        display: ['"Sora"', '"Cormorant Garamond"', 'serif']
      },
      boxShadow: {
        soft: '0 18px 45px -30px rgba(12, 18, 32, 0.35)'
      }
    }
  }
} satisfies Config;
