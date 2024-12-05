import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { http, delay, HttpResponse } from "msw";
import HomePage from "../../src/pages/HomePage";
import AllProviders from "../AllProviders";
import { server } from "../mocks/server";
import { habitatDetails, habitatList } from "../mocks/mockHabitatData";
import { pokemonDetails, pokemonList } from "../mocks/mockPokemonData";

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
    server.use(
      http.get("https://pokeapi.co/api/v2/pokemon", async () => {
        await delay();
        return HttpResponse.json([]);
      })
    );

    render(<HomePage />, { wrapper: AllProviders });

    const skeletons = screen.getByRole("progressbar");
    expect(skeletons).toBeInTheDocument();
  });

  it("should hide the loading skeleton after pokemons are fetched", async () => {
    render(<HomePage />, { wrapper: AllProviders });

    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));
  });

  it("should render an error if pokemons cannot be fetched", async () => {
    server.use(
      http.get("https://pokeapi.co/api/v2/pokemon", () => HttpResponse.error())
    );

    render(<HomePage />, { wrapper: AllProviders });

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });

  it("should reder pokemons", async () => {
    render(<HomePage />, { wrapper: AllProviders });

    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));

    pokemonList.results.forEach((p) => {
      const regex = new RegExp(`${p.name}`, "i");
      expect(screen.getByRole("heading", { name: regex })).toBeInTheDocument();
    });
  });

  it("should render habitat selector", async () => {
    render(<HomePage />, { wrapper: AllProviders });

    const habitatSelector = await screen.findByRole("button", {
      name: /habitat selector/i,
    });
    expect(habitatSelector).toBeInTheDocument();

    const user = userEvent.setup();
    await act(async () => {
      await user.click(habitatSelector);
    });

    expect(screen.getByRole("menuitem", { name: /all/i })).toBeInTheDocument();
    habitatList.results.forEach((h) => {
      const regex = new RegExp(`${h.name}`, "i");
      expect(screen.getByRole("menuitem", { name: regex })).toBeInTheDocument();
    });
  });

  it("should filter pokemons by habitat", async () => {
    render(<HomePage />, { wrapper: AllProviders });

    // Arrange
    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));
    const habitatSelector = screen.getByRole("button", { name: /habitat selector/i });
    const user = userEvent.setup();
    await act(async () => {
      await user.click(habitatSelector);
    });

    // Act
    const regex = new RegExp(`${habitatDetails[5].name}`, "i");
    const habitatOption = screen.getByRole("menuitem", { name: regex });
    await act(async () => {
      await user.click(habitatOption);
    });

    // Assert
    const mockPokemons = pokemonDetails.filter((p) =>
      habitatDetails[5].pokemon_species.some((ps) => ps.name === p.species.name)
    );
    const pokemonCards = screen.getAllByRole("button", { name: /save/i });
    expect(pokemonCards).toHaveLength(mockPokemons.length);

    mockPokemons.forEach((pokemon) => {
      const regex = new RegExp(`${pokemon.name}`, "i");
      expect(screen.getByText(regex)).toBeInTheDocument();
    });
  });

  it("should render all pokemons if all habitats is selected", async () => {
    render(<HomePage />, { wrapper: AllProviders });

    // Arrange
    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));
    const habitatSelector = screen.getByRole("button", { name: /habitat selector/i });
    const user = userEvent.setup();
    await act(async () => {
      await user.click(habitatSelector);
    });

    // Act
    const habitatOption = screen.getByRole("menuitem", { name: /all/i });
    await act(async () => {
      await user.click(habitatOption);
    });

    // Assert
    const pokemonCards = screen.getAllByRole("button", { name: /save/i });
    expect(pokemonCards).toHaveLength(pokemonDetails.length);

    pokemonDetails.forEach((pokemon) => {
      const regex = new RegExp(`${pokemon.name}`, "i");
      expect(screen.getByText(regex)).toBeInTheDocument();
    });
  });
});