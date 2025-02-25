import { CreateBoardDto } from './create-board.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateBoardDto extends PartialType(CreateBoardDto) {}
