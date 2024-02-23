import { Context } from 'koa';
import savedPokemonService from './savedPokemon-service';

const savedpokemonController = {
  async get (ctx: Context) {
    try {
      const savedPokemon = await savedPokemonService.getPokemon();
      ctx.body = savedPokemon;
    } catch (e) {
      ctx.body = e;
      console.log(e);
    }
  }
};

export default savedpokemonController;
