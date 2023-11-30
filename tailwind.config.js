/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      fm: '995px',
      xl: '1440px',
    },
    spacing: {
      '0': '0px',
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '110px',
    },
    colors: {
      gray: '#71717a',
      blue: '#29265b',
      red: '#6c2d33',
      rouge: '#dc2626',
      grey: '#f3f4f6',
      white: '#fff',
      black: '#000',
      yellow: {
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
        950: '#422006',
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/guy.png')",
      }
    },
  },
  plugins: [],
}

