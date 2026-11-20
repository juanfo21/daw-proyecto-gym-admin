import jwt from 'jsonwebtoken';

export interface TokenPayload {
  id: number;
  rol: string;
}

export function generarToken(payload: TokenPayload): string {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    } as jwt.SignOptions
  );
}

export function verificarToken(token: string): TokenPayload {
  return jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as TokenPayload;
}