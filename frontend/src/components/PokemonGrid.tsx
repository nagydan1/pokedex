import { useCallback, useEffect, useMemo, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import PokemonCardContainer from "./PokemonCardContainer";
import useOnScreen from "../hooks/useOnScreen";
import usePokemons from "../hooks/usePokemons";
import useHabitat from "../hooks/useHabitat";
import { Pokemon } from "../entities/Pokemon";
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
  const selectedHabitat = useHabitat(pokemonQuery.habitatName);

  const spinnerRef = useRef<HTMLDivElement>(null);
  const isSpinnerVisible = useOnScreen(spinnerRef, {
    rootMargin: "200px",
    threshold: 0.1,
  });

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const filterPokemon = useCallback(
    (pokemon: Pokemon): boolean | undefined => {
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
    },
    [
      pokemonQuery.habitatName,
      pokemonQuery.searchText,
      pokemonQuery.typeName,
      selectedHabitat?.pokemon_species,
    ]
  );

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
      fetchNextPage().catch((error) => {
        console.error("Failed to fetch the next page:", error);
      });
    }
  }, [
    isSpinnerVisible,
    sortedPokemons,
    pokemonQuery,
    fetchNextPage,
    filterPokemon,
  ]);

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
        <SimpleGrid
          columns={{ sm: 2, lg: 3, xl: 4 }}
          spacing={5}
          role={isLoading ? "progressbar" : undefined}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <PokemonCardContainer key={skeleton}>
                <PokemonCardSkeleton />
              </PokemonCardContainer>
            ))}
          {sortedPokemons.filter(filterPokemon).map((pokemon, index) => (
            <PokemonCardContainer key={index}>
              <PokemonCard pokemon={pokemon} />
            </PokemonCardContainer>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default PokemonGrid;
