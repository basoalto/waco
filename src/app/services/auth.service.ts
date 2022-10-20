import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserI } from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFirebase: AngularFireAuth) { }

 login(correo: string, passsword: string){
// para que no me devielva una promesa le envio un return.
   return  this.authFirebase.signInWithEmailAndPassword(correo,passsword)
 }

 logout(){
  this.authFirebase.signOut()
 }

 registrarUser(datos: UserI){
  return this.authFirebase.createUserWithEmailAndPassword(datos.correo, datos.password)
 }

 stateUser(){
  return this.authFirebase.authState
 }
}

