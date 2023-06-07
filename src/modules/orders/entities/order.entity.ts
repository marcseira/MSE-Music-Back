import { ApiProperty } from '@nestjs/swagger';
import { Cart } from 'src/modules/cart/entities/cart.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Order {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty()
  @OneToOne(() => Cart)
  @JoinColumn()
  cart: Cart;

  @ApiProperty()
  @Column("text")
  order_email: string;

  @ApiProperty()
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  order_date: string;
}