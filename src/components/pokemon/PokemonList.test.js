import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PokemonList from "./PokemonList";
import PokemonModal from "./PokemonModal";

// Mock de la PokeAPI para la URL del grito (necesaria para el modal)
jest.mock("../../services/pokeapi", () => ({
  getPokemonCryUrl: jest.fn(() => "mock-cry-url"),
}));

// Mock de la PokeAPI para la URL del grito (necesaria para el modal)
const mockPokemonList = [
  {
    id: 1,
    name: "bulbasaur",
    sprites: { front_default: "mock-url-1" },
    types: [{ type: { name: "grass" } }],
    stats: [],
  },
  {
    id: 4,
    name: "charmander",
    sprites: { front_default: "mock-url-2" },
    types: [{ type: { name: "fire" } }],
    stats: [],
  },
];

describe("PokemonList", () => {
  it("debe renderizar una lista de tarjetas de Pokémon", () => {
    render(<PokemonList pokemonList={mockPokemonList} />);

    // Verifica que ambas tarjetas estén presentes
    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("charmander")).toBeInTheDocument();
  });

  it("debe abrir el modal cuando se hace clic en una tarjeta de Pokémon", async () => {
    render(<PokemonList pokemonList={mockPokemonList} />);

    // El modal no debe estar visible al inicio
    expect(
      screen.queryByRole("heading", { name: "bulbasaur", level: 2 })
    ).not.toBeInTheDocument();

    // Simula un clic en la tarjeta de Bulbasaur, seleccionando el h3 específico
    fireEvent.click(
      screen.getByRole("heading", { name: "bulbasaur", level: 3 })
    );

    // Espera a que el modal se abra y verifica que el h2 esté presente
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "bulbasaur", level: 2 })
      ).toBeInTheDocument();
    });
  });

  it("debe cerrar el modal cuando se hace clic en el botón de cerrar", async () => {
    render(<PokemonList pokemonList={mockPokemonList} />);

    // Abre el modal primero
    fireEvent.click(
      screen.getByRole("heading", { name: "bulbasaur", level: 3 })
    );

    // Espera a que el modal se abra
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "bulbasaur", level: 2 })
      ).toBeInTheDocument();
    });

    // Simula un clic en el botón de cerrar modal (el '×')
    fireEvent.click(screen.getByRole("button", { name: "×" }));

    // Espera a que el modal desaparezca del documento
    await waitFor(() => {
      expect(
        screen.queryByRole("heading", { name: "bulbasaur", level: 2 })
      ).not.toBeInTheDocument();
    });
  });
});
