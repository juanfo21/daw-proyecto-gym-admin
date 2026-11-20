import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db
    .insertInto('club')
    .values([
      {
        id_zona: 4,
        name: 'Club de pádel',
        descripcion: 'Club de pádel'
      },
      {
        id_zona: 5,
        name: 'Club de running',
        descripcion: 'Club de running'
      },
      {
        id_zona: 6,
        name: 'Club de Karate',
        descripcion: 'Club de Karate'
      }
    ])
    .execute();
}