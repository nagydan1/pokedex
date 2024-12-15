import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { pokemonDetails } from "../mocks/mockPokemonData";
import { navigateTo, regex, simulateDelay, simulateError } from "../utils";

describe("PokemonDetailsPage", () => {
  const mockPokemon = pokemonDetails[2];

  it("should show a spinner while fetching pokemon", () => {
    simulateDelay("https://pokeapi.co/api/v2/pokemon/:idOrName");
    navigateTo("/pokemon/" + mockPokemon.name);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should hide the spinner after pokemon is fetched", async () => {
    navigateTo("/pokemon/" + mockPokemon.name);

    await waitForElementToBeRemoved(screen.getByText(/loading/i));
  });

  it("should render an error if pokemons cannot be fetched", async () => {
    simulateError("https://pokeapi.co/api/v2/pokemon/:idOrName");
    navigateTo("/pokemon/" + mockPokemon.name);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });

  it("should render pokemon details", async () => {
    navigateTo("/pokemon/" + mockPokemon.name);

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    expect(
      screen.getByRole("heading", { name: regex(mockPokemon.name) })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("img", { name: /pokemon image/i })).toHaveLength(
      2
    );

    [
      "ID number",
      "Base experience",
      "Height",
      "Weight",
      "Habitat",
      "Types",
      "Held items",
      "Base stats",
      "Moves",
    ].forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
