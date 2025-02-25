import { ApiProperty } from '@nestjs/swagger';
import { IBoardDto } from '@kanban/dto-core';

export class BoardDto implements IBoardDto {
  @ApiProperty({ uniqueItems: true })
  key: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
