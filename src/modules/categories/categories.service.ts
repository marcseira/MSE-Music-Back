import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Song } from '../songs/entities/song.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) { }

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return  this.categoriesRepository.save(createCategoryDto);
  }

  findAll(): Promise<Category[]> {
    return  this.categoriesRepository.find({relations: ['songs']});
  }

   findOne(id: string): Promise<Category> {
    return  this.categoriesRepository.findOne({ where: { id }, relations: ['songs'], });
  }

   update(id: string, updateCategoryDto: UpdateCategoryDto,): Promise<Category> {
    let toUpdate = this.categoriesRepository.findOne({
      where: { id },
    });

    let updated = Object.assign(toUpdate, updateCategoryDto);

    return this.categoriesRepository.save(updated);
  }

  async remove(id: string): Promise<void> {
    await this.categoriesRepository.delete(id);
  }
}
