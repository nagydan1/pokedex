import useOnePokemon from "../hooks/useOnePokemon";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { backendClient } from "../services/api-client";
import { useState } from "react";

interface Props {
  pokemonName: string;
}

const PokemonCard = ({ pokemonName }: Props) => {
  const { pokemon, error } = useOnePokemon(pokemonName);
  const [isSaved, setIsSaved] = useState(false);

  const handleSavePokemon = () => {
    backendClient
      .post("/api/savedpokemon", { name: pokemonName })
      .then(() => setIsSaved(true));
  };

  return (
    <>
      {error && <Text>{error}</Text>}
      <Card
        borderRadius={10}
        overflow="hidden"
        variant={isSaved ? "filled" : "elevated"}
      >
        <CardBody>
          <Flex direction="column" align="center">
            <Image src={pokemon.sprites?.front_default} boxSize="160px" />
            <Heading size="md" mb={3}>
              {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
            </Heading>
            <Button
              colorScheme="blue"
              onClick={handleSavePokemon}
              isDisabled={isSaved}
            >
              {isSaved ? "Saved" : "Save"}
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default PokemonCard;
