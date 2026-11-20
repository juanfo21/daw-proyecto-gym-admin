import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('reserva_maquina')
    .addColumn('id', 'integer', (col) =>
      col.primaryKey().autoIncrement().notNull()
    )
    .addColumn('id_usuario', 'integer', (col) =>
      col.notNull().references('usuario.id').onDelete('cascade')
    )
    .addColumn('id_maquina', 'integer', (col) =>
      col.notNull().references('maquina.id').onDelete('restrict')
    )
    .addColumn('id_franja_horaria', 'integer', (col) =>
      col.notNull().references('franja_horaria.id').onDelete('restrict')
    )
    .addColumn('estado', 'varchar(20)', (col) =>
      col.notNull().defaultTo('activa')
    )
    .addColumn('fecha_creacion', 'date', (col) =>
      col.notNull()
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('reserva_maquina').execute();
}