import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Song } from 'src/modules/songs/entities/song.entity';

export class CreateCategoryDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    image: string;

    @ApiProperty({ example: { id: "1" } })
    readonly songs: Song[];
}