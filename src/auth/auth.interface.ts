/* eslint-disable prettier/prettier */
export interface IAuthLogin {
    correo: string;
    contrasena: string;
}
export interface IAuthLoginResponse {
    access_token: string;
    usuario?: IUsuario;
}

export interface RegisterDto {
    nombre: string;
    correo: string;
    contrasena: string;
}
export interface IUsuario {
  id: number;
    nombre: string;
    correo: string;
    fechaCreacion: Date;
    estado?: {
        id: number;
        nombre: string;
        descripcion?: string;
    };
}
