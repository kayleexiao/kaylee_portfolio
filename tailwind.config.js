/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette colors
        ink: 'var(--ink)',
        surface: 'var(--surface)',
        rose600: 'var(--rose-600)',
        rose500: 'var(--rose-500)',
        rose400: 'var(--rose-400)',
        rose300: 'var(--rose-300)',
        rose200: 'var(--rose-200)',
        // Legacy brand colors (keep for compatibility)
        'brand-pink': 'var(--brand-pink)',
        'brand-pink-light': 'var(--brand-pink-light)',
        'brand-pink-dark': 'var(--brand-pink-dark)',
      },
      fontFamily: {
        sans: ['var(--font-cuprum)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cuprum)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        pink: '0 10px 28px rgba(255,114,160,.22), 0 2px 6px rgba(255,255,255,.65)',
        'pink-hover': '0 18px 44px rgba(255,114,160,.32), 0 4px 10px rgba(255,255,255,.8)',
        insetSoft: 'inset 0 1px 0 rgba(255,255,255,.9)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}

module.exports = config
