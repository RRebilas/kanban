import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardDto, CreateBoardDto, UpdateBoardDto } from '@kanban/dto-api';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('boards')
@ApiTags('boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Get()
  @ApiResponse({ type: Array<BoardDto> })
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':key')
  @ApiResponse({ type: BoardDto })
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
