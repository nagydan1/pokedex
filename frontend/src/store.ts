import { create } from "zustand";
import { SortOrder } from "./components/SortSelector";

export interface PokemonQuery {
  typeName: string | null;
  habitatName: string | null;
  sortOrder?: SortOrder;
  searchText: string;
}

interface PokemonQueryStore {
  pokemonQuery: PokemonQuery;
  setTypeName: (typeName: string | null) => void;
  setHabitatName: (habitatName: string | null) => void;
  setSortOrder: (sortOrder: SortOrder) => void;
  setSearchText: (searchText: string) => void;
}

const usePokemonQueryStore = create<PokemonQueryStore>((set) => ({
  pokemonQuery: { typeName: null, habitatName: null, searchText: "" },
  setSearchText: (searchText) =>
    set(() => ({ pokemonQuery: { typeName: null, habitatName: null, searchText } })),
  setTypeName: (typeName) =>
    set((store) => ({ pokemonQuery: { ...store.pokemonQuery, typeName } })),
  setHabitatName: (habitatName) =>
    set((store) => ({ pokemonQuery: { ...store.pokemonQuery, habitatName } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ pokemonQuery: { ...store.pokemonQuery, sortOrder } })),
}));

export default usePokemonQueryStore;
