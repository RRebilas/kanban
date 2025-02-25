import { Injectable } from '@nestjs/common';
import { CreateBoardDto, UpdateBoardDto } from '@kanban/dto-api';
import { PrismaService } from '@kanban/prisma';

@Injectable()
export class BoardsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBoardDto: CreateBoardDto) {
    return this.prisma.board.create({ data: createBoardDto });
  }

  findAll() {
    return this.prisma.board.findMany();
  }

  findOne(key: string) {
    return this.prisma.board.findUnique({ where: { key } });
  }

  update(key: string, updateBoardDto: UpdateBoardDto) {
    return this.prisma.board.update({ where: { key }, data: updateBoardDto });
  }

  remove(key: string) {
    return this.prisma.board.delete({ where: { key } });
  }
}
