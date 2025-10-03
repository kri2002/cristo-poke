import { renderHook, waitFor } from '@testing-library/react';
import { usePokedex } from './usePokedex';
import * as pokeapi from '../services/pokeapi';

// Mock de la función fetchPokemonList
const mockPokemonList = [
  { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
];

// Mock de la función fetchPokemonDetails
const mockPokemonDetails = {
  bulbasaur: { id: 1, name: 'bulbasaur', types: [], sprites: { front_default: '' }, stats: [] },
  charmander: { id: 4, name: 'charmander', types: [], sprites: { front_default: '' }, stats: [] },
};

describe('usePokedex', () => {
  beforeEach(() => {
    // Espía las funciones para controlarlas en las pruebas
    jest.spyOn(pokeapi, 'fetchPokemonList').mockResolvedValue(mockPokemonList);
    jest.spyOn(pokeapi, 'fetchPokemonDetails').mockImplementation(async (name) => {
      return mockPokemonDetails[name];
    });
  });

  afterEach(() => {
    // Restaura los mocks después de cada prueba
    jest.restoreAllMocks();
  });

  it('debe regresar el estado de carga y luego la lista de Pokémon', async () => {
    // Renderiza el hook
    const { result } = renderHook(() => usePokedex(''));

    // Verifica el estado inicial de carga
    expect(result.current.loading).toBe(true);

    // Espera a que la carga termine
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Verifica que los Pokémon se hayan cargado correctamente
    expect(result.current.pokemonList.length).toBe(2);
    expect(result.current.pokemonList[0].name).toBe('bulbasaur');
    expect(result.current.pokemonList[1].name).toBe('charmander');
    expect(result.current.error).toBeNull();
  });

  it('debe manejar errores de la API', async () => {
    // Mocks para simular un error
    jest.spyOn(pokeapi, 'fetchPokemonList').mockRejectedValue(new Error('Network Error'));

    const { result } = renderHook(() => usePokedex(''));

    await waitFor(() => expect(result.current.loading).toBe(false));

    // Verifica que el error se haya establecido y la lista esté vacía
    expect(result.current.error).toBe('Network Error');
    expect(result.current.pokemonList.length).toBe(0);
  });

  it('debe buscar un solo Pokémon cuando se provee un término de búsqueda', async () => {
    // Mocks para simular la búsqueda por nombre
    jest.spyOn(pokeapi, 'fetchPokemonDetails').mockResolvedValue(mockPokemonDetails.bulbasaur);

    const { result } = renderHook(() => usePokedex('bulbasaur'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    // Verifica que la lista solo contenga el Pokémon buscado
    expect(result.current.pokemonList.length).toBe(1);
    expect(result.current.pokemonList[0].name).toBe('bulbasaur');
    expect(result.current.error).toBeNull();
  });
});