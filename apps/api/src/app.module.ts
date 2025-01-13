import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from '../database/mikro-orm.config';

@Module({
  imports: [MikroOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
