import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('entrenador')
    .addColumn('id', 'integer', (col) =>
      col.primaryKey().autoIncrement().notNull()
    )
    .addColumn('name', 'varchar(80)', (col) => col.notNull())
    .addColumn('surname', 'varchar(120)', (col) => col.notNull())
    .addColumn('email', 'varchar(150)', (col) => col.notNull().unique())
    .addColumn('phone', 'varchar(20)')
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('entrenador').execute();
}