import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db
    .insertInto('maquina')
    .values([
      { 
        id_zona: 2, name: 'Press banca1',
        tipo: 'fuerza' 
      },
      { 
        id_zona: 2, name: 'Press banca2',
        tipo: 'fuerza' 
      },
      { 
        id_zona: 2, name: 'Maquina de Sentadillas1',
        tipo: 'fuerza'
      },
      { 
        id_zona: 2, name: 'Maquina de Sentadillas2',
        tipo: 'fuerza'
      },
      { 
        id_zona: 3, name: 'Cinta de correr1',
        tipo: 'cardio'
      },
      { 
        id_zona: 3, name: 'Cinta de correr2',
        tipo: 'cardio'
      },
      { 
        id_zona: 3, name: 'Bicicleta estática1',
        tipo: 'cardio'
      },
      { 
        id_zona: 3, name: 'Bicicleta estática2',
        tipo: 'cardio'
      },
    ])
    .execute();
}