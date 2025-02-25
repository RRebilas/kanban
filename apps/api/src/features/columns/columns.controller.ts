import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateColumnDto } from './dto/create-column.dto';
import { ColumnEntity } from './entities/column.entity';
import { UpdateColumnDto } from './dto/update-column.dto';

@Controller(':boardKey/columns')
@ApiTags('columns')
export class ColumnsController {
  constructor(private columnsService: ColumnsService) {}

  // TODO: check first for board existence in all methods, return 404 otherwise. With some decorator or else?

  @Post()
  create(@Param('boardKey') boardKey: string, @Body() createColumnDto: CreateColumnDto) {
    return this.columnsService.create(boardKey, createColumnDto);
  }

  @Get()
  @ApiResponse({ type: Array<ColumnEntity> })
  findAll(@Param('boardKey') boardKey: string) {
    return this.columnsService.findAll(boardKey);
  }

  @Get(':columnName')
  @ApiResponse({ type: ColumnEntity })
  findOne(@Param() { boardKey, columnName }: { boardKey: string; columnName: string }) {
    return this.columnsService.findOne(boardKey, columnName);
  }

  @Patch(':columnName')
  update(
    @Param()
    {
      boardKey,
      columnName,
    }: {
      boardKey: string;
      columnName: string;
    },
    @Body() updateColumnDto: UpdateColumnDto
  ) {
    return this.columnsService.update(boardKey, columnName, updateColumnDto);
  }

  @Delete(':columnName')
  delete(@Param() { boardKey, columnName }: { boardKey: string; columnName: string }) {
    return this.columnsService.remove(boardKey, columnName);
  }
}
