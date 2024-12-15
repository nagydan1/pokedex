import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../entities/Pokemon";
import useSavedPokemons from "../hooks/useSavedPokemons";
import useSavePokemon from "../hooks/useSavePokemon";
import PokemonHabitat from "./PokemonHabitat";
import PokemonIdBadge from "./PokemonIdBadge";
import PokemonImage from "./PokemonImage";
import PokemonTypes from "./PokemonTypes";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const [isSaved, setIsSaved] = useState(false);
  const { data: savedPokemons, isLoading, error } = useSavedPokemons();
  const savePokemon = useSavePokemon();

  useEffect(() => {
    savedPokemons?.some((sp) => sp.name === pokemon.name)
      ? setIsSaved(true)
      : setIsSaved(false);
  }, [savedPokemons, pokemon]);

  return (
    <>
      <Card height="380px" variant={isSaved ? "filled" : "elevated"}>
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
                <Heading
                  size="md"
                  textAlign="center"
                  data-testid="pokemon-name"
                >
                  <Link to={"/pokemon/" + pokemon.name}>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </Link>
                </Heading>
                <PokemonHabitat speciesName={pokemon.species.name} onlyEmoji />
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
              onClick={() => savePokemon.mutate({ name: pokemon.name })}
              isDisabled={
                isLoading ||
                error ? true : false ||
                savePokemon.isPending ||
                isSaved
              }
            >
              {isSaved ? "Saved" : savePokemon.isPending ? "Saving" : "Save"}
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default PokemonCard;
