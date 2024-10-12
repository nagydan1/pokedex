import useData from "./useData";

export interface Type {
  id: number;
  name: string;
  sprites: Sprites;
}

interface Sprites {
  "generation-ix": GenerationIX;
}

interface GenerationIX {
  "scarlet-violet": nameIcon;
}

export interface nameIcon {
  name_icon: string;
}

const useTypes = () => {
  const { data, error, isLoading } = useData<Type>("/type");
  return { types: data, error, isLoading };
};

export default useTypes;
