import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-pokemon-blue text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* 1. Texto cambiado a "Inicio" y fuente aplicada */}
        <NavLink 
          to="/" 
          className="text-2xl font-pokemon hover:text-pokemon-yellow transition-colors"
        >
          Inicio
        </NavLink>
        <div className="flex space-x-6">
          {/* 2. Fuente aplicada al otro enlace */}
          <NavLink
            to="/pokedex"
            className={({ isActive }) =>
              `text-xl font-pokemon transition-colors hover:text-pokemon-yellow ${isActive ? 'text-pokemon-yellow' : 'text-gray-300'}`
            }
          >
            Pokédex
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;