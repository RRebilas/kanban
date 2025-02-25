import { column } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ColumnEntity implements column {
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
