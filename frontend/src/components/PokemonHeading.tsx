import { Heading } from "@chakra-ui/react";
import useType from "../hooks/useType";
import useHabitat from "../hooks/useHabitat";
import usePokemonQueryStore from "../store";

const PokemonHeading = () => {
  const typeName = usePokemonQueryStore((s) => s.pokemonQuery.typeName);
  const type = useType(typeName);
  
  const habitatName = usePokemonQueryStore((s) => s.pokemonQuery.habitatName);
  const habitat = useHabitat(habitatName);

  const heading = `
    ${type?.name.charAt(0).toUpperCase()?.concat(type?.name.slice(1)) || ""} 
    ${habitat?.name.charAt(0).toUpperCase()?.concat(habitat?.name.slice(1)) || ""} 
    Pokemons
  `;

  return (
    <Heading as="h1" mb={3}>
      {heading}
    </Heading>
  );
};

export default PokemonHeading;
