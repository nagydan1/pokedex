import { Type } from "./useTypes";
import useData from "./useData";

export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  types: SlottedTypes[];
  weight: number;
  height: number;
}

interface Sprites {
  front_default: string;
}

interface SlottedTypes {
  slot: number;
  type: Type;
}

const usePokemons = () => {
  const { setData, data, error, isLoading } = useData<Pokemon>("/pokemon?limit=100");
  return { setPokemons: setData, pokemons: data, error, isLoading };
};

export default usePokemons;
