import { Type } from "./Type";

export interface PokemonFetchResponse {
  count: number;
  next: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  id: number;
  weight: number;
  height: number;
  base_experience: number;
  species: Feature;
  sprites: Sprites;
  abilities: Ability[];
  held_items: Item[];
  moves: Move[];
  stats: Stat[];
  types: SlottedTypes[];
}

export interface Feature {
  name: string;
  url: string;
}

interface Sprites {
  front_default: string;
  back_default: string;
}

interface Ability {
  slot: number;
  ability: Feature;
}

interface Item {
  slot: number;
  item: Feature;
}

interface Move {
  slot: number;
  move: Feature;
}

interface Stat {
  base_stat: number;
  stat: Feature;
}

export interface SlottedTypes {
  slot: number;
  type: Type;
}
