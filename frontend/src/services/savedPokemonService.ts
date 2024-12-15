import { SavedPokemon } from "../entities/SavedPokemon";
import { BackendClient } from "./backend-client";

export default new BackendClient<SavedPokemon>("/savedpokemon");
 