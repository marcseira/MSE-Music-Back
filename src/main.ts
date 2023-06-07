import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import multer from 'multer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();  
  //Angular 
  app.enableCors();
  app.useLogger(logger);

  const config = new DocumentBuilder()
    .setTitle('MSE MUSIC API')
    .setDescription('Peticiones backend')
    .setVersion('1.0')
    .addTag('Petitions')
    .build();
    
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document, {
      explorer: true,
      swaggerOptions: {
        filter: true,
        showRequestDuration: true,
      }
    });


  await app.listen(3000);
}
bootstrap();
