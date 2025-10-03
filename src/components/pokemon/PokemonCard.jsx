import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaWeightHanging, FaRulerVertical } from "react-icons/fa";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const PokemonCard = ({ pokemon, onPokemonClick }) => {
  const primaryType = pokemon.types[0].type.name;

  const weightInKg = pokemon.weight / 10;
  const heightInM = pokemon.height / 10;
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-pokemon-yellow/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-pokemon-yellow group cursor-pointer max-h-80"
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
        <div className="flex justify-around w-full mt-4 pt-3 border-t border-gray-300/50 dark:border-gray-600/50">
          <div className="text-center">
            <p className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
              <FaWeightHanging />
              {weightInKg} kg
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Peso</p>
          </div>
          <div className="text-center">
            <p className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
              <FaRulerVertical />
              {heightInM} m
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Altura</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(PokemonCard);
