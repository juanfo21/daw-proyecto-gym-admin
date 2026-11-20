import type { Generated } from 'kysely';

export interface Usuario {
  id: Generated<number>;
  name: string;
  surname: string;
  dni: string;
  email: string;
  phone: string | null;
  password_hash: string;
  fecha_alta: string;
}

export interface Zona {
  id: Generated<number>;
  name: string;
  descripcion: string | null;
}

export interface Maquina {
  id: Generated<number>;
  id_zona: number;
  name: string;
  tipo: string;
}

export interface FranjaHoraria {
  id: Generated<number>;
  fecha: string;
  hora_inicio: Date;
  hora_fin: Date;
}

export interface ReservaMaquina {
  id: Generated<number>;
  id_usuario: number;
  id_maquina: number;
  id_franja_horaria: number;
  estado: 'activa' | 'cancelada' | 'finalizada';
  fecha_creacion: string;
}

export interface Pago {
  id: Generated<number>;
  id_usuario: number;
  importe: number;
  fecha_pago: string;
  estado: 'pendiente' | 'pagado' | 'fallido';
}

export interface Entrenador {
  id: Generated<number>;
  name: string;
  surname: string;
  email: string;
  phone: string | null;
}

export interface SesionEntrenamiento {
  id: Generated<number>;
  id_usuario: number;
  id_entrenador: number;
  id_franja_horaria: number;
}

export interface Club {
  id: Generated<number>;
  id_zona: number;
  name: string;
  descripcion: string | null;
}

export interface RegistroClub {
  id: Generated<number>;
  id_usuario: number;
  id_club: number;
}

export interface DB {
  usuario: Usuario;
  zona: Zona;
  maquina: Maquina;
  franja_horaria: FranjaHoraria;
  reserva_maquina: ReservaMaquina;
  pago: Pago;
  entrenador: Entrenador;
  sesion_entrenamiento: SesionEntrenamiento;
  club: Club;
  registro_club: RegistroClub;
}