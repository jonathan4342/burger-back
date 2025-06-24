import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './producto.entity';
import { TipoProducto } from './tipoProducto.entity';

@Module({
  providers: [ProductoService],
  controllers: [ProductoController],
  exports: [ProductoService],
  imports: [TypeOrmModule.forFeature([Producto, TipoProducto])],
})
export class ProductoModule {}
