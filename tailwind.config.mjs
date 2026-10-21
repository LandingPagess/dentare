/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.5rem', lg: '3rem' },
      screens: { '2xl': '1320px' },
    },
    extend: {
      colors: {
        navy: { 950: '#0A0F1D', 900: '#0F172A', 800: '#1E293B' },
        champagne: { DEFAULT: '#C5A880', light: '#E5D5BF', dark: '#A38761' },
        gold: { DEFAULT: '#D4AF37', light: '#E8D38B', dark: '#B1912D' },
        surgical: { DEFAULT: '#8FBDB7', light: '#C2DDDA', dark: '#598C86' },
        ivory: { DEFAULT: '#F6F3ED', muted: '#C7CDD7' },
        background: '#0A0F1D',
        surface: { DEFAULT: '#0F172A', raised: '#1E293B' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.08', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.125rem, 4vw, 3.75rem)', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        eyebrow: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.18em', fontWeight: '600' }],
      },
      letterSpacing: { display: '-0.035em', editorial: '-0.025em', eyebrow: '0.18em' },
      boxShadow: {
        premium: '0 24px 80px -24px rgb(0 0 0 / 0.55)',
        glow: '0 0 40px -16px rgb(197 168 128 / 0.3)',
      },
      backgroundImage: {
        'premium-radial': 'radial-gradient(ellipse at top right, rgb(197 168 128 / 0.1), transparent 60%)',
      },
    },
  },
  plugins: [],
};
