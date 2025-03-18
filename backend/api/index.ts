import { Pool } from "pg";
import app from "./app";
import config from "./config";

export const pool = new Pool(config.client);

export default app.callback();
