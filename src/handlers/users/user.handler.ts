import Elysia, { t } from "elysia";
import { UserService } from "./user.service";

export const userHandler = new Elysia({ prefix: "/users", name: "User" });

userHandler
  .decorate("userService", new UserService())
  .get("/", async ({ userService }) => {
    return userService.getUsers();
  })
  .guard({
    params: t.Object({
      id: t.Number(),
    }),
  })
  .get("/:id", async () => {});
