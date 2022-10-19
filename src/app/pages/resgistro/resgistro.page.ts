import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/interfaces/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.page.html',
  styleUrls: ['./resgistro.page.scss'],
})
export class ResgistroPage implements OnInit {

  datos: UserI={ 
    nombre: null,
    correo: null,
    edad: null,
    password: null,
    uid: null,
    foto: null,
    perfil: 'visitante'
  }
  constructor(private auth: AuthService,
             private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  async registrar(){
    console.log(this.datos)
    const res = await this.auth.registrarUser(this.datos).catch( error=> {
      console.log('error')
    })
    if(res){
      console.log('exito al crear usuario')
      const path = 'USUARIO';
      const id = res.user.uid
      this.datos.uid = id
      this.datos.password = null
      await this.firebaseService.createDoc(this.datos, path, id)
      
    }

  }

}
