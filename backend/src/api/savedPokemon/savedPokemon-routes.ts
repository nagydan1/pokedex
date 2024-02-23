import Router from "koa-router";
import savedPokemonController from "./savedPokemon-controller";

const router = new Router();

router.get("/savedpokemon", savedPokemonController.get);
router.post("/savedpokemon", savedPokemonController.post);

export default router;
