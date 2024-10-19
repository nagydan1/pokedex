import { Box, Heading, HStack, Image, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeSwitch } from "./ColorModeSwitch";
import logo from "../assets/pokemon_logo_PNG12.png";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack p={3} gap={3}>
      <HStack gap={3} width="100%">
        <Box as={Link} to="/" flexShrink={0}>
          <Image src={logo} boxSize="60px" />
        </Box>
        <Show above="md">
          <Heading as={Link} to="/" my={2}>
            Pokedex
          </Heading>
        </Show>
        <SearchInput />
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
