import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('club')
    .addColumn('id', 'integer', (col) =>
      col.primaryKey().autoIncrement().notNull()
    )
    .addColumn('id_zona', 'integer', (col) =>
      col.notNull().references('zona.id').onDelete('restrict')
    )
    .addColumn('name', 'varchar(100)', (col) => col.notNull())
    .addColumn('descripcion', 'text')
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('club').execute();
}