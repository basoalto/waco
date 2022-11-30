import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GooglemapComponent } from '../../googlemaps/googlemap.component';
import { Cliente } from 'src/app/interfaces/models';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  cliente ={
    uid: '',
    email: '',
    nombre: '',
    celular: '',
    foto: '',
    referencia: '',
    ubicacion: null
    };

  constructor( private modalController: ModalController) { 

  }

  ngOnInit() {
  }

   async addDireccion(){
     const ubicacion = this.cliente.ubicacion;

     let positionInput ={
      lat: -2.898116,
      log: -78.9995814999999 
     }

     if (ubicacion !== null){
      positionInput = ubicacion;
     }


    const modalAdd = await this.modalController.create({
      component: GooglemapComponent,
      mode: 'ios',
      // swipeToclose: true,
      componentProps: {position: positionInput}
    })
    await modalAdd.present()
  }
}
