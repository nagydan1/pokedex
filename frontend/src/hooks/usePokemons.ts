import { useQuery } from "@tanstack/react-query";
import { Type } from "./useTypes";
import fetchFn from "./fetchFn";


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

const usePokemons = () => useQuery<Pokemon[], Error>({
  queryKey: ["pokemons"],
  queryFn: () => fetchFn<Pokemon>("/pokemon?limit=50"),
  staleTime: 24 * 60 * 60 * 1000, // 24h
});

export default usePokemons;
