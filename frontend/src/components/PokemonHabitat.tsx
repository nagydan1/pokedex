import { HStack, Text } from "@chakra-ui/react";
import HabitatEmoji from "./HabitatEmoji";
import useHabitats from "../hooks/useHabitats";

interface Props {
  speciesName: string;
  onlyEmoji?: boolean;
}

const PokemonHabitat = ({ speciesName, onlyEmoji }: Props) => {
  let habitatName: string = "unknown";
  const { data: HabitatList } = useHabitats();
  HabitatList.forEach((habitat) => {
    habitat.pokemon_species?.forEach((species) => {
      if (species.name === speciesName) habitatName = habitat.name;
    });
  });

  console.log(habitatName);

  return (
    <HStack my={3} gap={2}>
      <HabitatEmoji habitat={habitatName} />
      {!onlyEmoji && <Text>
        {habitatName.charAt(0).toUpperCase().concat(habitatName.slice(1))}
      </Text>}
    </HStack>
  );
};

export default PokemonHabitat;
