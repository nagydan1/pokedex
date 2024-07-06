import usePokemons from "../hooks/usePokemons";
import { SimpleGrid, Text } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import PokemonCardContainer from "./PokemonCardContainer"

const PokemonGrid = () => {
  const { pokemons, error, isLoading } = usePokemons();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={10} p='10px'>
        {isLoading && skeletons.map(skeleton => <PokemonCardContainer key={skeleton}><PokemonCardSkeleton key={skeleton} /></PokemonCardContainer>)}
        {pokemons.map((pokemon, index) => (
          <PokemonCardContainer key={index}>
            <PokemonCard key={index} pokemonName={pokemon.name} />
          </PokemonCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default PokemonGrid;
