import useHabitats from "../hooks/useHabitats";
import HabitatEmoji from "./HabitatEmoji";
import { BsChevronDown } from "react-icons/bs";
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import usePokemonQueryStore from "../store";

const HabitatSelector = () => {
  const { data: habitats, isLoading, error } = useHabitats();
  const selectedHabitatName = usePokemonQueryStore(
    (s) => s.pokemonQuery.habitatName
  );
  const setSelectedHabitatName = usePokemonQueryStore((s) => s.setHabitatName);

  if (error || isLoading) return null;
  return (
    <Menu>
      <MenuButton
        as={Button}
        size="lg"
        rightIcon={<BsChevronDown />}
        mb={4}
        aria-label="Habitat selector"
      >
        <HStack>
          <HabitatEmoji habitat={selectedHabitatName || "all"} />
          <Text>
            {selectedHabitatName
              ?.charAt(0)
              .toUpperCase()
              .concat(selectedHabitatName.slice(1)) || "Habitats"}
          </Text>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setSelectedHabitatName(null)}>
          <HabitatEmoji habitat={"all"} />
          &nbsp;&nbsp;All habitats
        </MenuItem>
        {habitats?.map((habitat, index) => (
          <MenuItem
            key={index}
            onClick={() => setSelectedHabitatName(habitat.name)}
          >
            <HabitatEmoji habitat={habitat.name} />
            &nbsp;&nbsp;
            {habitat.name.charAt(0).toUpperCase().concat(habitat.name.slice(1))}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default HabitatSelector;
