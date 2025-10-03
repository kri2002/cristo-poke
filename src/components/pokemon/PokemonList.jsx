import React, { useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const PokemonList = ({ pokemonList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleCardClick = useCallback((pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[530px]"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onPokemonClick={handleCardClick}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {isModalOpen && selectedPokemon && (
          <PokemonModal
            pokemon={selectedPokemon}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(PokemonList);