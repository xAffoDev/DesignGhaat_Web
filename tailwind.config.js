/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ghaat: {
          terracotta: {
            DEFAULT: '#D4622B',
            50: '#FDF4EF',
            100: '#FBE6D9',
            200: '#F6C9AF',
            300: '#F0A57F',
            400: '#E5814F',
            500: '#D4622B',
            600: '#B84E1C',
            700: '#943D15',
            800: '#753213',
            900: '#602B13',
          },
          amber: {
            DEFAULT: '#E59539',
            50: '#FEF8F0',
            100: '#FCEFDB',
            200: '#F9DCB2',
            300: '#F5C584',
            400: '#EEAA56',
            500: '#E59539',
            600: '#C77926',
            700: '#9C5B1F',
          },
          teal: {
            DEFAULT: '#2C96B8',
            50: '#F0F9FB',
            100: '#DCF1F7',
            200: '#BCE4EF',
            300: '#8FD0E2',
            400: '#58B6D1',
            500: '#2C96B8',
            600: '#227895',
            700: '#1D6077',
          },
          sand: {
            DEFAULT: '#FBF8F4',
            50: '#FAF8F5',
            100: '#F5EFE6',
            200: '#EAE1D2',
            300: '#DACDBB',
            400: '#C5B39C',
            500: '#AC967D',
            600: '#8E7963',
            700: '#6E5D4C',
            800: '#4C4035',
            900: '#2C251F',
          },
          charcoal: {
            DEFAULT: '#1E2022',
            light: '#2E3236',
            muted: '#52575C',
          },
          stone: {
            DEFAULT: '#6A655F',
            light: '#8C857D',
            warm: '#EDE8E1',
          }
        },
      },
      fontFamily: {
        serif: ['"Newsreader"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        devanagari: ['"Rozha One"', '"Noto Serif Devanagari"', 'serif'],
      },
      boxShadow: {
        'warm-sm': '0 1px 2px 0 rgba(76, 64, 53, 0.05)',
        'warm': '0 4px 12px 0 rgba(76, 64, 53, 0.08)',
        'warm-lg': '0 10px 25px -3px rgba(76, 64, 53, 0.1), 0 4px 10px -2px rgba(76, 64, 53, 0.05)',
        'warm-xl': '0 20px 35px -5px rgba(76, 64, 53, 0.12), 0 10px 15px -5px rgba(76, 64, 53, 0.04)',
      },
      borderRadius: {
        'card': '1rem',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
}
