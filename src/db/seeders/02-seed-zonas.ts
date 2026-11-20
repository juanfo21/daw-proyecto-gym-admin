import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db
    .insertInto('zona')
    .values([
    {
        name: 'Sala multiusos',
        descripcion: 'Zona de variedad'
    },    
    {
        name: 'Sala de fuerza',
        descripcion: 'Zona de máquinas de fuerza'
    },
    {
        name: 'Sala de cardio',
        descripcion: 'Zona de cintas, bicicletas y elípticas'
    },
    {
        name: 'Sala club1',
        descripcion: 'Zona de club1'
    },
    {
        name: 'Sala club2',
        descripcion: 'Zona de club2'
    },
    {
        name: 'Sala club3',
        descripcion: 'Zona de club3'
      }
    ])
    .execute();
}