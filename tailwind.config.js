// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/src/assets/images/home-bg.png')",
      },
      colors: {
        pokemon: {
          red: '#DF2D24',
          blue: '#2A75BB',
          yellow: '#FFCB05',
          white: '#F8F9FA',
          black: '#212529',
          steel: '#6C757D',
          type: {
            fire: '#EE8130', water: '#6390F0', grass: '#7AC74C', electric: '#F7D02C',
            ice: '#96D9D6', fighting: '#C22E28', poison: '#A33EA1', ground: '#E2BF65',
            flying: '#A98FF3', psychic: '#F95587', bug: '#A6B91A', rock: '#B6A136',
            ghost: '#735797', dragon: '#6F35FC', dark: '#705746', steel: '#B7B7CE',
            fairy: '#D685AD', normal: '#A8A77A',
          }
        }
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Roboto', 'Helvetica', 'Noto Sans', 'sans-serif'],
        'display': ['"Press Start 2P"', 'cursive'],
        'pokemon': ['PokemonSolid', 'sans-serif'], 
        'pokemonHollow': ['PokemonHollow', 'sans-serif'], 
      },
      boxShadow: {
        'poke': '0 6px 16px rgba(0,0,0,0.15)',
        'glow-electric': '0 0 12px rgba(255,203,5,0.6)',
      },
      borderRadius: {
        'poke': '16px',
      },
      animation: {
        'spark': 'spark 800ms ease-in-out infinite',
      },
      keyframes: {
        spark: {
          '0%,100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.05)', opacity: 0.8 },
        }
      }
    },
  },
  plugins: [],
};