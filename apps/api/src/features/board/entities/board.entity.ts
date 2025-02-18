import { board } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BoardEntity implements board {
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
