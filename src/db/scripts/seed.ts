import * as path from 'path';
import { pathToFileURL } from 'url';
import { promises as fs } from 'fs';
import { FileMigrationProvider, Migrator } from 'kysely/migration';
import { db } from '../config';

async function runSeeders() {
  const migrator = new Migrator({
    migrationTableName: 'kysely_seeder',
    migrationLockTableName: 'kysely_seeder_lock',
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: path.join(        
        process.cwd(), 'src/db/seeders'
        ),
      import: (file) => import(pathToFileURL(file).href)
    })
  });

  const { error, results } = await migrator.migrateToLatest();

  results?.forEach((result) => {
    if (result.status === 'Success') {
      console.log(`Seeder ejecutado: ${result.migrationName}`);
    } else if (result.status === 'Error') {
      console.error(`Error en el seeder: ${result.migrationName}`);
    }
  });

  if (error) {
    console.error('Error al ejecutar los seeders:', error);
    process.exit(1);
  }

  await db.destroy();
}

runSeeders();