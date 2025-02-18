import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardDto } from './create-board.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateBoardDto extends PartialType(OmitType(CreateBoardDto, ['key'] as const)) {}
