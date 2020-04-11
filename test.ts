import sql from "ts-sql-plugin/lib/sql";

const userId = 1;

const query = sql`SELECT * FROM users`;
const rawQuery = sql.raw`SELECT * FROM users`;
const condQuery = sql`SELECT * FROM users
  ${sql.cond(!userId)`where user_id = ${userId}`}`;
