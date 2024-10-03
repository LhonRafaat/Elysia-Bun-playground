import { db } from "../../db/db";

export class UserService {
  async getUsers() {
    const users = db.selectFrom("users").selectAll().execute();
    return users;
  }
}
