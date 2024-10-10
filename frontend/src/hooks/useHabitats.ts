import useResourceList from "./useResourceList";

export interface Habitat {
  name: string;
  url: string;
}

const useHabitats = () => useResourceList<Habitat>("/pokemon-habitat");

export default useHabitats;
