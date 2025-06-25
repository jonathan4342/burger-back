/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import {  Item, MenuData } from './producto.interface';

@Injectable()
export class ProductoService {
  constructor(private dataSource: DataSource) {}

  async obtenerProductosAgrupados(): Promise<MenuData> {
    const rawData = await this.dataSource.query(`
      SELECT 
        tp.descripcion AS tipo_producto,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', p.id,
            'nombre', p.nombre,
            'descripcion', p.descripcion,
            'precio', p.precio
          )
        ) AS productos
      FROM producto p
      JOIN tipo_producto tp ON p.tipo_producto = tp.id
      WHERE p.estado_id = 1
      GROUP BY tp.descripcion;
    `);

    const resultado: Record<string, Item[]> = {};


    for (const fila of rawData) {
      resultado[fila.tipo_producto] = fila.productos;
    }

    return resultado as unknown as MenuData;
;

  }
}