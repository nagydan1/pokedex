import { Pokemon } from "../entities/Pokemon";
import { PokeApiClient } from "./api-client";

export default new PokeApiClient<Pokemon>("/pokemon");
