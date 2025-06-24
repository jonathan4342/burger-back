/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
  ) {}

  async crear(nombre: string, correo: string, contrasena: string) {
    const hash = await bcrypt.hash(contrasena, 10);
    const usuario = this.usuarioRepo.create({ nombre, correo, contrasena: hash });
    return this.usuarioRepo.save(usuario);
  }

  async encontrarPorCorreo(correo: string) {
    return this.usuarioRepo.findOne({ where: { correo } });
  }
}
