import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor(public dataLocal: DataLocalService) { }

  ngOnInit() {
  }


  enviarCorreo(){
    console.log('enviando email')
  }
  abrirRegistros(registro){
    console.log('registro', registro)
  }

}
