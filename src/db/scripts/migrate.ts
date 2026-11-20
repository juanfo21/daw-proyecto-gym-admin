import * as path from 'path';
import { pathToFileURL } from 'url';
import { promises as fs } from 'fs';
import { FileMigrationProvider, Migrator } from 'kysely/migration';
import { db } from '../config';

async function migrateToLatest() {
  const migrator = new Migrator({
    migrationTableName: 'kysely_migration',
    migrationLockTableName: 'kysely_migration_lock',
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: path.join(
        process.cwd(), 'src/db/migration'
        ),
      import: (file) => import(pathToFileURL(file).href)
    })
  });

  const { error, results } = await migrator.migrateToLatest();

  results?.forEach((result) => {
    if (result.status === 'Success') {
      console.log(`Migracion aplicada: ${result.migrationName}`);
    } else if (result.status === 'Error') {
      console.error(`Error en la migracion: ${result.migrationName}`);
    }
  });

  if (error) {
    console.error('Error durante las migraciones:', error);
    process.exit(1);
  }

  await db.destroy();
}

migrateToLatest();