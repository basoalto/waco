

export interface UserI {
    nombre: string;
    edad: number;
    correo: string;
    uid: string;
    password: string;
    perfil: 'alumno'| 'profesor',
    foto: string;
}