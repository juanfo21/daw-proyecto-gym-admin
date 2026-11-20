import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('sesion_entrenamiento')
    .addColumn('id', 'integer', (col) =>
      col.primaryKey().autoIncrement().notNull()
    )
    .addColumn('id_usuario', 'integer', (col) =>
      col.notNull().references('usuario.id').onDelete('cascade')
    )
    .addColumn('id_entrenador', 'integer', (col) =>
      col.notNull().references('entrenador.id').onDelete('restrict')
    )
    .addColumn('id_franja_horaria', 'integer', (col) =>
      col.notNull().references('franja_horaria.id').onDelete('restrict')
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('sesion_entrenamiento').execute();
}