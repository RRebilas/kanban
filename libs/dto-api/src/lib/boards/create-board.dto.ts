import { ApiProperty } from '@nestjs/swagger';
import { ICreateBoardDto } from '@kanban/dto-core';

export class CreateBoardDto implements ICreateBoardDto {
  @ApiProperty({ nullable: false })
  key: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, default: true })
  description?: string;
}
