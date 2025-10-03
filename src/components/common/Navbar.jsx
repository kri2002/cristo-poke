import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-yellow-400 transition-colors">
          Home
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/pokedex"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors"
          >
            Pokédex
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;