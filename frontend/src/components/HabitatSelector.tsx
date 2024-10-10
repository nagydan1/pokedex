import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useHabitats from "../hooks/useHabitats";

const HabitatSelector = () => {
  const { resourceList, error } = useHabitats();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} mb={4}>
        Habitats
      </MenuButton>
      <MenuList>
        {resourceList.map((habitat) => (
          <MenuItem key={habitat.name}>
            {habitat.name.charAt(0).toUpperCase() + habitat.name.slice(1)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default HabitatSelector;
