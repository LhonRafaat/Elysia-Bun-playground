import { sql, type Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createType("gender_enum")
    .asEnum(["male", "female", "other"])
    .execute();
  await db.schema
    .createTable("users")
    .ifNotExists()
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("first_name", "varchar", (col) => col.notNull())
    .addColumn("gender", sql`gender_enum`, (col) => col.notNull())
    .addColumn("last_name", "varchar", (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) =>
      col.defaultTo(sql`NOW()`).notNull(),
    )
    .addColumn("metadata", "jsonb", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("users").ifExists().execute();
  await db.schema.dropType("gender_enum").ifExists().execute();
}
