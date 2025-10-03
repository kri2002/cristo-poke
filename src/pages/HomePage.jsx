// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-home-bg p-4">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-pokemon text-pokemon-yellow mb-4 text-center"
        style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.7)' }}
      >
        Bienvenido al Mundo Pokémon
      </motion.h1>
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-white mb-8 text-center"
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
      >
        Tu aventura en la Pokédex comienza aquí.
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.4 }}
      >
        <Link
          to="/pokedex"
          className="bg-pokemon-red text-white font-bold rounded-full shadow-poke px-8 py-4 hover:shadow-glow-electric hover:scale-105 transition-all duration-300 transform"
        >
          ¡Explora la Pokédex!
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;