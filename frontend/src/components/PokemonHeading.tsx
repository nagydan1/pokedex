import { Heading } from "@chakra-ui/react";
import { PokemonQuery } from "../App";
import useType from "../hooks/useType";
import useHabitat from "../hooks/useHabitat";

interface Props {
  pokemonQuery: PokemonQuery;
}

const PokemonHeading = ({ pokemonQuery }: Props) => {
  const type = useType(pokemonQuery.typeName);
  const habitat = useHabitat(pokemonQuery.habitatName);

  const heading = `
    ${type?.name.charAt(0).toUpperCase()?.concat(type?.name.slice(1)) || ""} 
    ${
      habitat?.name.charAt(0).toUpperCase()?.concat(habitat?.name.slice(1)) ||
      ""
    } 
    Pokemons
  `;

  return (
    <Heading as="h1" mb={3}>
      {heading}
    </Heading>
  );
};

export default PokemonHeading;
