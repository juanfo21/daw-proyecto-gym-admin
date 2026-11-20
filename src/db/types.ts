import type { Generated,Selectable,Insertable,Updateable } from 'kysely';

export interface UsuarioTable  {
  id: Generated<number>;
  name: string;
  surname: string;
  dni: string;
  email: string;
  phone: string | null;
  password_hash: string;
  rol:  'administrador' | 'usuario';
  fecha_alta: string;
}
export type Usuario = Selectable<UsuarioTable>;
export type NewUsuario = Insertable<UsuarioTable>;
export type UsuarioUpdate = Updateable<UsuarioTable>;

export interface ZonaTable {
  id: Generated<number>;
  name: string;
  descripcion: string | null;
}
export type Zona = Selectable<ZonaTable>;
export type NewZona = Insertable<ZonaTable>;
export type ZonaUpdate = Updateable<ZonaTable>;

export interface MaquinaTable {
  id: Generated<number>;
  id_zona: number;
  name: string;
  tipo: string;
}
export type Maquina = Selectable<MaquinaTable>;
export type NewMaquina = Insertable<MaquinaTable>;
export type MaquinaUpdate = Updateable<MaquinaTable>;

export interface FranjaHorariaTable {
  id: Generated<number>;
  fecha: string;
  hora_inicio: Date;
  hora_fin: Date;
}
export type FranjaHoraria = Selectable<FranjaHorariaTable>;
export type NewFranjaHoraria = Insertable<FranjaHorariaTable>;
export type FranjaHorariaUpdate = Updateable<FranjaHorariaTable>;

export interface ReservaMaquinaTable {
  id: Generated<number>;
  id_usuario: number;
  id_maquina: number;
  id_franja_horaria: number;
  estado: 'activa' | 'cancelada' | 'finalizada';
  fecha_creacion: string;
}
export type ReservaMaquina = Selectable<ReservaMaquinaTable>;
export type NewReservaMaquina = Insertable<ReservaMaquinaTable>;
export type ReservaMaquinaUpdate = Updateable<ReservaMaquinaTable>;
export interface PagoTable {
  id: Generated<number>;
  id_usuario: number;
  importe: number;
  fecha_pago: string;
  estado: 'pendiente' | 'pagado' | 'fallido';
}
export type Pago = Selectable<PagoTable>;
export type NewPago = Insertable<PagoTable>;
export type PagoUpdate = Updateable<PagoTable>;

export interface EntrenadorTable {
  id: Generated<number>;
  name: string;
  surname: string;
  email: string;
  phone: string | null;
}
export type Entrenador = Selectable<EntrenadorTable>;
export type NewEntrenador = Insertable<EntrenadorTable>;
export type EntrenadorUpdate = Updateable<EntrenadorTable>;

export interface SesionEntrenamientoTable {
  id: Generated<number>;
  id_usuario: number;
  id_entrenador: number;
  id_franja_horaria: number;
}
export type SesionEntrenamiento = Selectable<SesionEntrenamientoTable>;
export type NewSesionEntrenamiento = Insertable<SesionEntrenamientoTable>;
export type SesionEntrenamientoUpdate = Updateable<SesionEntrenamientoTable>;

export interface ClubTable {
  id: Generated<number>;
  id_zona: number;
  name: string;
  descripcion: string | null;
}
export type Club = Selectable<ClubTable>;
export type NewClub = Insertable<ClubTable>;
export type ClubUpdate = Updateable<ClubTable>;

export interface RegistroClubTable {
  id: Generated<number>;
  id_usuario: number;
  id_club: number;
}
export type RegistroClub = Selectable<RegistroClubTable>;
export type NewRegistroClub = Insertable<RegistroClubTable>;
export type RegistroClubUpdate = Updateable<RegistroClubTable>;

export interface DB {
  usuario: UsuarioTable;
  zona: ZonaTable;
  maquina: MaquinaTable;
  franja_horaria: FranjaHorariaTable;
  reserva_maquina: ReservaMaquinaTable;
  pago: PagoTable;
  entrenador: EntrenadorTable;
  sesion_entrenamiento: SesionEntrenamientoTable;
  club: ClubTable;
  registro_club: RegistroClubTable;
}