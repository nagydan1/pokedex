import { Heading } from "@chakra-ui/react";
import { PokemonQuery } from "../App";

interface Props {
  pokemonQuery: PokemonQuery;
}

const PokemonHeading = ({ pokemonQuery }: Props) => {
  const heading = `
    ${(pokemonQuery.type?.name.charAt(0).toUpperCase())?.concat(pokemonQuery.type?.name.slice(1)) || ""} 
    ${(pokemonQuery.habitat?.name.charAt(0).toUpperCase())?.concat(pokemonQuery.habitat?.name.slice(1)) || ""} 
    Pokemons
  `;

  return <Heading as="h1" mb={3}>{heading}</Heading>;
};

export default PokemonHeading;
