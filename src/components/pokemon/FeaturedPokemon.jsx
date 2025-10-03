import React from 'react';
import { motion } from 'framer-motion';

const FeaturedPokemon = ({ pokemon }) => {
  if (!pokemon) return null;

  const { name, sprites, types } = pokemon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg text-center"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Pokémon del Día</h3>
      <img
        src={sprites.other['official-artwork'].front_default || sprites.front_default}
        alt={name}
        className="w-48 h-48 mx-auto"
      />
      <h4 className="text-3xl font-bold capitalize mt-2 text-gray-900">{name}</h4>
      <div className="flex justify-center mt-2">
        {types.map((typeInfo) => (
          <span
            key={typeInfo.type.name}
            className="text-sm font-semibold mr-2 px-3 py-1 rounded-full bg-gray-800 text-white"
          >
            {typeInfo.type.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedPokemon;