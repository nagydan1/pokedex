import usePokemons, { Pokemon } from "../hooks/usePokemons";
import { SimpleGrid, Text } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import PokemonCardContainer from "./PokemonCardContainer";
import { PokemonQuery } from "../App";
import { Type } from "../hooks/useTypes";
import { useEffect } from "react";

interface Props {
  pokemonQuery: PokemonQuery;
  types: Type[];
}

const PokemonGrid = ({ types, pokemonQuery }: Props) => {
  const { setPokemons, pokemons, error, isLoading } = usePokemons();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const typeSprites = (pokemon: Pokemon, typesArray: Type[]): string[] => {
    const sprites: string[] = [];
    pokemon.types.forEach((pokemonType) => {
      typesArray.forEach((t) => {
        if (t.name === pokemonType.type.name) {
          sprites.push(t.sprites["generation-ix"]["scarlet-violet"].name_icon);
        }
      });
    });
    return sprites;
  };

  useEffect(() => {
    const sortedPokemons = [...pokemons];
    if (pokemons.length > 0) {
      const { factor, value } = pokemonQuery.sortOrder;
      const isNumeric = typeof pokemons[0][value as keyof Pokemon] === "number";

      sortedPokemons.sort((a, b) => {
        const aValue = a[value as keyof Pokemon];
        const bValue = b[value as keyof Pokemon];

        return isNumeric
          ? ((aValue as number) - (bValue as number)) * factor
          : (aValue as string).localeCompare(bValue as string) * factor;
      });
    }
    setPokemons(sortedPokemons);
  }, [pokemonQuery.sortOrder]);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <PokemonCardContainer key={skeleton}>
              <PokemonCardSkeleton />
            </PokemonCardContainer>
          ))}
        {pokemons.map(
          (pokemon, index) =>
            (!pokemonQuery.type ||
              pokemon.types.some(
                (t) => t.type.name === pokemonQuery.type?.name
              )) &&
            (!pokemonQuery.habitat ||
              pokemonQuery.habitat.pokemon_species.some(
                (ps) => ps.name === pokemon.name
              )) && (
              <PokemonCardContainer key={index}>
                <PokemonCard
                  pokemon={pokemon}
                  typeSprites={typeSprites(pokemon, types)}
                />
              </PokemonCardContainer>
            )
        )}
      </SimpleGrid>
    </>
  );
};

export default PokemonGrid;
