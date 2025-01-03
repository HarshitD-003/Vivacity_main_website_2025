/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rfabb': ['Ready For Anything', 'sans-serif'],
        'ttr': ['TT Ricks', 'sans-serif'],
        'ralltez': ['Ralltez', 'sans-serif'],
        'vetosans': ['Veto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

