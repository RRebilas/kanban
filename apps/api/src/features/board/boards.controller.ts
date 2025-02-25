import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BoardEntity } from './entities/board.entity';

@Controller('boards')
@ApiTags('boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Get()
  @ApiResponse({ type: Array<BoardEntity> })
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':key')
  @ApiResponse({ type: BoardEntity })
  findOne(@Param('key') key: string) {
    return this.boardService.findOne(key);
  }

  @Patch(':key')
  update(@Param('key') key: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(key, updateBoardDto);
  }

  @Delete(':key')
  remove(@Param('key') key: string) {
    return this.boardService.remove(key);
  }
}
