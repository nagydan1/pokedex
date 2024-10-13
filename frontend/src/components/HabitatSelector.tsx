import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Habitat } from "../hooks/useHabitats";
import { emojiMap } from "./HabitatEmoji";

interface Props {
  onSelectHabitat: (habitat: Habitat | null) => void;
  selectedHabitat: Habitat | null;
  habitats: Habitat[];
  error: string;
}

const writeHabitat = (habitatName: string): string | void => {
  if (!habitatName) return;
    const emoji: string = emojiMap[habitatName as keyof typeof emojiMap];
    const name: string = habitatName.charAt(0).toUpperCase().concat(habitatName.slice(1));
    return emoji + "  " + name;
}

const HabitatSelector = ({
  onSelectHabitat,
  selectedHabitat,
  habitats,
  error,
}: Props) => {
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} size="lg" rightIcon={<BsChevronDown />} mb={4}>
        {writeHabitat(selectedHabitat?.name as string) || "🏠 Habitats"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectHabitat(null)}>
          🏠&nbsp;&nbsp;All habitats
        </MenuItem>
        {habitats.map((habitat) => (
          <MenuItem key={habitat.name} onClick={() => onSelectHabitat(habitat)}>
            {writeHabitat(habitat.name) || ""}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default HabitatSelector;
