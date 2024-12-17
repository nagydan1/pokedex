import useSavedPokemons from "./useSavedPokemons";

const useSavedPokemon = (id: number | null) => {
  const { data } = useSavedPokemons();
  return data?.find((p) => p.id === id);
};

export default useSavedPokemon;
