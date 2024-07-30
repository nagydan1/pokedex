import useResourceList from "./useResourceList";

export interface Pokemon {
  name: string;
  url: string;
}

const usePokemons = () => useResourceList<Pokemon>("/pokemon");

export default usePokemons;
