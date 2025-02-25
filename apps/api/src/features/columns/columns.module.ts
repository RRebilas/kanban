import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { BoardsModule } from '../board/boards.module';
import { PrismaModule } from '@kanban/prisma';

@Module({
  imports: [BoardsModule, PrismaModule],
  controllers: [ColumnsController],
  providers: [ColumnsService],
  exports: [ColumnsService],
})
export class ColumnsModule {}
