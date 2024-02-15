interface Config {
  port: string;
}

const config: Config = {
  port: process.env.PORT || "7654",
};

export default config;
