import { ApiProperty } from '@nestjs/swagger';
import { Cart } from 'src/modules/cart/entities/cart.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty()
  @Column("boolean")
  verify: boolean;

  @ApiProperty()
  @Column("text")
  email: string;

  @ApiProperty()
  @Column("text")
  password: string;

  @ApiProperty()
  @Column("text")
  fullname: string;

  @ApiProperty()
  @OneToMany(() => Cart, (cart: Cart) => cart.user)
  cart: Cart[]
}