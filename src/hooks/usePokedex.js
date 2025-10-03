import { useState, useEffect } from "react";
import { fetchPokemonDetails, fetchPokemonList } from "../services/pokeapi";

const POKEMON_LIMIT = 20;

export const usePokedex = (searchTerm) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPokemon, setTotalPokemon] = useState(0);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      setError(null);
      try {
        if (searchTerm) {
          const pokemon = await fetchPokemonDetails(searchTerm.toLowerCase());
          setPokemonList([pokemon]);
          setTotalPokemon(1);
        } else {
          const offset = (page - 1) * POKEMON_LIMIT;
          const listResponse = await fetchPokemonList(POKEMON_LIMIT, offset);
          setTotalPokemon(listResponse.length);

          const detailedPokemonData = await Promise.all(
            listResponse.map((p) => fetchPokemonDetails(p.name))
          );
          setPokemonList(detailedPokemonData);
        }
      } catch (err) {
        setError(err.message);
        setPokemonList([]);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, [page, searchTerm]);

  return { pokemonList, loading, error, page, setPage, totalPokemon, limit: POKEMON_LIMIT };
};