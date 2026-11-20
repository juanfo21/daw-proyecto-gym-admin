import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('pago')
    .addColumn('id', 'integer', (col) =>
      col.primaryKey().autoIncrement().notNull()
    )
    .addColumn('id_usuario', 'integer', (col) =>
      col.notNull().references('usuario.id').onDelete('cascade')
    )
    .addColumn('importe', sql`decimal(8,2)`, (col) => col.notNull())
    .addColumn('fecha_pago', 'date', (col) => col.notNull())
    .addColumn('estado', 'varchar(20)', (col) =>
      col.notNull().defaultTo('pendiente')
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('pago').execute();
}