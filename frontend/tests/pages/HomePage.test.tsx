import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { server } from "../mocks/server";
import { http, delay, HttpResponse } from "msw";
import HomePage from "../../src/pages/HomePage";
import AllProviders from "../AllProviders";

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
});
