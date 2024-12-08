import { Image } from "@chakra-ui/react";
import fallback from "../assets/pokemon_fallback_PNG12.png";

interface Props {
  src: string;
}

const PokemonImage = ({src}: Props) => {
  return (
    <Image
      src={src}
      boxSize="160px"
      fallbackSrc={fallback}
      alt="pokemon image"
    />
  );
};

export default PokemonImage;
