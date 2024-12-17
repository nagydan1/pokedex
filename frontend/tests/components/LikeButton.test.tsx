import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import LikeButton from "../../src/components/LikeButton";
import PokemonCard from "../../src/components/PokemonCard";
import { backendURL } from "../mocks/handlers";
import { pokemonDetails } from "../mocks/mockPokemonData";
import { savedPokemonList } from "../mocks/mockSavedPokemons";
import AllProviders from "../providers/AllProviders";
import { simulateError, simulatePutError } from "../utils";

describe("LikeButton", () => {
  it("should render the like button", async () => {
    const { findLikeButton } = renderComponent();

    expect(await findLikeButton()).toBeInTheDocument();
  });

  it("should render the like count", async () => {
    const { savedPokemon, findLikeCount } = renderComponent();

    expect(await findLikeCount(savedPokemon?.likes)).toBeInTheDocument();
  });

  it("should render 0 like count if pokemon was not yet liked", async () => {
    render(<PokemonCard pokemon={pokemonDetails[1]} />, {
      wrapper: AllProviders,
    });

    expect(await screen.findByText("0")).toBeInTheDocument();
  });

  it("should not render like button in case of failed fetch", async () => {
    simulateError(backendURL + "/savedpokemon");
    renderComponent();

    let button;
    await waitFor(() => {
      button = screen.queryByRole("button", { name: /like/i });
    });

    expect(button).not.toBeInTheDocument();
    screen.debug();
  });

  it("should increment like count if button is clicked", async () => {
    const { findLikeCount, clickLike, savedPokemon } = renderComponent();

    await clickLike();

    expect(await findLikeCount(savedPokemon.likes + 1)).toBeInTheDocument();
  });

  it("should render error toast and revert like count in case of failed put", async () => {
    simulatePutError(backendURL + "/savedpokemon");
    const { clickLike, findLikeCount, savedPokemon } = renderComponent();

    await clickLike();

    expect(await screen.findByRole("status")).toBeInTheDocument();
    expect(await findLikeCount(savedPokemon.likes)).toBeInTheDocument();
  });

  const renderComponent = () => {
    const pokemon = pokemonDetails[0];
    const savedPokemon = savedPokemonList[0];

    render(<LikeButton pokemon={pokemon} />, { wrapper: AllProviders });

    const findLikeButton = async () =>
      await screen.findByRole("button", { name: /like/i });

    const findLikeCount = async (text: string | number) =>
      await screen.findByText(text);

    const clickLike = async () => {
      const button = await findLikeButton();

      const user = userEvent.setup();
      await act(async () => {
        await user.click(button);
      });
    };

    return { pokemon, savedPokemon, findLikeButton, findLikeCount, clickLike };
  };
});
