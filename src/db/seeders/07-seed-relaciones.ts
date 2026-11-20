import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db
    .insertInto('reserva_maquina')
    .values([
      {
        id_usuario: 1,
        id_maquina: 1,
        id_franja_horaria: 1,
        estado: 'activa',
        fecha_creacion: new Date(Date.now())
      },
      {
        id_usuario: 2,
        id_maquina: 2,
        id_franja_horaria: 2,
        estado: 'activa',
        fecha_creacion: new Date(Date.now())
      }
    ])
    .execute();

  await db
    .insertInto('sesion_entrenamiento')
    .values([
      {
        id_usuario: 3,
        id_entrenador: 1,
        id_franja_horaria: 3
      }
    ])
    .execute();

  await db
    .insertInto('registro_club')
    .values([
      {
        id_usuario: 4,
        id_club: 1
      },
      {
        id_usuario: 1,
        id_club: 3
      }
    ])
    .execute();
}