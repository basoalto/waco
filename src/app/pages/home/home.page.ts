import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Usuario } from '../../interfaces/interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
username:string='';
  constructor(
    // private router:Router,
    // private activatedRouter:ActivatedRoute,
    // private menu:MenuController,
    public firebaseService: FirebaseService
  ) {}

  guardar(){
    const path = 'usuarios/';
    const newUser: Usuario ={
      nombre: 'juan',
      apellido: 'contreras',
      profesion: 'medico',
      edad: 34,
      nivel: 4,
//id: this.firebaseService.createIdDoc()
    }
    this.firebaseService.createDoc<Usuario>(newUser, path).then( res =>{ 
      console.log(res)
    })
  }
}

