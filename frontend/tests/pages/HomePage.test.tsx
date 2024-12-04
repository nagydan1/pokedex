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
import { habitatList } from "../mocks/mockHabitatData";
import { pokemonList } from "../mocks/mockPokemonData";

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

  it("should render habitat selector", async () => {
    render(<HomePage />, { wrapper: AllProviders });

    const habitatSelector = await screen.findByRole("button", {
      name: /habitats/i,
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

  it("should reder pokemons", async () => {
    render(<HomePage />, { wrapper: AllProviders });

    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));

    pokemonList.results.forEach((p) => {
      const regex = new RegExp(`${p.name}`, "i");
      expect(screen.getByRole("heading", { name: regex })).toBeInTheDocument();
    });
  });
});
