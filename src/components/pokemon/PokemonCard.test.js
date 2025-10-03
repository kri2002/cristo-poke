import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

// Mock de datos de un Pokémon para las pruebas
const mockPokemon = {
  id: 1,
  name: "bulbasaur",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
};

describe("PokemonCard", () => {
  it("debe renderizar la información correcta del Pokémon", () => {
    // Renderiza el componente con los datos mock
    render(<PokemonCard pokemon={mockPokemon} onPokemonClick={() => {}} />);

    // Verifica que el nombre, la imagen y los tipos estén en el documento
    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    expect(screen.getByAltText("bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("grass")).toBeInTheDocument();
    expect(screen.getByText("poison")).toBeInTheDocument();
  });

  it("debe llamar a la función onPokemonClick cuando se hace clic", () => {
    // Crea una función mock para verificar si se llama
    const handlePokemonClick = jest.fn();

    render(
      <PokemonCard pokemon={mockPokemon} onPokemonClick={handlePokemonClick} />
    );

    // Simula un clic en el elemento que representa la tarjeta
    fireEvent.click(screen.getByText("bulbasaur"));

    // Espera que la función mock haya sido llamada una vez
    expect(handlePokemonClick).toHaveBeenCalledTimes(1);
    // Y que haya sido llamada con el objeto de Pokémon correcto
    expect(handlePokemonClick).toHaveBeenCalledWith(mockPokemon);
  });
});
