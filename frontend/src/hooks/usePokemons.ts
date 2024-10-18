import { useInfiniteQuery } from "@tanstack/react-query";
import { PokeApiClient } from "../services/api-client";
import { Type } from "./useTypes";

interface PokemonFetchResponse {
  count: number;
  next: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  types: SlottedTypes[];
  weight: number;
  height: number;
  species: Species;
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  front_default: string;
}

interface SlottedTypes {
  slot: number;
  type: Type;
}

const pokeApiClient = new PokeApiClient<Pokemon>("/pokemon");

const usePokemons = () =>
  useInfiniteQuery<PokemonFetchResponse, Error>({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam }) => pokeApiClient.getInfinite(pageParam as string),
    initialPageParam: "/pokemon",
    getNextPageParam: (lastPage) => lastPage.next,
    staleTime: 24 * 60 * 60 * 1000 // 24h
  });

export default usePokemons;
