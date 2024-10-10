import usePokemons from "../hooks/usePokemons";
import { SimpleGrid, Text } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import PokemonCardContainer from "./PokemonCardContainer";
import { Type } from "../hooks/useTypes";

interface Props {
  selectedType: Type | null;
}

const PokemonGrid = ({ selectedType }: Props) => {
  const { pokemons, error, isLoading } = usePokemons();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <PokemonCardContainer key={skeleton}>
              <PokemonCardSkeleton />
            </PokemonCardContainer>
          ))}
        {pokemons.map(
          (pokemon, index) =>
            (!selectedType ||
              pokemon.types.some((t) => t.type.name === selectedType.name)) && (
              <PokemonCardContainer key={index}>
                <PokemonCard
                  name={pokemon.name}
                  imageURL={pokemon.sprites.front_default}
                />
              </PokemonCardContainer>
            )
        )}
      </SimpleGrid>
    </>
  );
};

export default PokemonGrid;
