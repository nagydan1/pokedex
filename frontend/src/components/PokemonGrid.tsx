import { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import PokemonCardContainer from "./PokemonCardContainer";
import usePokemons, { Pokemon } from "../hooks/usePokemons";
import { Habitat } from "../hooks/useHabitats";
import { PokemonQuery } from "../App";
import { Type } from "../hooks/useTypes";

interface Props {
  pokemonQuery: PokemonQuery;
  types: Type[];
  habitats: Habitat[];
}

const PokemonGrid = ({ types, pokemonQuery, habitats }: Props) => {
  const {
    data: pokemons,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = usePokemons();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const typeSprites = (pokemon: Pokemon, typesArray: Type[]): string[] => {
    const sprites: string[] = [];
    pokemon.types.forEach((pokemonType) => {
      typesArray?.forEach((t) => {
        if (t.name === pokemonType.type.name) {
          sprites.push(t.sprites["generation-ix"]["scarlet-violet"].name_icon);
        }
      });
    });
    return sprites;
  };

  const correspondHabitat = (
    pokemon: Pokemon,
    habitatsArray: Habitat[]
  ): string => {
    let foundHabitat: string = "unknown";
    habitatsArray?.forEach((hab) => {
      hab.pokemon_species?.forEach((ps) => {
        if (ps.name === pokemon.species.name) foundHabitat = hab.name;
      });
    });
    return foundHabitat;
  };

  const filterPokemon = (pokemon: Pokemon): boolean => {
    const matchesSearchText =
      pokemon.name.search(pokemonQuery.searchText?.toLowerCase()) !== -1;
    const matchesType =
      !pokemonQuery.type ||
      pokemon.types.some((t) => t.type.name === pokemonQuery.type?.name);
    const matchesHabitat =
      !pokemonQuery.habitat ||
      pokemonQuery.habitat.pokemon_species.some(
        (ps) => ps.name === pokemon.species.name
      );
    return matchesSearchText && matchesType && matchesHabitat;
  };

  const sortedPokemons = useMemo(() => {
    const allPokemons = pokemons?.pages.flatMap((page) => page.results) || [];
    const sortedAllPokemons = [...allPokemons];

    if (pokemonQuery.sortOrder) {
      const { factor, value } = pokemonQuery.sortOrder;
      const isNumeric =
        typeof allPokemons[0]?.[value as keyof Pokemon] === "number";

      sortedAllPokemons.sort((a, b) => {
        const aValue = a[value as keyof Pokemon];
        const bValue = b[value as keyof Pokemon];

        return isNumeric
          ? ((aValue as number) - (bValue as number)) * factor
          : (aValue as string).localeCompare(bValue as string) * factor;
      });
    }
    return sortedAllPokemons;
  }, [pokemons, pokemonQuery.sortOrder]);

  const fetchedPokemonsCount =
    pokemons?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchedPokemonsCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner my={4} />}
        endMessage="There are no more pokémon."
      >
        <SimpleGrid columns={{ sm: 2, lg: 3, xl: 4 }} spacing={5}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <PokemonCardContainer key={skeleton}>
                <PokemonCardSkeleton />
              </PokemonCardContainer>
            ))}
          {sortedPokemons.filter(filterPokemon).map((pokemon, index) => (
            <PokemonCardContainer key={index}>
              <PokemonCard
                pokemon={pokemon}
                typeSprites={typeSprites(pokemon, types)}
                habitat={correspondHabitat(pokemon, habitats)}
              />
            </PokemonCardContainer>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default PokemonGrid;
