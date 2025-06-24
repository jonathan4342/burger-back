/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from '../usuario/usuario.service';
import { IUsuario } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async validarUsuario(correo: string, contrasena: string) {
    const usuario = await this.usuarioService.encontrarPorCorreo(correo);
    if (usuario && await bcrypt.compare(contrasena, usuario.contrasena)) {
      const { contrasena, ...resto } = usuario;
      return resto;
    }
    throw new UnauthorizedException('Credenciales incorrectas');
  }

  async login(usuario: IUsuario) {
    const payload = { username: usuario.correo, sub: usuario.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
