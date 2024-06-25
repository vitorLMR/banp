import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export default class PaginationDTO {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  public take: number;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  public page: number;
}
