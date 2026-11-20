import { Request, Response, NextFunction } from 'express';
import { AppError } from './errors';
import { respuestaError } from './http-response';

export function manejarErrores(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    return respuestaError(
      res,
      error.codigo,
      error.message,
      error.detalles
    );
  }

  console.error('Error inesperado:', error);

  return respuestaError(
    res,
    500,
    'Error interno del servidor'
  );
}