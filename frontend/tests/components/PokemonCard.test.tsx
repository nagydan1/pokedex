import { render, screen } from "@testing-library/react";
import PokemonCard from "../../src/components/PokemonCard";
import { pokemonDetails } from "../mocks/mockPokemonData";
import AllProviders from "../providers/AllProviders";
import { regex } from "../utils";

describe("PokemonCard", () => {
  it("should render the pokemon's image", () => {
    renderComponent();

    expect(
      screen.getByRole("img", { name: "pokemon image" })
    ).toBeInTheDocument();
  });

  it("should render the pokemon's name", () => {
    const { pokemon } = renderComponent();

    expect(screen.getByRole("heading")).toHaveTextContent(regex(pokemon.name));
  });

  it("should render the pokemon's ID", () => {
    const { pokemon } = renderComponent();

    expect(screen.getByTestId("pokemon-id")).toHaveTextContent(
      pokemon.id.toString()
    );
  });

  it.each(["height", "weight"])(
    "should render the pokemon's %s",
    (attribute) => {
      const { pokemon } = renderComponent();

      expect(screen.getByText(regex(attribute))).toHaveTextContent(
        attribute === "weight"
          ? pokemon.weight.toString()
          : pokemon.height.toString()
      );
    }
  );

  it("should render the pokemon's types", () => {
    const { pokemon } = renderComponent();

    const types = screen.getAllByRole("img").slice(1);
    expect(types).toHaveLength(pokemon.types.length);
  });

  it("should render the save button", () => {
    renderComponent();

    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });

  const renderComponent = () => {
    const pokemon = pokemonDetails[0];
    render(<PokemonCard pokemon={pokemon} />, { wrapper: AllProviders });

    return { pokemon };
  };
});
