import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  cartId: string;

  @ApiProperty()
  order_email: string;

  @ApiProperty({ default: new Date().toISOString() })
  @IsOptional()
  @IsDateString()
  order_date?: string;
   
    
}