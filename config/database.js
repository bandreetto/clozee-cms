const parse = require("pg-connection-string").parse;
const dbUrl = parse(process.env.DATABASE_URL || "");

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", dbUrl.host),
        port: env.int("DATABASE_PORT", dbUrl.port),
        database: env("DATABASE_NAME", dbUrl.database),
        username: env("DATABASE_USERNAME", dbUrl.user),
        password: env("DATABASE_PASSWORD", dbUrl.password),
        ...(env("DATABASE_SSL", dbUrl.ssl) === "true"
          ? { ssl: { rejectUnauthorized: false } }
          : null),
      },
      options: {
        ssl: env("DATABASE_SSL", dbUrl.ssl) === "true",
      },
    },
  },
});
