import {
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Pokemon } from "../entities/Pokemon";
import LikeButton from "./LikeButton";
import PokemonHabitat from "./PokemonHabitat";
import PokemonIdBadge from "./PokemonIdBadge";
import PokemonImage from "./PokemonImage";
import PokemonTypes from "./PokemonTypes";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card height="380px" variant="filled">
      <CardBody>
        <Flex
          direction="column"
          align="center"
          justifyContent="space-between"
          height="100%"
        >
          <Link to={"/pokemon/" + pokemon.name}>
            <Flex direction="column" align="center" width="100%">
              <PokemonImage src={pokemon.sprites.front_default} />
              <HStack mb={2} gap={2} alignItems="center">
                <PokemonIdBadge id={pokemon.id} />
                <Heading
                  size="md"
                  textAlign="center"
                  data-testid="pokemon-name"
                >
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
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
          </Link>
          <LikeButton pokemon={pokemon} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
