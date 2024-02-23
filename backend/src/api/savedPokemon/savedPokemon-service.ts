import { pool } from "../../index";
import { Context } from "koa";
import * as db from "zapatos/db";
import type * as s from "zapatos/schema";

const savedPokemonService = {
  async getPokemon() {
    return await db.select("savedpokemon", db.all).run(pool);
  },
  async savePokemon(ctx: Context) {
    return await db
      .insert("savedpokemon", ctx.request.body as s.Insertable)
      .run(pool);
  },
};

export default savedPokemonService;
