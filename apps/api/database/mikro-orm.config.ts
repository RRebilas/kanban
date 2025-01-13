import { Board } from '@kanban/entities';
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Logger } from '@nestjs/common';

const logger = new Logger('MikroOrm');

export default defineConfig({
  driver: PostgreSqlDriver,
  host: 'localhost',
  port: 5432,
  debug: true,
  user: 'admin',
  password: 'admin',
  dbName: 'kanban',
  entities: [Board],
  entitiesTs: [Board],
  logger: logger.log.bind(logger),
  migrations: {
    path: 'apps/api/database/migrations',
    glob: '!(*.d).{js,ts}',
  },
});
