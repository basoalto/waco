

export interface UserI {
    nombre: string;
    edad: number;
    correo: string;
    uid: string;
    password: string;
    perfil: 'alumno'| 'profesor',
    foto: string;
}


export interface Cliente {
    uid: string;
    email: string;
    nombre: string;
    celular: string;
    foto: string;
    referencia: string,
    ubicacion: {
        lat: number;
        log: number;
    };
}