import { ApiProperty } from '@nestjs/swagger';
import { Song } from 'src/modules/songs/entities/song.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Entity()
export class Category {
    @ApiProperty()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ApiProperty()
    @Column("text")
    name: string;
    
    @ApiProperty()
    @Column("text")
    description: string;

    @ApiProperty()
    @Column("text")
    image: string;

    @ApiProperty()
    @OneToMany(() => Song, (song: Song) => song.category)
    songs: Song[];
}