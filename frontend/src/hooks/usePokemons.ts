import { useInfiniteQuery } from "@tanstack/react-query";
import { PokemonFetchResponse } from "../entities/Pokemon";
import pokemonService from "../services/pokemonService";

const usePokemons = () =>
  useInfiniteQuery<PokemonFetchResponse, Error>({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam }) => pokemonService.getInfinite(pageParam as string),
    initialPageParam: "/pokemon",
    getNextPageParam: (lastPage) => lastPage.next,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePokemons;
