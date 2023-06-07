import { ApiProperty } from '@nestjs/swagger';
import { Song } from 'src/modules/songs/entities/song.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Cart {
    @ApiProperty()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ApiProperty()
    @Column("boolean")
    active: boolean;

    @ApiProperty()
    @ManyToMany(() => Song, (song: Song) => song.cart,)
    @JoinTable()
    songs: Song[];

    @ApiProperty()
    @ManyToOne(() => User, (user:  User) => user.cart)
    user: User;
}