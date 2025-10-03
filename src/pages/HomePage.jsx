import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-red-500 mb-4 animate-pulse">
        Bienvenido al mundo Pokémon
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
        Tu aventura en la Pokédex comienza aquí.
      </p>
      <Link
        to="/pokedex"
        className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105"
      >
        ¡Explora la Pokédex!
      </Link>
    </div>
  );
};

export default HomePage;