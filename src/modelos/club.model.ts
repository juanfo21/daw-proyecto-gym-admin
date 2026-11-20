import { db } from '../db/config';
import {Club,ClubUpdate,NewClub} from '../db/types';

export class ClubModel {
  async crear(datos: NewClub): Promise<Club> {
    const resultado = await db
      .insertInto('club')
      .values(datos)
      .executeTakeFirstOrThrow();

    const club = await this.obtenerPorId(
      Number(resultado.insertId)
    );

    return club as Club;
  }

  async obtenerTodos(): Promise<Club[]> {
    return db
      .selectFrom('club')
      .selectAll()
      .orderBy('name', 'asc')
      .execute();
  }

  async obtenerPorId(id: number): Promise<Club | undefined> {
    return db
      .selectFrom('club')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();
  }

  async actualizar(id: number,datos: ClubUpdate){
    await db
      .updateTable('club')
      .set(datos)
      .where('id', '=', id)
      .execute();
  }

  async eliminar(id: number){
    await db
      .deleteFrom('club')
      .where('id', '=', id)
      .execute();
  }
}