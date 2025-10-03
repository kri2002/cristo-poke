import React, { useState } from 'react';
import { usePokedex } from '../hooks/usePokedex';
import PokemonList from '../components/pokemon/PokemonList';
import Pagination from '../components/common/Pagination';
import useDebounce from '../hooks/useDebounce';
import Loader from '../components/common/loader';

const PokedexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms de retardo
  const { pokemonList, loading, error, page, setPage, totalPokemon, limit } = usePokedex(debouncedSearchTerm);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Vuelve a la página 1 cuando se realiza una nueva búsqueda
    setPage(1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-6">Pokédex</h1>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Busca un Pokémon por nombre o ID..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-md p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading && <Loader />}
      {error && <p className="text-red-500 text-center text-xl">{error}</p>}
      
      {!loading && !error && (
        <>
          <PokemonList pokemonList={pokemonList} />
          {/* Muestra la paginación solo cuando no hay un término de búsqueda */}
          {!searchTerm && (
            <Pagination
              totalItems={totalPokemon}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PokedexPage;