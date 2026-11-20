import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('usuario')
    .addColumn('id', 'integer', (col) =>
      col.primaryKey().autoIncrement().notNull()
    )
    .addColumn('name', 'varchar(80)', (col) => col.notNull())
    .addColumn('surname', 'varchar(120)', (col) => col.notNull())
    .addColumn('dni', 'varchar(15)', (col) => col.notNull().unique())
    .addColumn('email', 'varchar(150)', (col) => col.notNull().unique())
    .addColumn('phone', 'varchar(20)')
    .addColumn('password_hash', 'varchar(255)', (col) => col.notNull())
    .addColumn('rol','varchar(30)', (col) =>
      col.notNull().defaultTo('usuario'))
    .addColumn('fecha_alta', 'date', (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('usuario').execute();
}