/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IAuthLogin, IAuthLoginResponse, RegisterDto } from './auth.interface';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}
  @Post('register')
  async register(@Body() body: RegisterDto): Promise<IAuthLoginResponse> {
    const usuario = await this.authService.register(body);
    const token= await this.authService.login(usuario)
     return { usuario,...token};
  }
  @Post('login')
  async login(@Body() body: IAuthLogin):Promise<IAuthLoginResponse> {
    const usuario = await this.authService.validarUsuario(body.correo, body.contrasena);
    const token= await this.authService.login(usuario)
    return { usuario,...token};

  }
}

