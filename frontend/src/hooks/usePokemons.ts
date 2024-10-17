import { useQuery } from "@tanstack/react-query";
import { PokeApiClient } from "../services/api-client";
import { Type } from "./useTypes";

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

const pokeApiClient = new PokeApiClient<Pokemon>("/pokemon?limit=50");

const usePokemons = () => useQuery<Pokemon[], Error>({
  queryKey: ["pokemons"],
  queryFn: () => pokeApiClient.getAll(),
  staleTime: 24 * 60 * 60 * 1000, // 24h
});

export default usePokemons;
