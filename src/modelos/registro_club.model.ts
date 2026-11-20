import { db } from '../db/config';
import {NewRegistroClub,RegistroClub,RegistroClubUpdate} from '../db/types';

export class RegistroClubModel {
  async crear(datos: NewRegistroClub): Promise<RegistroClub> {
    const resultado = await db
      .insertInto('registro_club')
      .values(datos)
      .executeTakeFirstOrThrow();

    const registro = await this.obtenerPorId(
      Number(resultado.insertId)
    );

    return registro as RegistroClub;
  }

  async obtenerPorId(id: number): Promise<RegistroClub | undefined> {
    return db
      .selectFrom('registro_club')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();
  }

  async obtenerPorUsuario(idUsuario: number): Promise<RegistroClub[]> {
    return db
      .selectFrom('registro_club')
      .selectAll()
      .where('id_usuario', '=', idUsuario)
      .execute();
  }

  async actualizar(id: number,datos: RegistroClubUpdate){
    await db
      .updateTable('registro_club')
      .set(datos)
      .where('id', '=', id)
      .execute();
  }

  async eliminar(id: number){
    await db
      .deleteFrom('registro_club')
      .where('id', '=', id)
      .execute();
  }
}