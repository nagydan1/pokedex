import { useInfiniteQuery } from "@tanstack/react-query";
import { PokeApiClient } from "../services/api-client";
import { Pokemon, PokemonFetchResponse } from "../entities/Pokemon";

const pokeApiClient = new PokeApiClient<Pokemon>("/pokemon");

const usePokemons = () =>
  useInfiniteQuery<PokemonFetchResponse, Error>({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam }) => pokeApiClient.getInfinite(pageParam as string),
    initialPageParam: "/pokemon",
    getNextPageParam: (lastPage) => lastPage.next,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePokemons;
