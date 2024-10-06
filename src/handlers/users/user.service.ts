import { Kysely } from "kysely";
import { Database } from "../../db/db.types";

export class UserService {
  private db: Kysely<Database>;

  constructor(db: Kysely<Database>) {
    this.db = db;
  }
  async getUsers() {
    const limit = 10;
    const query = this.db.selectFrom("users").selectAll();

    if (limit) {
      query.limit(limit);
    }

    return await query.execute();
  }
}
