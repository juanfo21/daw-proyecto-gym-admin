import { db } from '../db/config';
import {Entrenador,EntrenadorUpdate,NewEntrenador} from '../db/types';

export class EntrenadorModel {
  async crear(datos: NewEntrenador): Promise<Entrenador> {
    const resultado = await db
      .insertInto('entrenador')
      .values(datos)
      .executeTakeFirstOrThrow();

    const entrenador = await this.obtenerPorId(
      Number(resultado.insertId)
    );

    return entrenador as Entrenador;
  }

  async obtenerTodos(): Promise<Entrenador[]> {
    return db
      .selectFrom('entrenador')
      .selectAll()
      .orderBy('name', 'asc')
      .execute();
  }

  async obtenerPorId(id: number): Promise<Entrenador | undefined> {
    return db
      .selectFrom('entrenador')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();
  }

  async obtenerPorEmail(email: string): Promise<Entrenador | undefined> {
    return db
      .selectFrom('entrenador')
      .selectAll()
      .where('email', '=', email)
      .executeTakeFirst();
  }

  async actualizar(id: number,datos: EntrenadorUpdate){
    await db
      .updateTable('entrenador')
      .set(datos)
      .where('id', '=', id)
      .execute();
  }

  async eliminar(id: number){
    await db
      .deleteFrom('entrenador')
      .where('id', '=', id)
      .execute();
  }
}