import { Heading, HStack, Image, Show } from "@chakra-ui/react";
import { ColorModeSwitch } from "./ColorModeSwitch";
import logo from "../assets/pokemon_logo_PNG12.png";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack p={3} gap={3}>
      <HStack gap={6} width="100%">
        <Image src={logo} boxSize="60px" />
        <Show above="md">
          <Heading my={2}>Pokedex</Heading>
        </Show>
        <SearchInput onSearch={onSearch} />
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
