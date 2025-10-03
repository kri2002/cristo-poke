import React, { useState } from "react";
import { usePokedex } from "../hooks/usePokedex";
import PokemonList from "../components/pokemon/PokemonList";
import Pagination from "../components/common/Pagination";
import useDebounce from "../hooks/useDebounce";
import Loader from "../components/common/Loader";

const PokedexPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { pokemonList, loading, error, page, setPage, totalPokemon, limit } =
    usePokedex(debouncedSearchTerm);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-[95vh] bg-cover bg-center bg-pokedex-bg p-4">
        <div className="absolute bottom-[40px] flex justify-center w-full px-4"></div>
      </div>
      <input
        type="text"
        placeholder="Busca un Pokémon por nombre o ID..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full max-w-md p-3 mt-12 flex justify-center mx-auto rounded-full border-4 border-pokemon-yellow focus:outline-none focus:ring-4 focus:ring-pokemon-blue focus:shadow-glow-electric text-center shadow-lg"
      />
      <div className="container mx-auto p-4 mt-16">
        {loading && <Loader />}
        {error && (
          <p className="text-pokemon-red text-center text-xl">{error}</p>
        )}

        {!loading && !error && (
          <>
            <PokemonList pokemonList={pokemonList} />
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
    </>
  );
};

export default PokedexPage;
