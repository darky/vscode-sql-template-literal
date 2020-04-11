# vscode-sql-template-literal

Syntax highlighting for utils of [ts-sql-plugin](https://github.com/xialvjun/ts-sql-plugin):

```js
const query = sql`SELECT * FROM users`;
const rawQuery = sql.raw`SELECT * FROM users`;
const condQuery = sql`SELECT * FROM users ${sql.cond(!!userId)`where user_id = ${userId}`}`
```
