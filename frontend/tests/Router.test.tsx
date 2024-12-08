import { screen } from "@testing-library/react";
import { navigateTo } from "./utils";
import { pokemonDetails } from "./mocks/mockPokemonData";

describe.skip("Router", () => {
  it("should render the home page for /", () => {
    navigateTo("/");

    expect(
      screen.getByRole("heading", { name: /pokemons/i })
    ).toBeInTheDocument();
  });

  it("should render the pokemon details page for /pokemon/:name", async () => {
    const pokemon = pokemonDetails[0]
    navigateTo("/pokemon/" + pokemon.name);

    const regex = new RegExp(`${pokemon.name}`, "i");
    expect(
      await screen.findByRole("heading", { name: regex })
    ).toBeInTheDocument();
  });

  it("should render the not found page for invalid routes", () => {
    navigateTo("/invalid-route");

    expect(screen.getByText(/page doesn't exist/i)).toBeInTheDocument();
  });
});
