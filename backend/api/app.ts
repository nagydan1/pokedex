import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import errorHandler from "./middlewares/error-handler";
import apiRoutes from "./api/api-routes";

const app = new Koa();

app.use(errorHandler);
app.use(bodyParser());
app.use(cors({ origin: "*" }));
app.use(logger());

app.use(apiRoutes.routes());

export default app;
