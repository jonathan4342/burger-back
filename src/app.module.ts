/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'hamburgueseria',
      entities: [Usuario,Estado],
      synchronize: true,
    }),ConfigModule.forRoot({ isGlobal: true }), ProductoModule, CorreoModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
