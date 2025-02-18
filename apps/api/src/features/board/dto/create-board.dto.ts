import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @ApiProperty({ nullable: false })
  key: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, default: true })
  description?: string;
}
