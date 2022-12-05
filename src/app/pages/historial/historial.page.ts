import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataLocalService } from '../../services/data-local.service';
import { FirebaseService } from '../../services/firebase.service';
import { Registro } from '../../interfaces/registro.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  registros: Registro[] = []
  
  constructor(public dataLocal: DataLocalService,
              private firebaseService: FirebaseService,
              private dataLocaService: DataLocalService) { }

  ngOnInit() {
    this.getData()
  }


  enviarCorreo(){
    console.log('enviando email')
  }
  abrirRegistros(registro){
    console.log('registro', registro)
  }

  // getData(){
  //   this.firebaseService.getCollection<Registro>("registros")
  //     .subscribe( registros=> {
  //       console.log(registros);
        
  //       this.registros = registros
  //     }
  //     )
  // }

  getData(){
    this.firebaseService.getCollection<Registro>("registros")
      .subscribe(async registros=> {    
         const id = await this.dataLocaService.obtenerUserId();
         this.registros = registros.filter(reg => id == reg.userId)
      }
      )
  }
}
