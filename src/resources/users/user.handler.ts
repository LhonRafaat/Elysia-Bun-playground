import Elysia from "elysia";
import { UserService } from "./user.service";

export const userHandler = new Elysia();

userHandler.decorate("userService", new UserService());

userHandler.get(
  "/users",
  async ({ userService }: { userService: UserService }) => {
    return userService.getUsers();
  }
);
