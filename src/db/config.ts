import { env, loadEnvFile } from "node:process";
loadEnvFile("./.env");
import { Kysely, MysqlDialect } from 'kysely';
import { createPool } from 'mysql2';
import type { DB } from './types';

export const db = new Kysely<DB>({
  dialect: new MysqlDialect({
    pool: createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    })
  })
});