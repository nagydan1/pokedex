import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Button,
  VStack,
  Text,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { backendClient } from "../services/api-client";
import { Pokemon } from "../entities/Pokemon";
import HabitatEmoji from "./HabitatEmoji";
import fallback from "../assets/pokemon_fallback_PNG12.png";

interface Props {
  pokemon: Pokemon;
  typeSprites: string[];
  habitat: string;
}

const PokemonCard = ({ pokemon, typeSprites, habitat }: Props) => {
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
              <Image
                src={pokemon.sprites.front_default}
                boxSize="160px"
                fallbackSrc={fallback}
              />
              <HStack mb={2} gap={2} alignItems="center">
                <Badge fontSize="md" variant="subtle">
                  {pokemon.id}
                </Badge>
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
                <VStack my={3} gap={2}>
                  {typeSprites.map((sprite, index) => (
                    <Image key={index} src={sprite} width="100px" />
                  ))}
                </VStack>
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
