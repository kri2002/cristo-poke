import axios from "axios";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonList = async (limit, offset) => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la lista de Pokémon:", error);
    throw error;
  }
};

export const fetchPokemonDetails = async (nameOrId) => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${nameOrId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error("Pokémon no encontrado.");
    }
    console.error(`Error al obtener los detalles de ${nameOrId}:`, error);
    throw error;
  }
};

export const fetchRandomPokemon = async () => {
  try {
    const totalPokemon = 898;
    const randomId = Math.floor(Math.random() * totalPokemon) + 1;
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${randomId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el Pokémon aleatorio:", error);
    throw error;
  }
};

export const getPokemonCryUrl = (id) => {
  return `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
};