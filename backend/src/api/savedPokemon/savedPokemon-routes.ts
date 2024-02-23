import Router from "koa-router";
import savedPokemonController from "./savedPokemon-controller";

const router = new Router();

router.get("/savedpokemon", savedPokemonController.get);

export default router;
