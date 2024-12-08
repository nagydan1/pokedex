import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import typeList from "../../src/data/types";
import { Feature, Pokemon } from "../../src/entities/Pokemon";
import HomePage from "../../src/pages/HomePage";
import { habitatDetails, habitatList } from "../mocks/mockHabitatData";
import { pokemonDetails, pokemonList } from "../mocks/mockPokemonData";
import AllProviders from "../providers/AllProviders";
import { simulateDelay, simulateError } from "../utils";

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

  describe("habitat selector should filter pokemons", () => {
    it.each(habitatDetails)("by $name", async (habitat) => {
      const { selectHabitat, getPokemonCards, expectListToBeInTheDocument } =
        renderComponent();

      const regex = new RegExp(`${habitat.name}`, "i");
      await selectHabitat(regex);

      const filteredPokemons = pokemonDetails.filter((p) =>
        habitat.pokemon_species.some((ps) => ps.name === p.species.name)
      );

      expect(getPokemonCards()).toHaveLength(filteredPokemons.length);
      expectListToBeInTheDocument(filteredPokemons);
      expect(screen.getByRole("heading", { name: regex }));
    });
  });

  it("should render all pokemons if all habitats is selected", async () => {
    const { selectHabitat, getPokemonCards, expectListToBeInTheDocument } =
      renderComponent();

    await selectHabitat(/all/i);

    expect(getPokemonCards()).toHaveLength(pokemonDetails.length);
    expectListToBeInTheDocument(pokemonDetails);
  });

  it("should render type list", async () => {
    const { getPokemonSkeleton } = renderComponent();

    await waitForElementToBeRemoved(getPokemonSkeleton);

    const buttons = screen.getAllByRole("button", { name: /type option/i });
    expect(buttons.length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /types/i })).toBeInTheDocument();

    typeList.forEach((type) => {
      const regex = new RegExp(`${type.name}`, "i");
      expect(screen.getByRole("img", { name: regex })).toBeInTheDocument();
    });
  });

  describe("type selector should filter pokemons", () => {
    it.each(typeList)("by $name", async (type) => {
      const { selectType, getPokemonCards, expectListToBeInTheDocument } =
        renderComponent();

      const regex = new RegExp(`${type.name}`, "i");
      await selectType(regex);

      const filteredPokemons = pokemonDetails.filter((p) =>
        p.types.some((pt) => pt.type.name === type.name)
      );

      expect(getPokemonCards()).toHaveLength(filteredPokemons.length);
      expectListToBeInTheDocument(filteredPokemons);
      expect(screen.getByRole("heading", { name: regex }));
    });
  });

  it("should render all pokemons if all types is selected", async () => {
    const { getPokemonCards, expectListToBeInTheDocument } = renderComponent();

    const typesHeading = screen.getByRole("heading", { name: /types/i });

    const user = userEvent.setup();
    await act(async () => {
      await user.click(typesHeading);
    });

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

    const selectType = async (name: RegExp | string) => {
      await waitForElementToBeRemoved(getPokemonSkeleton);
      const user = userEvent.setup();

      const typeOption = screen.getByRole("img", { name });
      await act(async () => {
        await user.click(typeOption);
      });
    };

    const getPokemonCards = () =>
      screen.queryAllByRole("button", { name: /save/i });

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
      selectType,
      getPokemonCards,
      expectPokemonsToBeInTheDocument,
      expectListToBeInTheDocument,
    };
  };
});
