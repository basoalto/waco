import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Registro } from '../interfaces/registro.model';
import { ResgistroPageModule } from '../pages/resgistro/resgistro.module';
import { FirebaseService } from './firebase.service';
import { filter, concatAll, toArray, tap, map, switchMap} from 'rxjs/operators'
import { from, of, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  historial: string = 'registros';
  guardados: Registro[] = [];
  
  
  private _storage: Storage | null = null;

  constructor(private storage: Storage,
              private navController: NavController,
              private firebaseSevice: FirebaseService,
              private authFirebase: AngularFireAuth) { 
  
    this.init()
//cargar Data
    this.cargarStorage();
  }

  async cargarStorage(){
    this.guardados = (await this._storage.get(this.historial)) || [];
  }

  guardarRegistro(nuevoRegistro: Registro){
      //await this.cargarStorage();

      const id = this.firebaseSevice.createIdDoc()
      this.firebaseSevice.createDoc(nuevoRegistro.convertirDatos(), this.historial, id)


      //if (this.registroExiste(nuevoRegistro)) {
      //  return;
      //  //el UNSHIFT sirve para guardar al principio del arreglo
      //  // this.guardados.unshift(nuevoRegistro)
      //  // this._storage.set('registros', this.guardados)
      //}
    }

  verificarRegistroExistente(nuevoRegistro: Registro, currentUserId: string): Observable<boolean> {
    return this.firebaseSevice.getCollection<Registro>('registros')
    .pipe(
      map(regs => regs.filter(reg => reg.userId == currentUserId)),
      map(regs => regs.filter(reg => nuevoRegistro.claseExiste(reg))),
      map(regs => regs.length > 0)
    )
  }

  async obtenerUserId(){
    const User = await this.authFirebase.currentUser
    return User.uid
  }

  abrirRegistro(){
    this.navController.navigateForward('/historial');
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }


}
