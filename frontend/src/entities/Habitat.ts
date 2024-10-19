export interface Habitat {
  id: number;
  name: string;
  pokemon_species: PokemonSpecies[];
}
interface PokemonSpecies {
  name: string;
  url: string;
}
