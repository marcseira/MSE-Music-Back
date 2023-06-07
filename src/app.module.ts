import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './modules/orders/orders.module';
import { CartModule } from './modules/cart/cart.module';
import { SongsModule } from './modules/songs/songs.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { CategoriesController } from './modules/categories/categories.controller';
import { CategoriesService } from './modules/categories/categories.service';
import { OrdersController } from './modules/orders/orders.controller';
import { SongsController } from './modules/songs/songs.controller';

import { OrdersService } from './modules/orders/orders.service';
import { SongsService } from './modules/songs/songs.service';
import { CartController } from './modules/cart/cart.controller';

import { CartService } from './modules/cart/cart.service';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { AppService } from './app.service';
import { UsersService } from './modules/users/users.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'mse_music',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }),
  MulterModule.register({
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const filename = `${uniqueSuffix}-${file.originalname}`;
        callback(null, filename);
      },
    }),
  }),
    UsersModule,
    OrdersModule,
    CartModule,
    SongsModule,
    CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
