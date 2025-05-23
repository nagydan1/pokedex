import useTypes from "../hooks/useTypes";
import {
  Heading,
  List,
  ListItem,
  Spinner,
  Button,
  Image,
} from "@chakra-ui/react";
import usePokemonQueryStore from "../store";
import { Type } from "../entities/Type";

const TypeList = () => {
  const { data: types, isLoading, error } = useTypes();
  const selectedTypeName = usePokemonQueryStore((s) => s.pokemonQuery.typeName);
  const setSelectedTypeName = usePokemonQueryStore((s) => s.setTypeName);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        <ListItem paddingY="5px">
          <Button onClick={() => setSelectedTypeName(null)} variant="link">
            <Heading mb={2}>Types</Heading>
          </Button>
        </ListItem>
        {types?.map((type: Type) => (
          <ListItem key={type.name} paddingY="5px">
            <Button
              onClick={() => setSelectedTypeName(type.name)}
              fontSize="lg"
              variant={type.name === selectedTypeName ? "solid" : "link"}
              justifyContent="flex-start"
              fontWeight={type.name === selectedTypeName ? "bold" : "normal"}
              aria-label="type option"
            >
              <Image
                src={type.sprites["generation-ix"]["scarlet-violet"].name_icon}
                alt={type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              />
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TypeList;
