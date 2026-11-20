import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../servicios/auth-service';
import { respuestaExito } from '../utils/http-response';

const authService = new AuthService();

export async function registrar(req: Request, res: Response, next: NextFunction) {
  try {
    const usuario = await authService.registrar(req.body);
    return respuestaExito(res, 201, 'Usuario registrado correctamente', usuario);
  } catch (error) {
    next(error);
  }
}

export async function iniciarSesion(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    const resultado = await authService.iniciarSesion(email, password);
    return respuestaExito(res, 200, 'Inicio de sesión exitoso', resultado);
  } catch (error) {
    next(error);
  }
}
