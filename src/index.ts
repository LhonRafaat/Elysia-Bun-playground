import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { userHandler } from "./plugins/users/user.handler";
import { env } from "./env";

const app = new Elysia({ prefix: "/api" })
  .use(swagger())
  .use(cors())
  .use(userHandler)
  .listen(env.PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
