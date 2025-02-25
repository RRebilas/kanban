import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@kanban/prisma';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';

@Injectable()
export class ColumnsService {
  private readonly logger = new Logger(ColumnsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(boardKey: string, column: CreateColumnDto) {
    const { position: lastKnownPosition } = await this.prisma.column.findFirst({
      orderBy: { position: 'desc' },
      select: { position: true },
    });

    //TODO: handle name uniqueness

    return this.prisma.column.create({
      data: {
        ...column,
        board: { connect: { key: boardKey } },
        position: (lastKnownPosition || 0) + 1,
      },
    });
  }

  findOne(boardKey: string, columnName: string) {
    return this.prisma.column.findFirst({
      where: {
        board_key: boardKey,
        name: columnName,
      },
    });
  }

  findAll(boardKey: string) {
    return this.prisma.column.findMany({ where: { board_key: boardKey } });
  }

  update(boardKey: string, columnName: string, updateColumnDto: UpdateColumnDto) {
    return this.prisma.column.update({
      where: {
        board_key_name: {
          board_key: boardKey,
          name: columnName,
        },
      },
      data: updateColumnDto,
    });
  }

  remove(boardKey: string, columnName: string) {
    return this.prisma.column.delete({
      where: {
        board_key_name: {
          board_key: boardKey,
          name: columnName,
        },
      },
    });
  }
}
