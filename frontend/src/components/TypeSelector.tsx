import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePokemonQueryStore from "../store";
import useTypes from "../hooks/useTypes";

const TypeSelector = () => {
  const { data: types, isLoading, error } = useTypes();
  const selectedTypeName = usePokemonQueryStore((s) => s.pokemonQuery.typeName);
  const setSelectedTypeName = usePokemonQueryStore((s) => s.setTypeName);

  if (error || isLoading) return null;
  return (
    <Menu>
      <MenuButton as={Button} size="lg" rightIcon={<BsChevronDown />} mb={4}>
        <HStack>
          <Text>
            {selectedTypeName
              ?.charAt(0)
              .toUpperCase()
              .concat(selectedTypeName.slice(1)) || "Types"}
          </Text>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setSelectedTypeName(null)}>All types</MenuItem>
        {types?.map((type, index) => (
          <MenuItem key={index} onClick={() => setSelectedTypeName(type.name)}>
            {type.name.charAt(0).toUpperCase().concat(type.name.slice(1))}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypeSelector;
