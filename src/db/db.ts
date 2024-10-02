import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";
import { env } from "../env";
import { Database } from "./db.types";

const dialect = new PostgresDialect({
  pool: new Pool({
    database: env.DB_NAME,
    host: env.DB_HOST,
    user: env.DB_USER,
    port: +env.DB_PORT,
    password: env.DB_PASS,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
