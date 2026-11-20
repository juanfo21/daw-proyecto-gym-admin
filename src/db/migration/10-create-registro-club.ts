import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('registro_club')
    .addColumn('id', 'integer', (col) =>
      col.primaryKey().autoIncrement().notNull()
    )
    .addColumn('id_usuario', 'integer', (col) =>
      col.notNull().references('usuario.id').onDelete('cascade')
    )
    .addColumn('id_club', 'integer', (col) =>
      col.notNull().references('club.id').onDelete('cascade')
    )
    .addUniqueConstraint(
      'uq_registro_usuario_club',
      ['id_usuario', 'id_club']
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('registro_club').execute();
}