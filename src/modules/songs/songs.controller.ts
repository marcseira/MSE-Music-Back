import { Controller, Get, Post, Body, Param, Delete, HttpException, HttpStatus, Res, ParseIntPipe, Patch, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { Song } from './entities/song.entity';
import { SongsService } from './songs.service';
import { Response } from 'express';
import { ApiConsumes, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateCategoryDto } from '../categories/dto/update-category.dto';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { identity } from 'rxjs';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Song')
@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) { }

  @Post()
  @UseInterceptors(FileInterceptor('audio'))
  create(@Body() CreateSongDto: CreateSongDto): Promise<Song> {
    return this.songsService.create(CreateSongDto);
  }
  
  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateSongDto) {
    return this.songsService.update(id, updateBookDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.songsService.delete(id);
  }

  @Get(':id/audio')
  async getAudio(@Param('id') id: string, @Res() res: Response): Promise<void> {
    const song = await this.songsService.findOne(id);
    if (!song) {
      throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
    }
    const audioBuffer = song.audio;
    const audioMimeType = 'audio/mpeg';
    res.set('Content-Type', audioMimeType);
    res.send(audioBuffer);
  }

  @Get('/title/:busqueda')
  searchProducts(@Param('busqueda') busqueda: string): Promise<Song[]> {
    return this.songsService.searchProducts(busqueda);
  }

  @Get('/categoryId/:categoryId')
  @ApiOperation({ summary: 'Filtrar canciones por categoría' })
  findSongsByCategoryId(@Param('categoryId') categoryId: string): Promise<Song[]> {
    return this.songsService.findByCategoryId(categoryId);
  }


}
