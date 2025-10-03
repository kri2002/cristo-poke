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
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer p-4 m-2"
      onClick={() => onPokemonClick(pokemon)}
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto"
      />
      <h3 className="text-lg font-bold text-center capitalize mt-2">
        {pokemon.name}
      </h3>
      <div className="flex justify-center mt-2">
        {pokemon.types.map((typeInfo) => (
          <span
            key={typeInfo.type.name}
            className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
          >
            {typeInfo.type.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(PokemonCard);