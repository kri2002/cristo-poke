import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import PokemonModal from './PokemonModal';

const PokemonList = ({ pokemonList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPokemon(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onPokemonClick={handleCardClick}
          />
        ))}
      </div>
      {isModalOpen && selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default PokemonList;