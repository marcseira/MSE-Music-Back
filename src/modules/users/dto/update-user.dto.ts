import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator";
import { Cart } from "src/modules/cart/entities/cart.entity";

export class UpdateUserDto {
  @ApiProperty()
  @IsBoolean()
  verify?: boolean;

  @ApiProperty()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsString()
  password?: string;

  @ApiProperty()
  @IsString()
  fullname?: string;

  @ApiProperty()
  @IsOptional()
  cart: Cart;
}