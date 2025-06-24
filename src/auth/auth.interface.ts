/* eslint-disable prettier/prettier */
export interface IAuthLogin {
    correo: string;
    contrasena: string;
}
export interface IAuthLoginResponse {
    access_token: string;
}

export interface IUsuario {
  id: number;
    nombre: string;
    apellido: string;
    correo: string;
    fechaCreacion: Date;
    estado?: {
        id: number;
        nombre: string;
        descripcion?: string;
    };
}
