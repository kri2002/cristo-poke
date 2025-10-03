// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'pokemon-red': '#DF2D24',
        'pokemon-blue': '#2A75BB',
        'pokemon-yellow': '#FFCB05',
      },
    },
  },
  plugins: [],
};