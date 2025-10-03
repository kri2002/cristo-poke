import React, { useEffect } from "react";
import { getPokemonCryUrl } from "../../services/pokeapi";
import { motion } from "framer-motion";
import { GiSpeaker } from "react-icons/gi";

const PokemonModal = ({ pokemon, onClose }) => {
  useEffect(() => {
    const audio = new Audio(getPokemonCryUrl(pokemon.id));
    audio.play();
  }, [pokemon.id]);

  const primaryType = pokemon.types[0].type.name;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg relative border-4 border-pokemon-yellow mt-24`}
      >
        <motion.img
          src={
            pokemon.sprites.other["official-artwork"].front_default ||
            pokemon.sprites.front_default
          }
          alt={pokemon.name}
          className="absolute -top-32 left-24 md:left-36 w-44 h-44 mb-2 drop-shadow-lg "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <div className={`h-3 bg-pokemon-type-${primaryType}`}></div>

        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-pokemon-red dark:hover:text-pokemon-yellow transition-colors text-3xl font-bold"
        >
          &times;
        </button>

        <div className="p-6">
          <div className="flex flex-col items-center text-center">
            {/* Nombre y Grito */}
            <div className="flex items-center gap-4">
              <h2 className="text-4xl font-pokemon text-pokemon-blue dark:text-pokemon-yellow capitalize tracking-wider">
                {pokemon.name}
              </h2>
            </div>

            {/* Tipos */}
            <div className="flex justify-center mt-3 space-x-2">
              {pokemon.types.map((typeInfo) => (
                <span
                  key={typeInfo.type.name}
                  className={`px-4 py-1 rounded-full text-pokemon-yellow text-sm font-bold bg-pokemon-type-${typeInfo.type.name}`}
                >
                  {typeInfo.type.name}
                </span>
              ))}
            </div>
          </div>

          {/* Estadísticas */}
          <div className="mt-6 w-full">
            <h3
              className="text-xl text-center mb-4 tracking-widest text-pokemon-bluetracking-widest font-pokemon text-pokemon-yellow"
              style={{
                textShadow: `
              -4px 4px 0 #2A75BB, 2px -2px 0 #2A75BB,
              -4px 4px 0 #2A75BB, 2px 2px 0 #2A75BB,
              3px 3px 6px rgba(0,0,0,0.7)
            `,
              }}
            >
              Estadísticas Base
            </h3>
            {pokemon.stats.map((stat) => (
              <div
                key={stat.stat.name}
                className="flex items-center mb-3 last:mb-0 "
              >
                <span className="w-1/3 text-sm capitalize text-pokemon-yellow font-bold">
                  {stat.stat.name}
                </span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
                <span
                  className="ml-2 text-smtracking-widest font-pokemon text-pokemon-yellow"
                  style={{
                    textShadow: `
                  -2px 2px 0 #2A75BB, 2px -2px 0 #2A75BB,
                  -2px 2px 0 #2A75BB, 2px 2px 0 #2A75BB,
                  3px 3px 6px rgba(0,0,0,0.7)`,
                  }}
                >
                  {stat.base_stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PokemonModal;
