import useData from "./useData";

export interface Habitat {
  id: number;
  name: string;
  pokemon_species: PokemonSpecies[];
}

interface PokemonSpecies {
  name: string;
  url: string;
}

const useHabitats = () => {
  const { data, error, isLoading } = useData<Habitat>("/pokemon-habitat");
  return { habitats: data, error, isLoading };
};

export default useHabitats;
