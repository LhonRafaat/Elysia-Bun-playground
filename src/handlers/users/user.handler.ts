import Elysia, { t } from "elysia";
import { UserService } from "./user.service";
import { db } from "../../db/db";

export const userHandler = new Elysia({ prefix: "/users", name: "User" });

userHandler
  .decorate("userService", new UserService(db))
  .get("/", async ({ userService }) => {
    return userService.getUsers();
  })
  .guard({
    params: t.Object({
      id: t.Number(),
    }),
  })
  .get("/:id", async () => {});
