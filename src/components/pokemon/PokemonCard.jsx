import React, { memo } from "react";
import { motion } from "framer-motion";

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
      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-pokemon-yellow/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-pokemon-yellow group cursor-pointer"
      onClick={() => onPokemonClick(pokemon)}
    >
      <div className={`h-2 bg-pokemon-type-${primaryType}`}></div>
      <div className="p-4 flex flex-col items-center relative">
        <span className="absolute top-2 right-4 text-lg font-bold text-gray-400 dark:text-gray-500">
          #{String(pokemon.id).padStart(3, "0")}
        </span>
        <motion.img
          src={
            pokemon.sprites.other["official-artwork"].front_default ||
            pokemon.sprites.front_default
          }
          alt={pokemon.name}
          className="w-32 h-32 mx-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
        />
        <h3 className="text-2xl font-pokemon text-pokemon-blue dark:text-pokemon-yellow capitalize mt-2 tracking-wide">
          {pokemon.name}
        </h3>
        <div className="flex justify-center mt-3 space-x-2">
          {pokemon.types.map((typeInfo) => (
            <span
              key={typeInfo.type.name}
              className={`px-3 py-1 rounded-full text-white text-xs font-bold bg-pokemon-type-${typeInfo.type.name}`}
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
