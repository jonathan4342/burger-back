/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Estado } from './entities/estado.entity';
import { ProductoModule } from './producto/producto.module';
import { CorreoModule } from './correo/correo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsuarioModule, AuthModule,TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || 'root',
      database: process.env.DATABASE || 'nest_db',
      entities: [Usuario,Estado],
      synchronize: false,
    }),ConfigModule.forRoot({ isGlobal: true }), ProductoModule, CorreoModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
