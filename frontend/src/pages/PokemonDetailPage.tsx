import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { Heading, Spinner, HStack, Box } from "@chakra-ui/react";
import PokemonImage from "../components/PokemonImage";
import PokemonAttributes from "../components/PokemonAttributes";

const PokemonDetailPage = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading, error } = usePokemon(name!);

  if (isLoading) return <Spinner />;
  if (error || !pokemon) throw error;

  return (
    <Box p={5}>
      <Heading>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Heading>
      <HStack>
        <PokemonImage src={pokemon.sprites.front_default} />
        <PokemonImage src={pokemon.sprites.back_default} />
      </HStack>
      <PokemonAttributes pokemon={pokemon} />
    </Box>
  );
};

export default PokemonDetailPage;
