
import { ApiProperty } from '@nestjs/swagger';
import { Cart } from 'src/modules/cart/entities/cart.entity';
import { Category } from 'src/modules/categories/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm';

@Entity()
export class Song {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty()
  @Column("timestamp")
  dateAdded: Date;

  @ApiProperty()
  @Column("text")
  title: string;

  @ApiProperty()
  @Column("text")
  artist: string;

  @ApiProperty()
  @Column("int")
  tempo: number;

  @ApiProperty()
  @Column("text")
  remixer: string;

  @ApiProperty()
  @Column()
  thumbnail: string;

  @ApiProperty()
  @Column()
  audio: string;

  @ApiProperty()
  @ManyToOne(() => Category, category => category.songs)
  category: Category;

  @ManyToMany(
    () => Cart,
    (cart: Cart) => cart.songs,
  )
  cart: Cart[];

}