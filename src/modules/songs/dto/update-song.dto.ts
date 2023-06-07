import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';
import { Category } from 'src/modules/categories/entities/category.entity';

export class UpdateSongDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  title?: string;


  dateAdded: Date; 

  constructor(updateSongDto: UpdateSongDto) {
    Object.assign(this, updateSongDto);
    this.dateAdded = new Date(); // Asignar la fecha actual al crear el objeto
  }

  @ApiProperty()
  @IsOptional()
  @IsString()
  artist?: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  tempo?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  remixer?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  thumbnail?: string;

  @ApiProperty()
  @IsOptional()
  audio?: string;

  @ApiProperty()
  @IsString()
  category: Category;
}
