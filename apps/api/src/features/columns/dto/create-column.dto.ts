import { ApiProperty } from '@nestjs/swagger';

export class CreateColumnDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  statusColor?: string;
}
