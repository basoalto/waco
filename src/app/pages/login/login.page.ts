import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import 'animate.css';
import { AuthService } from 'src/app/services/auth.service';
import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  credenciales ={
    correo: null,
    password: null
  }
  constructor(private auth: AuthService,
              private router: Router,
              private alertController: AlertController) {}

  ngOnInit() {}
  
  async login(){
      //console.log('credenciales => ', this.credenciales)
       const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(error =>{
        //console.log('contrasena o correo estan mal')
       })
       this.router.navigate(['/home'])
  }
}
//   onSubmit()
//   {
//   if(this.usuario.username=="lucas" && this.usuario.password == "1234")
//   { 
//     let navigationExtras:NavigationExtras={
//       state:{
//         usr:this.usuario
//       } 
//     }
//     console.log('usuario valido');
//     console.log(this.usuario);
//     this.router.navigate(['/home'], navigationExtras)
//   }
//   else{
//     console.log("acceso denegado");
//     this.presentAlert();
//   }
// }

// async presentAlert()
// {
//   const alert = await this.alertController.create({
//     header: 'Acceso Denegado',
//     subHeader: '',
//     message: 'Usuario o Contraseña incorrectos',
//     buttons: [
//       {
//         text: 'Cancelar',
//         role: 'cancel',
//         handler: () => {
//           console.log('Alert canceled');
//         },
//       },
//       {
//         text: 'Aceptar',
//         role: 'confirm',
//         handler: () => {
//           console.log('Alert confirmed');
//         },
//       },
//     ],
//     mode:'ios',
//     backdropDismiss:false,
//     cssClass:'miclase',
//   });

//   await alert.present();

//   const { role } = await alert.onDidDismiss();
//   console.log(`Dismissed with role: ${role}`);
// }
