import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useHabitats, { OneHabitat } from "../hooks/useHabitats";

interface Props {
  onSelectHabitat: (habitat: OneHabitat | null) => void;
  selectedHabitat: OneHabitat | null;
}

const HabitatSelector = ({ onSelectHabitat, selectedHabitat }: Props) => {
  const { habitats, error } = useHabitats();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} size="lg" rightIcon={<BsChevronDown />} mb={4}>
        {selectedHabitat?.name
          .charAt(0)
          .toUpperCase()
          .concat(selectedHabitat.name.slice(1)) || "Habitats"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectHabitat(null)}>Habitats</MenuItem>
        {habitats.map((habitat) => (
          <MenuItem key={habitat.name} onClick={() => onSelectHabitat(habitat)}>
            {habitat.name.charAt(0).toUpperCase() + habitat.name.slice(1)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default HabitatSelector;
