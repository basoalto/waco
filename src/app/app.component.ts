import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { FirebaseService } from './services/firebase.service';
import { UserI } from './interfaces/models';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  login: boolean = false;
  rol: 'alumno' | 'profesor' = null;

  constructor( private auth: AuthService,
               private router: Router,
               private firestore: FirebaseService) {
//esta linea esta pendiente a los estados de autentificacion del usuario
                this.auth.stateUser().subscribe(res=>{
                  if(res){
                    this.login = true;
                    this.getDatosUser(res.uid)
                  } else 
                  {
                    this.login = false;
                  }
                })
               }



  logout(){
    this.auth.logout()
    this.router.navigate(['/login'])
  }


  getDatosUser(uid: string){
    const path = '/USUARIO';
    const id = uid;
    this.firestore.getDoc<UserI>(path, id).subscribe( res =>{
      if(res){
        this.rol = res.perfil;
      }
      })
  }
  
}