/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IAuthLogin, IAuthLoginResponse } from './auth.interface';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() body: IAuthLogin):Promise<IAuthLoginResponse> {
    const usuario = await this.authService.validarUsuario(body.correo, body.contrasena);

    return this.authService.login(usuario);
  }
}

