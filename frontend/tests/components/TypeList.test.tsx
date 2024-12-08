import { render, screen } from "@testing-library/react";
import TypeList from "../../src/components/TypeList";
import AllProviders from "../providers/AllProviders";

describe("TypeList", () => {
  it("should render the heading", async () => {
    render(<TypeList />, { wrapper: AllProviders });

    const heading = await screen.findByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should render the list of types", async () => {
    render(<TypeList />, { wrapper: AllProviders });

    const buttons = await screen.findAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });
});
