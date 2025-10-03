import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        const pokemonData = response.data.results;

        const detailedPokemonData = await Promise.all(
          pokemonData.map(async (pokemon) => {
            const detailResponse = await axios.get(pokemon.url);
            return detailResponse.data;
          })
        );

        setPokemonList(detailedPokemonData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos: ", error);
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);
  if (loading) {
    return <div>Obteniendo tus pokemones</div>;
  }
  return (
    <div className="">
      <h1>Pokedex</h1>
      <div>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <p>
              tipo:{" "}
              {pokemonData.types
                .map((typeInfo) => typeInfo.type.name)
                .join(", ")}
            </p>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Pokedex;
