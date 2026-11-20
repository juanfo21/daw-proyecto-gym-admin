import { db } from '../db/config';
import {NewReservaMaquina,ReservaMaquina,ReservaMaquinaUpdate} from '../db/types';

export class ReservaModel {
  async crear(datos: NewReservaMaquina): Promise<ReservaMaquina> {
    const resultado = await db
      .insertInto('reserva_maquina')
      .values(datos)
      .executeTakeFirstOrThrow();

    const reserva = await this.obtenerPorId(
      Number(resultado.insertId)
    );

    return reserva as ReservaMaquina;
  }

  async obtenerPorId(id: number): Promise<ReservaMaquina | undefined> {
    return db
      .selectFrom('reserva_maquina')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();
  }

  async obtenerPorUsuario(idUsuario: number): Promise<ReservaMaquina[]> {
    return db
      .selectFrom('reserva_maquina')
      .selectAll()
      .where('id_usuario', '=', idUsuario)
      .orderBy('fecha_creacion', 'desc')
      .execute();
  }

  async actualizar(id: number,datos: ReservaMaquinaUpdate){
    await db
      .updateTable('reserva_maquina')
      .set(datos)
      .where('id', '=', id)
      .execute();
  }

  async eliminar(id: number){
    await db
      .deleteFrom('reserva_maquina')
      .where('id', '=', id)
      .execute();
  }
}