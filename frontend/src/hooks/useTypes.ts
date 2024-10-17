import types from "../data/types";
import { useQuery } from "@tanstack/react-query";
import fetchFn from "./fetchFn";

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

const useTypes = () => useQuery({
  queryKey: ['types'],
  queryFn: () =>  fetchFn<Type>("/type?limit=19"),
  staleTime: 24 * 60 * 60 * 1000, // 24h
  initialData: types,
});

export default useTypes;
