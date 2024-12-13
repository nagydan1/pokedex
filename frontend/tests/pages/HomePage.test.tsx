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
import { regex, simulateDelay, simulateError } from "../utils";

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

      await selectHabitat(regex(habitat.name));

      const filteredPokemons = pokemonDetails.filter((p) =>
        habitat.pokemon_species.some((ps) => ps.name === p.species.name)
      );

      expect(getPokemonCards()).toHaveLength(filteredPokemons.length);
      expectListToBeInTheDocument(filteredPokemons);
      expect(screen.getByRole("heading", { name: regex(habitat.name) }));
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
      expect(
        screen.getByRole("img", { name: regex(type.name) })
      ).toBeInTheDocument();
    });
  });

  describe("type selector should filter pokemons", () => {
    it.each(typeList)("by $name", async (type) => {
      const { selectType, getPokemonCards, expectListToBeInTheDocument } =
        renderComponent();

      await selectType(regex(type.name));

      const filteredPokemons = pokemonDetails.filter((p) =>
        p.types.some((pt) => pt.type.name === type.name)
      );

      expect(getPokemonCards()).toHaveLength(filteredPokemons.length);
      expectListToBeInTheDocument(filteredPokemons);
      expect(screen.getByRole("heading", { name: regex(type.name) }));
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

  it("should render sort selector", async () => {
    const { getPokemonSkeleton, getSortSelector } = renderComponent();

    await waitForElementToBeRemoved(getPokemonSkeleton);

    expect(getSortSelector()).toBeInTheDocument();
  });

  describe("sort selector should sort", () => {
    it("pokemons alphabetically", async () => {
      const { sortPokemons, expectOrderToMatch } = renderComponent();
      await sortPokemons("A → Z");

      const sortedPokemons = pokemonDetails.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      const pokemonNames = screen.getAllByTestId("pokemon-name");

      expectOrderToMatch("name", sortedPokemons, pokemonNames);
    });

    it("pokemons by ascending height", async () => {
      const { sortPokemons, expectOrderToMatch } = renderComponent();
      await sortPokemons("Height ↑");

      const sortedPokemons = pokemonDetails.sort((a, b) => a.height - b.height);
      const pokemonHeights = screen.getAllByText(/height:/i);

      expectOrderToMatch("height", sortedPokemons, pokemonHeights);
    });

    it("pokemons by descending weight", async () => {
      const { sortPokemons, expectOrderToMatch } = renderComponent();
      await sortPokemons("Weight ↓");

      const sortedPokemons = pokemonDetails.sort((a, b) => b.weight - a.weight);
      const pokemonWeights = screen.getAllByText(/weight:/i);

      expectOrderToMatch("weight", sortedPokemons, pokemonWeights);
    });

    it("pokemons by descending ID", async () => {
      const { sortPokemons, expectOrderToMatch } = renderComponent();
      await sortPokemons("ID ↓");

      const sortedPokemons = pokemonDetails.sort((a, b) => b.id - a.id);
      const pokemonIDs = screen.getAllByTestId("pokemon-id");

      expectOrderToMatch("id", sortedPokemons, pokemonIDs);
    });
  });

  const renderComponent = () => {
    render(<HomePage />, { wrapper: AllProviders });

    const getPokemonSkeleton = () => screen.getByRole("progressbar");

    const getPokemonCards = () =>
      screen.queryAllByRole("button", { name: /save/i });

    const getHabitatSelector = () =>
      screen.getByRole("button", { name: /habitat selector/i });

    const getSortSelector = () =>
      screen.getByRole("button", { name: /order by/i });

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

    const sortPokemons = async (orderLabel: string) => {
      await waitForElementToBeRemoved(getPokemonSkeleton);
      const user = userEvent.setup();
      await act(async () => {
        await user.click(getSortSelector());
      });

      const habitatOption = screen.getByRole("menuitem", { name: orderLabel });
      await act(async () => {
        await user.click(habitatOption);
      });
    };

    const expectListToBeInTheDocument = (list: Pokemon[] | Feature[]) =>
      list.forEach((item) => {
        expect(screen.getByText(regex(item.name))).toBeInTheDocument();
      });

    const expectOrderToMatch = (
      sortBy: "name" | "height" | "weight" | "id",
      sortedPokemons: Pokemon[],
      nodes: HTMLElement[]
    ) =>
      sortedPokemons.forEach((p, index) => {
        expect(nodes[index]).toHaveTextContent(regex(p[sortBy].toString()));
      });

    return {
      getPokemonSkeleton,
      getPokemonCards,
      getHabitatSelector,
      getSortSelector,
      selectHabitat,
      selectType,
      sortPokemons,
      expectListToBeInTheDocument,
      expectOrderToMatch,
    };
  };
});
