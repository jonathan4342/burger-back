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
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsuarioModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST') || 'localhost',
        port: Number(configService.get<string>('DATABASE_PORT')) || 3306,
        username: configService.get<string>('DATABASE_USER') || 'root',
        password: configService.get<string>('DATABASE_PASSWORD') || 'root',
        database: configService.get<string>('DATABASE') || 'nest_db',
        entities: [Usuario, Estado],
        synchronize: false,
      }),
    }),
    ProductoModule,
    CorreoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
