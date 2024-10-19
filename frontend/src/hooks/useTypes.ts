import { useQuery } from "@tanstack/react-query";
import { PokeApiClient } from "../services/api-client";
import types from "../data/types";
import { Type } from "../entities/Type";

const pokeApiClient = new PokeApiClient<Type>("/type?limit=19");

const useTypes = () =>
  useQuery({
    queryKey: ["types"],
    queryFn: () => pokeApiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: types,
  });

export default useTypes;
