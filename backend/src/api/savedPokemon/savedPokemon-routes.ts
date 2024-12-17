import Router from "koa-router";
import savedPokemonController from "./savedPokemon-controller";

const router = new Router();

router.get("/savedpokemon", savedPokemonController.get);
router.post("/savedpokemon", savedPokemonController.post);
router.put("/savedpokemon", savedPokemonController.put);

export default router;
