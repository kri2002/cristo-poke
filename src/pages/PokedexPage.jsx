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
    <div className="container mx-auto p-4">
      <h1
        className="text-4xl lg:text-5xl font-bold text-center my-6 text-pokemon-blue"
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        Pokédex
      </h1>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Busca un Pokémon por nombre o ID..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-md p-3 rounded-poke border-2 border-pokemon-steel focus:outline-none focus:ring-2 focus:ring-pokemon-blue focus:shadow-glow-electric"
        />
      </div>

      {loading && <Loader />}
      {error && <p className="text-pokemon-red text-center text-xl">{error}</p>}

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
  );
};

export default PokedexPage;
