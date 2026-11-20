import { Response } from 'express';

interface DatosRespuesta {
  [key: string]: unknown;
}

export function respuestaExito(
  res: Response,
  codigo: number,
  mensaje: string,
  datos?: DatosRespuesta | DatosRespuesta[] | null
) {
  return res.status(codigo).json({
    success: true,
    message: mensaje,
    ...(datos !== undefined ? { data: datos } : {})
  });
}

export function respuestaError(
  res: Response,
  codigo: number,
  mensaje: string,
  errores?: Record<string, string>
) {
  return res.status(codigo).json({
    success: false,
    message: mensaje,
    ...(errores ? { errors: errores } : {})
  });
}