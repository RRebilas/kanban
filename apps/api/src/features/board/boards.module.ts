import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { PrismaService } from '@kanban/prisma';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService, PrismaService],
})
export class BoardsModule {}
