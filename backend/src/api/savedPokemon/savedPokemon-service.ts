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

  async putPokemon(ctx: Context) {
    const data = ctx.request.body as Partial<SavedPokemon>;

    // Validate incoming data
    if (!data) {
      throw new Error("Request body is missing.");
    }

    if (typeof data.id !== "number" || data.id <= 0) {
      throw new Error("Invalid 'id'. It must be a positive number.");
    }

    if (typeof data.name !== "string" || data.name.trim().length === 0) {
      throw new Error("Invalid 'name'. It must be a non-empty string.");
    }

    if (typeof data.likes !== "number" || data.likes < 0) {
      throw new Error("Invalid 'likes'. It must be a non-negative number.");
    }

    const existingPokemon = await db
      .selectOne("savedpokemon", { id: data.id })
      .run(pool);

    if (existingPokemon) {
      const [updatedPokemon] = await db
        .update("savedpokemon", data as s.Insertable, { id: data.id })
        .run(pool);
      return updatedPokemon;
    } else {
      const newPokemon = await db
        .insert("savedpokemon", data as s.Insertable)
        .run(pool);
      return newPokemon;
    }
  },
};

export default savedPokemonService;
