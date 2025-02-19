import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { BoardsModule } from './features/board/boards.module';

@Module({
  imports: [ConfigModule.forRoot(), BoardsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
