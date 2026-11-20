import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('franja_horaria')
    .addColumn('id', 'integer', (col) =>
      col.primaryKey().autoIncrement().notNull()
    )
    .addColumn('fecha', 'date', (col) => col.notNull())
    .addColumn('hora_inicio', 'datetime', (col) => col.notNull())
    .addColumn('hora_fin', 'datetime', (col) => col.notNull())
    .addCheckConstraint(
      'chk_franja_horas',
      sql`hora_fin > hora_inicio`
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('franja_horaria').execute();
}