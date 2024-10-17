import useData from "./useData";
import types from "../data/types"

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

const useTypes = () => ({ types, isLoading: false, error: null });
// const useTypes = () => {
//   const { data, error, isLoading } = useData<Type>("/type?limit=19");
//   return { types: data, typesErr: error, isLoading };
// };

export default useTypes;
