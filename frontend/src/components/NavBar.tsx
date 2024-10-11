import { Heading, HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitch } from "./ColorModeSwitch";
import logo from "../assets/pokemon_logo_PNG12.png";

const NavBar = () => {
  return (
    <HStack p={3} justifyContent="space-between">
      <HStack gap={6}>
        <Image src={logo} boxSize="60px" />
        <Heading my={2}>Pokedex</Heading>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
