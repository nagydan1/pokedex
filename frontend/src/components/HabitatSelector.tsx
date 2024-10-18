import useHabitats, { Habitat } from "../hooks/useHabitats";
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

interface Props {
  onSelectHabitat: (habitat: Habitat | null) => void;
  selectedHabitatName?: string;
}

const HabitatSelector = ({ onSelectHabitat, selectedHabitatName }: Props) => {
  const { data: habitats, isLoading, error } = useHabitats();

  if (error || isLoading) return null;
  return (
    <Menu>
      <MenuButton as={Button} size="lg" rightIcon={<BsChevronDown />} mb={4}>
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
        <MenuItem onClick={() => onSelectHabitat(null)}>
          <HabitatEmoji habitat={"all"} />
          &nbsp;&nbsp;All habitats
        </MenuItem>
        {habitats?.map((habitat, index) => (
          <MenuItem key={index} onClick={() => onSelectHabitat(habitat)}>
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
