import { useQuery } from "@tanstack/react-query";
import { PokeApiClient } from "../services/api-client";
import habitats from "../data/hatitats";

export interface Habitat {
  id: number;
  name: string;
  pokemon_species: PokemonSpecies[];
}

interface PokemonSpecies {
  name: string;
  url: string;
}

const pokeApiClient = new PokeApiClient<Habitat>("/pokemon-habitat");

const useHabitats = () => useQuery({
    queryKey: ["habitats"],
    queryFn: () => pokeApiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: habitats,
  });

export default useHabitats;
