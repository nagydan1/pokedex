import { ClientConfig } from "pg";

interface Config {
  port: number;
  client: ClientConfig;
}

const config: Config = {
  port: parseInt(process.env.PORT || "7654"),
  client: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: parseInt(process.env.DB_PORT || "5432"),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};

export default config;
