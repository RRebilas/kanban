import { ApiProperty } from '@nestjs/swagger';
import { IColumnDto } from '@kanban/dto-core';

export class ColumnDto implements IColumnDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  position: number;

  @ApiProperty()
  status_color: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  board_key: string;
}
