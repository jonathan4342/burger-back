/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({
      origin: 'http://localhost:5173',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
