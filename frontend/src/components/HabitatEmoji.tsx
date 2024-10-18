import { Text } from "@chakra-ui/react";

interface Props {
  habitat: string;
}

export const emojiMap: { [key: string]: string } = {
  all: "🏠",
  cave: "🗻",
  forest: "🌳",
  grassland: "🌿",
  mountain: "⛰️",
  rare: "🌈",
  "rough-terrain": "🏜️",
  sea: "🌊",
  urban: "🏙️",
  "waters-edge": "🏖️",
  unknown: "❔",
};

export const HabitatEmoji = ({ habitat }: Props) => {
  return <Text fontSize="2xl">{emojiMap[habitat]}</Text>;
};

export default HabitatEmoji;
