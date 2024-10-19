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
  species: Species;
}
interface Species {
  name: string;
  url: string;
}
interface Sprites {
  front_default: string;
}
interface SlottedTypes {
  slot: number;
  type: Type;
}
