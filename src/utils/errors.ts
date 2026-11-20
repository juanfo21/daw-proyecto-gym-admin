export class AppError extends Error {
  public codigo: number;
  public detalles?: Record<string, string>;

  constructor(
    codigo: number,
    mensaje: string,
    detalles?: Record<string, string>
  ) {
    super(mensaje);
    this.codigo = codigo;
    this.detalles = detalles;
  }
}