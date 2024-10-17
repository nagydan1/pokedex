import { useQuery } from "@tanstack/react-query";
import fetchFn from "./fetchFn";
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

const useHabitats = () => useQuery({
    queryKey: ["habitats"],
    queryFn: () => fetchFn<Habitat>("/pokemon-habitat"),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: habitats,
  });

export default useHabitats;
