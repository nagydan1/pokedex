import {
  Card,
  CardBody,
  Flex,
  Heading,
  Button,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { backendClient } from "../services/api-client";
import HabitatEmoji from "./HabitatEmoji";
import PokemonImage from "./PokemonImage";
import PokemonIdBadge from "./PokemonIdBadge";
import PokemonTypes from "./PokemonTypes";
import { Pokemon } from "../entities/Pokemon";

interface Props {
  pokemon: Pokemon;
  habitat: string;
}

const PokemonCard = ({ pokemon, habitat }: Props) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSavePokemon = () => {
    backendClient
      .post("/api/savedpokemon", { name })
      .then(() => setIsSaved(true));
  };

  return (
    <>
      <Card height={360} variant={isSaved ? "filled" : "elevated"}>
        <CardBody>
          <Flex
            direction="column"
            align="center"
            justifyContent="space-between"
            height="100%"
          >
            <Flex direction="column" align="center" width="100%">
              <PokemonImage src={pokemon.sprites.front_default} />
              <HStack mb={2} gap={2} alignItems="center">
                <PokemonIdBadge id={pokemon.id} />
                <Heading size="md">
                  <Link to={"/pokemon/" + pokemon.name}>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </Link>
                </Heading>
                <HabitatEmoji habitat={habitat} />
              </HStack>
              <Flex justifyContent="space-between" width="100%" gap={1}>
                <VStack my={3} gap={0} alignItems="start">
                  <Text>
                    Height:&nbsp;<b>{pokemon.height}</b>
                  </Text>
                  <Text>
                    Weight:&nbsp;<b>{pokemon.weight}</b>
                  </Text>
                </VStack>
                <PokemonTypes types={pokemon.types} />
              </Flex>
            </Flex>
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
