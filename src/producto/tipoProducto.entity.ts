/* eslint-disable prettier/prettier */
import { Estado } from 'src/entities/estado.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Producto } from './producto.entity';

@Entity()
export class TipoProducto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  descripcion: string;

  @ManyToOne(() => Estado)
  @JoinColumn({ name: 'estado_id' })
  estado: Estado;

  @OneToMany(() => Producto, producto => producto.tipoProducto)
  productos: Producto[];
}
