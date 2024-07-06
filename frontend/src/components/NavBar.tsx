import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitch } from "./ColorModeSwitch";
import logo from "../assets/pokemon_logo_PNG12.png";

const NavBar = () => {
  return (
    <HStack p={2} justifyContent='space-between'>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
