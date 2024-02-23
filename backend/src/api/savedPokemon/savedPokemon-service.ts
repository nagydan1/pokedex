import * as db from "zapatos/db";
import { pool } from "../../index";

const savedPokemonService = {
  async getPokemon() {
    return await db.select("savedpokemon", db.all).run(pool);
  },
};

export default savedPokemonService;
