import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import poekmonRoutes from "./routes/pokemon";;

const app = new Koa();

app.use(bodyParser());
app.use(cors({ origin: "*" }));
app.use(logger());
 
app.use(poekmonRoutes.routes());

export default app;
