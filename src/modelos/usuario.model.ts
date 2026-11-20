import { db } from '../db/config';
import {NewUsuario,Usuario,UsuarioUpdate} from '../db/types';

export class UsuarioModel {

  async crear(datos: NewUsuario): Promise<Usuario> {
    const resultado = await db
      .insertInto('usuario')
      .values(datos)
      .executeTakeFirstOrThrow();

    const usuario = await this.obtenerPorId(
      Number(resultado.insertId)
    );

    return usuario as Usuario;
  }


  async obtenerTodos(): Promise<Usuario[]>{
    return db
      .selectFrom('usuario')
      .selectAll()
      .orderBy('name', 'asc')
      .execute();
  }

  async obtenerPorId(id: number): Promise<Usuario | undefined> {
    return db
      .selectFrom('usuario')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();
  }

  async obtenerPorEmail(email: string): Promise<Usuario | undefined> {
    return db
      .selectFrom('usuario')
      .selectAll()
      .where('email', '=', email)
      .executeTakeFirst();
  }

  async obtenerPorDni(dni: string): Promise<Usuario | undefined> {
    return db
      .selectFrom('usuario')
      .selectAll()
      .where('dni', '=', dni)
      .executeTakeFirst();
  }

  async actualizar(id: number,datos: UsuarioUpdate){
    await db
      .updateTable('usuario')
      .set(datos)
      .where('id', '=', id)
      .execute();
  }

  async eliminar(id: number){
    await db
      .deleteFrom('usuario')
      .where('id', '=', id)
      .execute();
  }
}