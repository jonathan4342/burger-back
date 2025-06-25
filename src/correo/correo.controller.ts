/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CorreoService } from './correo.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { IShoppingCart } from './correo.inteface';

@Controller('correo')
export class CorreoController {
  constructor(private readonly correoService: CorreoService) { }
  @UseGuards(JwtAuthGuard)
  @Post('enviar')
  async confirmarPedido(@Body() data: IShoppingCart) {
    const total = data.shopping.reduce((acc, item) => acc + item.totalPrice * item.quantity, 0);


    await this.correoService.enviarCorreoPedido({total: total.toFixed(2),...data});
    return {
      message: 'Pedido confirmado y correo enviado',
    };
  }
}
