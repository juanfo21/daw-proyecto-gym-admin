import { db } from '../db/config';
import {NewZona,Zona,ZonaUpdate} from '../db/types';

export class ZonaModel {
  async crear(datos: NewZona): Promise<Zona> {
    const resultado = await db
      .insertInto('zona')
      .values(datos)
      .executeTakeFirstOrThrow();

    const zona = await this.obtenerPorId(
      Number(resultado.insertId)
    );

    return zona as Zona;
  }

  async obtenerTodas(): Promise<Zona[]> {
    return db
      .selectFrom('zona')
      .selectAll()
      .orderBy('name', 'asc')
      .execute();
  }

  async obtenerPorId(id: number): Promise<Zona | undefined> {
    return db
      .selectFrom('zona')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();
  }

  async actualizar(id: number,datos: ZonaUpdate){
    await db
      .updateTable('zona')
      .set(datos)
      .where('id', '=', id)
      .execute();
  }

  async eliminar(id: number){
    await db
      .deleteFrom('zona')
      .where('id', '=', id)
      .execute();
  }
}