import { Elysia, error } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { userHandler } from "./resources/users/user.handler";

const app = new Elysia({ prefix: "/api" })
  .use(swagger())
  .use(userHandler)
  .listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
