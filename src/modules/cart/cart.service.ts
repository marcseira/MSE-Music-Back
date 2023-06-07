import { Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(Cart)
        private readonly cartRepository: Repository<Cart>,
    ) { }

  
    async create(CreateCartDto: CreateCartDto): Promise<Cart> {
        return await this.cartRepository.save(CreateCartDto);
      }

    async findAll(): Promise<Cart[]> {
        return this.cartRepository.find({ relations: ['user', 'songs']} );
    }

    async findOne(id: string): Promise<Cart> {
        return this.cartRepository.findOne({ where: { id }, relations: ['user', 'songs']  });
    }

    async update(id: string, UpdateCartDto: UpdateCartDto): Promise<Cart> {
        let toUpdate = await this.cartRepository.findOne({
          where: { id },
        });
    
        let updated = Object.assign(toUpdate, UpdateCartDto);
    
        return this.cartRepository.save(updated);
      }

    async remove(id: string): Promise<void> {
        await this.cartRepository.delete(id);
    }
}
