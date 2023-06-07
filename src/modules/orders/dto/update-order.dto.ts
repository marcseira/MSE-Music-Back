import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsDateString, IsString } from 'class-validator';

export class UpdateOrderDto {
  @ApiProperty()
  @IsString()
  cartId?: string;

  @ApiProperty()
  @IsString()
  order_email?: string;

  @ApiProperty({ default: new Date().toISOString() })
  @IsOptional()
  @IsDateString()
  order_date?: string;


}