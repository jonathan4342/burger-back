/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
 
@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}
  @UseGuards(JwtAuthGuard)
  
  @Get('/all')

  async obtenerAgrupados() {
    return this.productoService.obtenerProductosAgrupados();
  }
}