import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import HomePage from "../../src/pages/HomePage";
import AllProviders from "../AllProviders";
import { habitatDetails, habitatList } from "../mocks/mockHabitatData";
import { pokemonDetails, pokemonList } from "../mocks/mockPokemonData";
import { simulateDelay, simulateError } from "../utils";
import { Feature, Pokemon } from "../../src/entities/Pokemon";

describe("HomePage", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("should show a loading skeleton while fetching pokemons", () => {
    simulateDelay("https://pokeapi.co/api/v2/pokemon");
    const { getPokemonSkeleton } = renderComponent();

    expect(getPokemonSkeleton()).toBeInTheDocument();
  });

  it("should hide the loading skeleton after pokemons are fetched", async () => {
    const { getPokemonSkeleton } = renderComponent();

    await waitForElementToBeRemoved(getPokemonSkeleton);
  });

  it("should render an error if pokemons cannot be fetched", async () => {
    simulateError("https://pokeapi.co/api/v2/pokemon");
    renderComponent();

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });

  it("should render pokemons", async () => {
    const { getPokemonSkeleton, expectListToBeInTheDocument } =
      renderComponent();

    await waitForElementToBeRemoved(getPokemonSkeleton);

    expectListToBeInTheDocument(pokemonList.results);
  });

  it("should render habitat selector", async () => {
    const {
      getPokemonSkeleton,
      getHabitatSelector,
      expectListToBeInTheDocument,
    } = renderComponent();

    await waitForElementToBeRemoved(getPokemonSkeleton);

    const user = userEvent.setup();
    await act(async () => {
      await user.click(getHabitatSelector());
    });

    expect(getHabitatSelector()).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /all/i })).toBeInTheDocument();
    expectListToBeInTheDocument(habitatList.results);
  });

  it("should filter pokemons by habitat", async () => {
    const { selectHabitat, getPokemonCards, expectListToBeInTheDocument } =
      renderComponent();

    const regex = new RegExp(`${habitatDetails[5].name}`, "i");
    await selectHabitat(regex);

    const filteredPokemons = pokemonDetails.filter((p) =>
      habitatDetails[5].pokemon_species.some((ps) => ps.name === p.species.name)
    );

    expect(getPokemonCards()).toHaveLength(filteredPokemons.length);
    expectListToBeInTheDocument(filteredPokemons);
  });

  it("should render all pokemons if all habitats is selected", async () => {
    const { selectHabitat, getPokemonCards, expectListToBeInTheDocument } =
      renderComponent();

    await selectHabitat(/all/i);

    expect(getPokemonCards()).toHaveLength(pokemonDetails.length);
    expectListToBeInTheDocument(pokemonDetails);
  });

  const renderComponent = () => {
    render(<HomePage />, { wrapper: AllProviders });

    const getPokemonSkeleton = () => screen.getByRole("progressbar");

    const getHabitatSelector = () =>
      screen.getByRole("button", { name: /habitat selector/i });

    const selectHabitat = async (name: RegExp | string) => {
      await waitForElementToBeRemoved(getPokemonSkeleton);
      const user = userEvent.setup();
      await act(async () => {
        await user.click(getHabitatSelector());
      });

      const habitatOption = screen.getByRole("menuitem", { name });
      await act(async () => {
        await user.click(habitatOption);
      });
    };

    const getPokemonCards = () =>
      screen.getAllByRole("button", { name: /save/i });

    const expectPokemonsToBeInTheDocument = (pokemons: Pokemon[]) =>
      pokemons.forEach((pokemon) => {
        const regex = new RegExp(`${pokemon.name}`, "i");
        expect(screen.getByText(regex)).toBeInTheDocument();
      });

    const expectListToBeInTheDocument = (list: Pokemon[] | Feature[]) =>
      list.forEach((item) => {
        const regex = new RegExp(`${item.name}`, "i");
        expect(screen.getByText(regex)).toBeInTheDocument();
      });

    return {
      getPokemonSkeleton,
      getHabitatSelector,
      selectHabitat,
      getPokemonCards,
      expectPokemonsToBeInTheDocument,
      expectListToBeInTheDocument,
    };
  };
});
