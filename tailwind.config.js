/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#102A43',
          DEFAULT: '#173F73',
          light: '#25589E',
          soft: '#EAF0F8',
          card: '#133358',
        },
        gold: {
          light: '#E6CF9B',
          DEFAULT: '#D7B875',
          dark: '#B59451',
          hover: '#C7A661',
        },
        cream: {
          DEFAULT: '#F7F4ED',
          light: '#FAF8F3',
          dark: '#EDE8DD',
        },
        charcoal: {
          DEFAULT: '#18222D',
          muted: '#486581',
          subtle: '#627D98',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(16, 42, 67, 0.12), 0 4px 6px -2px rgba(16, 42, 67, 0.04)',
        'elevated': '0 20px 40px -15px rgba(16, 42, 67, 0.18), 0 8px 12px -4px rgba(16, 42, 67, 0.06)',
        'gold-glow': '0 0 25px rgba(215, 184, 117, 0.35)',
      }
    },
  },
  plugins: [],
}
