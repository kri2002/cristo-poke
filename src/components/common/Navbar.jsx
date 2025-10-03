import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-pokemon-blue text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold hover:text-pokemon-yellow transition-colors" style={{ fontFamily: "'Press Start 2P', cursive" }}>
          Pokédex
        </NavLink>
        <div className="flex space-x-4">
          <NavLink
            to="/pokedex"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-lg font-medium transition-colors hover:text-pokemon-yellow ${isActive ? 'text-pokemon-yellow' : 'text-gray-300'}`
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