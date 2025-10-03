import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold text-red-500 mb-4 animate-pulse"
      >
        Bienvenido al mundo Pokémon
      </motion.h1>
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-gray-700 dark:text-gray-300 mb-8"
      >
        Tu aventura en la Pokédex comienza aquí.
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          to="/pokedex"
          className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105"
        >
          ¡Explora la Pokédex!
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;