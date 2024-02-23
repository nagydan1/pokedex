import { Context } from "koa";
import savedPokemonService from "./savedPokemon-service";

const savedpokemonController = {
  async get(ctx: Context) {
    const savedPokemon = await savedPokemonService.getPokemon();
    ctx.body = savedPokemon;
  },
};

export default savedpokemonController;
