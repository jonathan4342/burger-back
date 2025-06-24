/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CorreoService } from './correo.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('correo')
export class CorreoController {
   constructor(private readonly correoService: CorreoService) {}
   @UseGuards(JwtAuthGuard)
   
    @Post('enviar')
      async confirmarPedido(@Body() data: any) {
    await this.correoService.enviarCorreoPedido(data);
    return {
      message: 'Pedido confirmado y correo enviado',
    };
  }
}
