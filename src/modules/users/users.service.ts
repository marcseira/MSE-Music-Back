import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Cart } from '../cart/entities/cart.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = new User();
        newUser.verify = createUserDto.verify;
        newUser.email = createUserDto.email;
        newUser.password = createUserDto.password;
        newUser.fullname = createUserDto.fullname;
        return await this.userRepository.save(newUser);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find({relations: ['cart']});
    }

    async findOne(id: string): Promise<User> {
        return await this.userRepository.findOne({ where: { id }, relations: ['cart'], });
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const userToUpdate = await this.userRepository.findOne({ where: { id } });
        userToUpdate.verify = updateUserDto.verify;
        userToUpdate.email = updateUserDto.email;
        userToUpdate.password = updateUserDto.password;
        userToUpdate.fullname = updateUserDto.fullname;
        return await this.userRepository.save(userToUpdate);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}
