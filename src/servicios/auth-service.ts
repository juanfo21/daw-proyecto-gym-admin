import bcrypt from 'bcrypt';
import { UsuarioModel } from '../modelos/usuario.model';
import { AppError } from '../utils/errors';
import { generarToken } from '../utils/jwt';
import { NewUsuario, Usuario } from '../db/types';

export class AuthService {
  private usuarioModel = new UsuarioModel();

  async registrar(datos: NewUsuario): Promise<Omit<Usuario, 'password_hash'>> {
    const emailExistente = await this.usuarioModel.obtenerPorEmail(datos.email);

    if (emailExistente) {
      throw new AppError(422, 'El email ya está registrado');
    }

    const passwordCifrada = await bcrypt.hash(datos.password_hash, 12);

    const usuario = await this.usuarioModel.crear({
      ...datos,
      password_hash: passwordCifrada,
      rol: datos.rol ?? 'usuario'
    });

    return this.ocultarPassword(usuario);
  }

  async iniciarSesion(email: string, password: string) {
    const usuario = await this.usuarioModel.obtenerPorEmail(email);

    if (!usuario) {
      throw new AppError(401, 'Email o contraseña incorrectos');
    }

    const passwordValida = await bcrypt.compare(password, usuario.password_hash);

    if (!passwordValida) {
      throw new AppError(401, 'Email o contraseña incorrectos');
    }

    const token = generarToken({
      id: usuario.id,
      rol: usuario.rol
    });

    return {
      token,
      usuario: this.ocultarPassword(usuario)
    };
  }

  private ocultarPassword(usuario: Usuario) {
    const { password_hash, ...datosPublicos } = usuario;

    return datosPublicos;
  }
}