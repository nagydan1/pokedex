import { Pool } from "pg";
import app from "./app";
import config from "./config";

const PORT = config.port;

export const pool = new Pool(config.client);

const connectPG = async () => {
  try {
    await pool.connect();
    console.log("Successfully connected to PG");
  } catch (err) {
    console.log(err);
  }
};

connectPG();

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
  })
  .on("error", (err) => {
    console.log(err);
  });

export default server;
