import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Registro } from '../interfaces/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Registro[] = [];
  
  private _storage: Storage | null = null;

  constructor(private storage: Storage,
              private navController: NavController) { 
  
    this.init()
//cargar Data
    this.cargarStorage();

  
  }

  async cargarStorage(){
    this.guardados = (await this._storage.get('registros')) || [];
  }

  async guardarRegistro(format: string, text: string){
    await this.cargarStorage();
    const nuevoRegistro = new Registro(format, text);
    if (!this.registroExiste(nuevoRegistro)) {
      //el UNSHIFT sirve para guardar al principio del arreglo
    this.guardados.unshift(nuevoRegistro)

    this._storage.set('registros', this.guardados)
    }
    console.log(nuevoRegistro);
  }

abrirRegistro(){
  this.navController.navigateForward('/historial');
}

async init(){
  const storage = await this.storage.create();
  this._storage = storage;
}

registroExiste(nuevaClase: Registro): boolean {
  const registros  = this.guardados.filter(
    (registro) => 
    registro.horaClase == nuevaClase.horaClase && registro.fechaClase == nuevaClase.fechaClase
  )
  
  return registros.length > 0
}
}
