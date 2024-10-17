import useData from "./useData";
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

const useHabitats = () => ({ habitats, isLoading: false, error: null });
// const useHabitats = () => {
//   const { data, error, isLoading } = useData<Habitat>("/pokemon-habitat");
//   return { habitats: data, habitatErr: error, isLoading };
// };

export default useHabitats;
