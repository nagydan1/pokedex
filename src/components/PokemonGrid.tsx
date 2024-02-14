import usePokemons from "../hooks/usePokemons";
import { SimpleGrid, Text } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";

const PokemonGrid = () => {
  const { pokemons, error } = usePokemons();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={10} p='10px'>
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemonName={pokemon.name} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default PokemonGrid;
