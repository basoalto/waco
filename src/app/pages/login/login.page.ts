import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import 'animate.css';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    username:'',
    password:''
  }
  constructor(private router: Router, private alertController:AlertController) { }

  ngOnInit() {
  }

  onSubmit()
  {
  if(this.usuario.username=="lucas" && this.usuario.password == "1234")
  { 
    let navigationExtras:NavigationExtras={
      state:{
        usr:this.usuario
      } 
    }
    console.log('usuario valido');
    console.log(this.usuario);
    this.router.navigate(['/home'], navigationExtras)
  }
  else{
    console.log("acceso denegado");
  }
}
}

