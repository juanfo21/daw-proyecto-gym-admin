import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {

    function miliHora(num: number){
        let hora = 3600000 * num
        return hora
    };

  await db
    .insertInto('franja_horaria')
    .values([
      {
        fecha: new Date(Date.now()),
        hora_inicio: new Date(Date.now()+miliHora(1)),
        hora_fin: new Date(Date.now()+miliHora(2))
      },
      {
        fecha: new Date(Date.now()),
        hora_inicio: new Date(Date.now()+miliHora(3)),
        hora_fin: new Date(Date.now()+miliHora(4))
      },
      {
        fecha: new Date(Date.now()+miliHora(24)),
        hora_inicio: new Date(Date.now()+miliHora(25)),
        hora_fin: new Date(Date.now()+miliHora(26))
      }
    ])
    .execute();
}