/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Estado } from 'src/entities/estado.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TipoProducto } from './tipoProducto.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  precio: number;

  @ManyToOne(() => TipoProducto, tipo => tipo.productos)
  @JoinColumn({ name: 'tipo_producto' })
  tipoProducto: TipoProducto;

  @ManyToOne(() => Estado)
  @JoinColumn({ name: 'estado_id' })
  estado: Estado;
}
