import { db } from '../db/config';
import {Maquina,MaquinaUpdate,NewMaquina} from '../db/types';

export class MaquinaModel {
  async crear(datos: NewMaquina): Promise<Maquina> {
    const resultado = await db
      .insertInto('maquina')
      .values(datos)
      .executeTakeFirstOrThrow();

    const maquina = await this.obtenerPorId(
      Number(resultado.insertId)
    );

    return maquina as Maquina;
  }

  async obtenerTodas(): Promise<Maquina[]> {
    return db
      .selectFrom('maquina')
      .selectAll()
      .orderBy('name', 'asc')
      .execute();
  }

  async obtenerPorId(id: number): Promise<Maquina | undefined> {
    return db
      .selectFrom('maquina')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();
  }

  async actualizar(id: number,datos: MaquinaUpdate){
    await db
      .updateTable('maquina')
      .set(datos)
      .where('id', '=', id)
      .execute();
  }

  async eliminar(id: number){
    await db
      .deleteFrom('maquina')
      .where('id', '=', id)
      .execute();
  }
}