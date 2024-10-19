import { Type } from "./Type";

export interface PokemonFetchResponse {
  count: number;
  next: string | null;
  results: Pokemon[];
}
export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  types: SlottedTypes[];
  weight: number;
  height: number;
  species: Feature;
  abilities: Ability[];
  base_experience: number
  held_items: Item[];
  moves: Move[];
  stats: Stat[];
}

interface Ability {
  slot: number;
  ability: Feature;
}

interface Stat {
  base_stat: number;
  stat: Feature;
}

interface Move {
  slot: number;
  move: Feature;
}

interface Item {
  slot: number;
  item: Feature;
}

interface Feature {
  name: string;
  url: string;
}
interface Sprites {
  front_default: string;
  back_default: string;
}
interface SlottedTypes {
  slot: number;
  type: Type;
}
