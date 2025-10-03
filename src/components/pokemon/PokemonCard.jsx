import React, { memo } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const PokemonCard = ({ pokemon, onPokemonClick }) => {
  const primaryType = pokemon.types[0].type.name;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white dark:bg-pokemon-black rounded-poke shadow-poke border border-pokemon-blue overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group"
      onClick={() => onPokemonClick(pokemon)}
    >
      <div className={`h-2 bg-pokemon-type-${primaryType}`}></div>
      <div className="p-4 flex flex-col items-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-24 h-24 mx-auto"
        />
        <h3 className="text-lg font-bold text-center capitalize mt-2 text-pokemon-blue dark:text-pokemon-white">
          {pokemon.name}
        </h3>
        <div className="flex justify-center mt-2 space-x-2">
          {pokemon.types.map((typeInfo) => (
            <span
              key={typeInfo.type.name}
              className={`px-3 py-1 rounded-full text-white text-xs font-semibold bg-pokemon-type-${typeInfo.type.name}`}
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(PokemonCard);