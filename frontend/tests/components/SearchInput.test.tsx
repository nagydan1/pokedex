import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Pokemon } from "../../src/entities/Pokemon";
import { pokemonDetails } from "../mocks/mockPokemonData";
import { navigateTo, regex } from "../utils";

describe("SearchInput", () => {
  it("should render on HomePage", () => {
    const { getSearchInput, getClearButton } = navigateToHomePage();

    expect(getSearchInput()).toBeInTheDocument();
    expect(getClearButton()).toBeInTheDocument();
  });

  it("should search pokemons", async () => {
    const { searchPokemons, getPokemonCards, expectPokemonsToBeInTheDocument } =
      navigateToHomePage();

    const searchTerm = "an";
    await searchPokemons(searchTerm);

    const searchResults = pokemonDetails.filter(
      (p) => p.name.search(searchTerm.toLowerCase()) !== -1
    );

    expect(getPokemonCards()).toHaveLength(searchResults.length);
    expectPokemonsToBeInTheDocument(searchResults);
  });

  it("clear button should make HomePage render all pokemons", async () => {
    const {
      searchPokemons,
      clickClear,
      getPokemonCards,
      expectPokemonsToBeInTheDocument,
    } = navigateToHomePage();

    await searchPokemons("an");
    await clickClear();

    expect(getPokemonCards()).toHaveLength(pokemonDetails.length);
    expectPokemonsToBeInTheDocument(pokemonDetails);
  });

  it("clear button should empty search field", async () => {
    const { searchPokemons, clickClear, getSearchInput } = navigateToHomePage();

    await searchPokemons("an");
    await clickClear();

    expect(getSearchInput()).toHaveValue("");
  });

  const navigateToHomePage = () => {
    navigateTo("/");

    const getSearchInput = () => screen.getByPlaceholderText(/search/i);
    const getClearButton = () =>
      screen.getByRole("button", { name: /search/i });
    const getPokemonSkeleton = () => screen.getByRole("progressbar");
    const getPokemonCards = () =>
      screen.queryAllByRole("button", { name: /save/i });

    const searchPokemons = async (searchTerm: string) => {
      await waitForElementToBeRemoved(getPokemonSkeleton);

      const user = userEvent.setup();
      await act(async () => {
        await user.type(getSearchInput(), searchTerm + "{enter}");
      });
    };

    const clickClear = async () => {
      const user = userEvent.setup();
      await act(async () => {
        await user.click(getClearButton());
      });
    };

    const expectPokemonsToBeInTheDocument = (list: Pokemon[]) =>
      list.forEach((item) => {
        expect(
          screen.getByRole("heading", { name: regex(item.name) })
        ).toBeInTheDocument();
      });

    return {
      getSearchInput,
      getClearButton,
      getPokemonSkeleton,
      getPokemonCards,
      searchPokemons,
      clickClear,
      expectPokemonsToBeInTheDocument,
    };
  };
});
