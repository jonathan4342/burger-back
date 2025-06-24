// src/correo/correo.module.ts
import { Module } from '@nestjs/common';
import { CorreoService } from './correo.service';
import { CorreoController } from './correo.controller';

@Module({
  providers: [CorreoService],
  exports: [CorreoService],
  controllers: [CorreoController],
})
export class CorreoModule {}
