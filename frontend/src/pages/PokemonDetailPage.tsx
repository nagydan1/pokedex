import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { Heading, Spinner, Flex } from "@chakra-ui/react";
import PokemonImage from "../components/PokemonImage";
import PokemonAttributes from "../components/PokemonAttributes";

const PokemonDetailPage = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading, error } = usePokemon(name!);

  if (isLoading) return <Spinner />;
  if (error || !pokemon) throw error;

  return (
    <Flex p={5} direction="column" alignItems={{ base: "center", md: "start" }}>
      <Heading as="h1">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Heading>
      <Flex wrap="wrap" justifyContent="center">
        <PokemonImage src={pokemon.sprites.front_default} />
        <PokemonImage src={pokemon.sprites.back_default} />
      </Flex>
      <PokemonAttributes pokemon={pokemon} />
    </Flex>
  );
};

export default PokemonDetailPage;
