import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { BoardsModule } from './features/board/boards.module';
import { ColumnsModule } from './features/columns/columns.module';

@Module({
  imports: [ConfigModule.forRoot(), BoardsModule, ColumnsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
