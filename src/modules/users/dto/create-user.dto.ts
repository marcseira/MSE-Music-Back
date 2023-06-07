import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Cart } from 'src/modules/cart/entities/cart.entity';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  verify: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fullname: string;


  @ApiProperty()
  @IsOptional()
  cart: Cart;
}