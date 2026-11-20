import { db } from '../db/config';
import {FranjaHoraria,FranjaHorariaUpdate,NewFranjaHoraria} from '../db/types';

export class FranjaModel {
  async crear(
    datos: NewFranjaHoraria
  ): Promise<FranjaHoraria> {
    const resultado = await db
      .insertInto('franja_horaria')
      .values(datos)
      .executeTakeFirstOrThrow();

    const franja = await this.obtenerPorId(
      Number(resultado.insertId)
    );

    return franja as FranjaHoraria;
  }

  async obtenerTodas(): Promise<FranjaHoraria[]> {
    return db
      .selectFrom('franja_horaria')
      .selectAll()
      .orderBy('fecha', 'asc')
      .orderBy('hora_inicio', 'asc')
      .execute();
  }

  async obtenerPorId(
    id: number
  ): Promise<FranjaHoraria | undefined> {
    return db
      .selectFrom('franja_horaria')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();
  }

  async actualizar(id: number,datos: FranjaHorariaUpdate){
    await db
      .updateTable('franja_horaria')
      .set(datos)
      .where('id', '=', id)
      .execute();
  }

  async eliminar(id: number){
    await db
      .deleteFrom('franja_horaria')
      .where('id', '=', id)
      .execute();
  }
}