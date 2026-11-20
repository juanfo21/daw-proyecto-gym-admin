import { db } from '../db/config';
import {NewSesionEntrenamiento,SesionEntrenamiento,SesionEntrenamientoUpdate} from '../db/types';

export class SesionModel {

  async crear(datos: NewSesionEntrenamiento): Promise<SesionEntrenamiento> {
    const resultado = await db
      .insertInto('sesion_entrenamiento')
      .values(datos)
      .executeTakeFirstOrThrow();

    const sesion = await this.obtenerPorId(
      Number(resultado.insertId)
    );

    return sesion as SesionEntrenamiento;
  }

  async obtenerTodas(): Promise<SesionEntrenamiento[]> {
    return db
      .selectFrom('sesion_entrenamiento')
      .selectAll()
      .orderBy('id', 'asc')
      .execute();
  }

  async obtenerPorId(id: number): Promise<SesionEntrenamiento | undefined> {
    return db
      .selectFrom('sesion_entrenamiento')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();
  }

  async obtenerPorUsuario(idUsuario: number): Promise<SesionEntrenamiento[]> {
    return db
      .selectFrom('sesion_entrenamiento')
      .selectAll()
      .where('id_usuario', '=', idUsuario)
      .execute();
  }

  async actualizar(id: number,datos: SesionEntrenamientoUpdate){
    await db
      .updateTable('sesion_entrenamiento')
      .set(datos)
      .where('id', '=', id)
      .execute();
  }

  async eliminar(id: number){
    await db
      .deleteFrom('sesion_entrenamiento')
      .where('id', '=', id)
      .execute();
  }
}