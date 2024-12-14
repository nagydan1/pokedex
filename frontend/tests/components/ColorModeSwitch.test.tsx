import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { navigateTo } from "../utils";

describe.only("ColorModeSwitch", () => {
  it("should render on HomePage", () => {
    const { getColorModeSwitch } = navigateToHomePage();

    expect(getColorModeSwitch()).toBeInTheDocument();
  });

  it("should toggle color mode", async () => {
    const { clickSwitch } = navigateToHomePage();

    await clickSwitch();
    expect(document.body.className).toMatch(/light/i);

    await clickSwitch();
    expect(document.body.className).toMatch(/dark/i);
  });

  const navigateToHomePage = () => {
    navigateTo("/");

    const getColorModeSwitch = () => screen.getByRole("checkbox");

    const clickSwitch = async () => {
      const user = userEvent.setup();
      await act(async () => {
        await user.click(getColorModeSwitch());
      });
    };

    return {
      getColorModeSwitch,
      clickSwitch,
    };
  };
});
