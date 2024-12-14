import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import PokemonCard from "../../src/components/PokemonCard";
import { backendURL } from "../mocks/handlers";
import { pokemonDetails } from "../mocks/mockPokemonData";
import AllProviders from "../providers/AllProviders";
import { regex, simulateDelay, simulateError } from "../utils";

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

  it.only("should render disabled save button while loading", async () => {
    simulateDelay(backendURL + "/savedpokemon");
    const { findSaveButton } = renderComponent();

    expect(await findSaveButton("Save")).toBeDisabled();
  });

  it.only("should render disabled save button in case of error", async () => {
    simulateError(backendURL + "/savedpokemon");
    const { findSaveButton } = renderComponent();

    expect(await findSaveButton("Save")).toBeDisabled();
  });

  it.only("should render disabled saved button if pokemon is saved", async () => {
    const { findSaveButton } = renderComponent("isSaved");

    expect(await findSaveButton("Saved")).toBeDisabled();
  });

  it.only("should render enabled save button if pokemon is not saved", async () => {
    const { findSaveButton } = renderComponent();

    await waitFor(async () => {
      expect(await findSaveButton("Save")).not.toBeDisabled();
    });
  });

  it.only("should change save button to saved if it is clicked", async () => {
    const { findSaveButton } = renderComponent();

    const button = await findSaveButton("Save");
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });

    const user = userEvent.setup();
    await act(async () => {
      await user.click(button);
    });

    expect(await findSaveButton("Saved")).toBeDisabled();
  });

  const renderComponent = (isSaved?: string) => {
    const pokemon = isSaved ? pokemonDetails[0] : pokemonDetails[1];
    render(<PokemonCard pokemon={pokemon} />, { wrapper: AllProviders });

    const findSaveButton = async (name: string | RegExp) =>
      await screen.findByRole("button", { name });

    return { pokemon, findSaveButton };
  };
});
