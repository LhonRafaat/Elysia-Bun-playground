import { defineConfig } from "kysely-ctl";
import { db } from "../src/db/db";

export default defineConfig({
  kysely: db,
});
