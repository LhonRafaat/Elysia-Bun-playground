import { Kysely } from "kysely";
import { Database } from "../../db/db.types";

export class UserService {
  private db: Kysely<Database>;

  constructor(db: Kysely<Database>) {
    this.db = db;
  }
  async getUsers() {
    const users = this.db.selectFrom("users").selectAll().execute();
    return users;
  }
}
