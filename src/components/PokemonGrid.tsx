import usePokemons from "../hooks/usePokemons";
import { Text } from "@chakra-ui/react";

const PokemonGrid = () => {
 const {pokemons, error} = usePokemons();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemonGrid;
