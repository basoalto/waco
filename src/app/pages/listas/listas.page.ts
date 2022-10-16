import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Usuario } from '../../interfaces/interface';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {


  coleccion:any=[];


  constructor( public firebaseService: FirebaseService) { }

  ngOnInit() {
    const path = '/usuarios/Jjgw4JCFak8uxFZmZK0Q'
    this.firebaseService.getDoc<Usuario>(path).subscribe(res =>{
      console.log(res.apellido)
      this.coleccion[0] = res;
    });
  }

}
