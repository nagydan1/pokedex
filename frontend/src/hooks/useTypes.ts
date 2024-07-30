import useResourceList from "./useResourceList";

export interface Type {
  name: string;
  url: string;
}

const useTypes = () => useResourceList<Type>("/type");

export default useTypes;
