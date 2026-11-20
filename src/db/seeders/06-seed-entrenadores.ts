import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db
    .insertInto('entrenador')
    .values([
      {
        name: 'Laura',
        surname: 'Garcia',
        email: 'laura@gmail.com',
        phone: '600000010'
      },
      {
        name: 'Carlos',
        surname: 'Martinez',
        email: 'carlos@gmail.com',
        phone: '600000020'
      }
    ])
    .execute();
}