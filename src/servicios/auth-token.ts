import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errors';
import { verificarToken, TokenPayload } from '../utils/jwt';

declare global {
  namespace Express {
    interface Request {
      usuario?: TokenPayload;
    }
  }
}

export function authToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const cabecera = req.headers.authorization;

    if (!cabecera || !cabecera.startsWith('Bearer ')) {
      throw new AppError(401, 'Token de autenticación no proporcionado');
    }

    const token = cabecera.split(' ')[1];

    req.usuario = verificarToken(token);

    next();
  } catch (error) {
    next(error);
  }
}
