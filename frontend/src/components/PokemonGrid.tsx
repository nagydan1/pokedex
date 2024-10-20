import { useEffect, useMemo, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useOnScreen from "../hooks/useOnScreen";
import useHabitats from "../hooks/useHabitats";
import { Habitat } from "../entities/Habitat";
import usePokemons from "../hooks/usePokemons";
import { Pokemon } from "../entities/Pokemon";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import PokemonCardContainer from "./PokemonCardContainer";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useHabitat from "../hooks/useHabitat";
import usePokemonQueryStore from "../store";

const PokemonGrid = () => {
  const {
    data: pokemons,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = usePokemons();

  const pokemonQuery = usePokemonQueryStore((s) => s.pokemonQuery);
  const { data: habitats } = useHabitats();
  const selectedHabitat = useHabitat(pokemonQuery.habitatName);

  const spinnerRef = useRef<HTMLDivElement>(null);
  const isSpinnerVisible = useOnScreen(spinnerRef, {
    rootMargin: "200px",
    threshold: 0.1,
  });

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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

  const filterPokemon = (pokemon: Pokemon): boolean | undefined => {
    const matchesSearchText =
      pokemon.name.search(pokemonQuery.searchText.toLowerCase()) !== -1;
    const matchesType =
      !pokemonQuery.typeName ||
      pokemon.types.some((t) => t.type.name === pokemonQuery.typeName);
    const matchesHabitat =
      !pokemonQuery.habitatName ||
      selectedHabitat?.pokemon_species.some(
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

  useEffect(() => {
    if (
      isSpinnerVisible ||
      sortedPokemons.slice(sortedPokemons.length - 20).filter(filterPokemon)
        .length === 0
    ) {
      fetchNextPage();
    }
  }, [isSpinnerVisible, sortedPokemons, pokemonQuery]);

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchedPokemonsCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner my={4} ref={spinnerRef} />}
        endMessage="There are no more pokémon."
        style={{ overflow: "visible" }}
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
