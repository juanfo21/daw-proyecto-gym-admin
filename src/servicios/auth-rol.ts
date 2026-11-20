import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errors';

export function verificarRol(...rolesPermitidos: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.usuario) {
        throw new AppError(401, 'Token de autenticación no proporcionado');
      }

      if (!rolesPermitidos.includes(req.usuario.rol)) {
        throw new AppError(
          403,
          'No tienes permisos para realizar esta acción'
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}