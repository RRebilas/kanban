import { ApiProperty } from '@nestjs/swagger';
import { ICreateColumnDto } from '@kanban/dto-core';

export class CreateColumnDto implements ICreateColumnDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  statusColor?: string;
}
