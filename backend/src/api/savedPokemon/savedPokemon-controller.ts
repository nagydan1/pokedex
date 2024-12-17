import { Context } from "koa";
import savedPokemonService from "./savedPokemon-service";

const savedpokemonController = {
  async get(ctx: Context) {
    const savedPokemonList = await savedPokemonService.getPokemon();
    ctx.body = savedPokemonList;
  },
  async post(ctx: Context) {
    const savedPokemon = await savedPokemonService.savePokemon(ctx);
    ctx.body = savedPokemon;
  },
  async put(ctx: Context) {
    const savedPokemon = await savedPokemonService.putPokemon(ctx);
    ctx.body = savedPokemon;
  },
};

export default savedpokemonController;
