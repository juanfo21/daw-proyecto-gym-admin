import { Kysely } from 'kysely';
const bcrypt = require('bcrypt');

export async function up(db: Kysely<any>): Promise<void> {
  const adminPassword = await bcrypt.hash('Admin1234!', 12);
  const socioPassword1 = await bcrypt.hash('Socio1234!', 12);
  const socioPassword2 = await bcrypt.hash('Socio12345!', 12);
  const socioPassword3 = await bcrypt.hash('Socio123456!', 12);

  await db
    .insertInto('usuario')
    .values([
      {
        name: 'Administrador',
        surname: 'Nistrador Admi',
        dni: '00000000A',
        email: 'admin@gmail.com',
        phone: '600000001',
        password_hash: adminPassword,
        fecha_alta: new Date(Date.now())
      },
      {
        name: 'Juan',
        surname: 'Fernandez Ordiales',
        dni: '12345678A',
        email: 'socio1@gmail.com',
        phone: '600000002',
        password_hash: socioPassword1,
        fecha_alta: new Date(Date.now())
      },
      {
        name: 'Pedro',
        surname: 'Garcia Lorca',
        dni: '12345678B',
        email: 'socio2@gmail.com',
        phone: '600000003',
        password_hash: socioPassword2,
        fecha_alta: new Date(Date.now())
      },
      {
        name: 'Fernando',
        surname: 'Fernandez Ordiales',
        dni: '12345678C',
        email: 'socio3@gmail.com',
        phone: '600000004',
        password_hash: socioPassword3,
        fecha_alta: new Date(Date.now())
      }
    ])
    .execute();
}