import { render } from "@testing-library/react";
import { delay, http, HttpResponse } from "msw";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../src/routes";
import { server } from "./mocks/server";
import ProvidersForRouting from "./providers/ProvidersForRouting";

export const simulateDelay = (endpoint: string) => {
  server.use(
    http.get(endpoint, async () => {
      await delay();
      return HttpResponse.json([]);
    })
  );
};

export const simulateError = (endpoint: string) => {
  server.use(http.get(endpoint, () => HttpResponse.error()));
};

export const simulatePutError = (endpoint: string) => {
  server.use(http.put(endpoint, () => HttpResponse.error()));
};

export const navigateTo = (path: string) => {
  const router = createMemoryRouter(routes, {
    initialEntries: [path],
  });
  render(<RouterProvider router={router} />, { wrapper: ProvidersForRouting });
};

export const regex = (string: string): RegExp => {
  return new RegExp(string, "i");
};
