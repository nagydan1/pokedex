import Router from "koa-router";
import savedPokemonRoutes from "./savedPokemon/savedPokemon-routes";

const router = new Router();

router.use('/api', savedPokemonRoutes.routes());

export default router;
