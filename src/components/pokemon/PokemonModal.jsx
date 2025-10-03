import React from 'react';
import { getPokemonCryUrl } from '../../services/pokeapi';

const PokemonModal = ({ pokemon, onClose }) => {
  const handlePlayCry = () => {
    const audio = new Audio(getPokemonCryUrl(pokemon.id));
    audio.play();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-48 h-48"
          />
          <h2 className="text-4xl font-bold capitalize mt-4">{pokemon.name}</h2>
          <button
            onClick={handlePlayCry}
            className="mt-2 text-blue-500 hover:text-blue-700"
          >
            Reproducir Grito
          </button>
          <div className="mt-4 w-full">
            <h3 className="text-2xl font-bold mb-2">Estadísticas Base</h3>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="flex items-center mb-2">
                <span className="w-1/3 text-sm capitalize">{stat.stat.name}</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm">{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;