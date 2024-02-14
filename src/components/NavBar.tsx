import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/pokemon_logo_PNG12.png";

const NavBar = () => {
  return (
    <HStack p={2}>
      <Image src={logo} boxSize="60px" />
      <Text>Nav Bar</Text>
    </HStack>
  );
};

export default NavBar;
