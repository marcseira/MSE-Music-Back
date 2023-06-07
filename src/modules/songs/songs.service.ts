import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Like, Repository } from 'typeorm';
import { Song } from './entities/song.entity';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Category } from '../categories/entities/category.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>
  ) { }

  async create(createSongDto: CreateSongDto): Promise<Song> {
    return await this.songsRepository.save(createSongDto);
  }

  async findAll(): Promise<Song[]> {
    return await this.songsRepository.find({ relations: ['category'], });
  }

  async findOne(id: string): Promise<Song> {
    return await this.songsRepository.findOne({ where: { id }, relations: ['category'], });
  }

  async update(id: string, updateSongDto: UpdateSongDto): Promise<Song> {
    let toUpdate = await this.songsRepository.findOne({
      where: { id },
    });

    let updated = Object.assign(toUpdate, updateSongDto);

    return this.songsRepository.save(updated);
  }
  async delete(id: string): Promise<void> {
    await this.songsRepository.delete(id);
  }

  async searchProducts(title: string): Promise<Song[]> {
    return this.songsRepository.find({
      relations: ['category'],
      where: {
        title: ILike(`%${title}%`),
      },
    });
  }

  async findByCategoryId(categoryId: string): Promise<Song[]> {
    return this.songsRepository.find({
      relations: ['category'],
      where: {
        category: { id: categoryId },
      },
    });
  }
}