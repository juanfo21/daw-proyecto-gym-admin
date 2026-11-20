import { db } from '../db/config';
import {NewPago,Pago,PagoUpdate} from '../db/types';

export class PagoModel {
  async crear(datos: NewPago): Promise<Pago> {
    const resultado = await db
      .insertInto('pago')
      .values(datos)
      .executeTakeFirstOrThrow();

    const pago = await this.obtenerPorId(
      Number(resultado.insertId)
    );

    return pago as Pago;
  }

  async obtenerPorId(id: number): Promise<Pago | undefined> {
    return db
      .selectFrom('pago')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();
  }

  async obtenerPorUsuario(idUsuario: number): Promise<Pago[]> {
    return db
      .selectFrom('pago')
      .selectAll()
      .where('id_usuario', '=', idUsuario)
      .orderBy('fecha_pago', 'desc')
      .execute();
  }

  async obtenerTodos(): Promise<Pago[]> {
    return db
      .selectFrom('pago')
      .selectAll()
      .orderBy('fecha_pago', 'desc')
      .execute();
  }

  async actualizar(id: number,datos: PagoUpdate){
    await db
      .updateTable('pago')
      .set(datos)
      .where('id', '=', id)
      .execute();
  }

  async eliminar(id: number){
    await db
      .deleteFrom('pago')
      .where('id', '=', id)
      .execute();
  }
}