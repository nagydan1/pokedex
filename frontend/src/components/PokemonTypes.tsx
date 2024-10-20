import { VStack, Image } from "@chakra-ui/react";
import useType from "../hooks/useType";
import { SlottedTypes } from "../entities/Pokemon";

interface Props {
  types: SlottedTypes[];
}

const PokemonTypes = ({ types }: Props) => {
  let typeSprites: string[] = [];
  types.forEach((type) => {
    typeSprites.push(
      useType(type.type.name)?.sprites["generation-ix"]["scarlet-violet"]
        .name_icon || ""
    );
  });

  return (
    <VStack my={3} gap={2} align="start">
      {typeSprites.map((sprite, index) => (
        <Image key={index} src={sprite} width="100px" />
      ))}
    </VStack>
  );
};

export default PokemonTypes;
