import { pool } from "../../index";
import { Context } from "koa";
import * as db from "zapatos/db";
import type * as s from "zapatos/schema";

export interface SavedPokemon {
  id: number;
  name: string;
  likes: number;
}

const savedPokemonService = {
  async getPokemon() {
    return await db.select("savedpokemon", db.all).run(pool);
  },
  async savePokemon(ctx: Context) {
    return await db
      .insert("savedpokemon", ctx.request.body as s.Insertable)
      .run(pool);
  },
  async putPokemon(ctx: Context) {
    const { id } = ctx.request.body as SavedPokemon;
    const existingPokemon = await db
      .selectOne("savedpokemon", { id })
      .run(pool);

    if (existingPokemon) {
      const [updatedPokemon] = await db
        .update("savedpokemon", ctx.request.body as s.Insertable, { id })
        .run(pool);
      return updatedPokemon;
    } else {
      const newPokemon = await db
        .insert("savedpokemon", ctx.request.body as s.Insertable)
        .run(pool);
      return newPokemon;
    }
  },
};

export default savedPokemonService;
