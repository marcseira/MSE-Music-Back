import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
import { Category } from '../../categories/entities/category.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@nestjs/common';

export class CreateSongDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  dateAdded: Date; 

  constructor(createDongDto: CreateSongDto) {
    Object.assign(this, createDongDto);
    this.dateAdded = new Date(); // Asignar la fecha actual al crear el objeto
  }

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  artist: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  tempo: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  remixer: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  thumbnail: string;

  @ApiProperty()
  @IsNotEmpty()
  audio: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
 readonly category: Category;
}
