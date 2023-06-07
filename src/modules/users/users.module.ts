import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from '../cart/cart.service';
import { CartController } from '../cart/cart.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], 
  controllers: [UsersController, ],
  providers: [UsersService, ]
})
export class UsersModule {}
