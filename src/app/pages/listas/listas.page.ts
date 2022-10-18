import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Usuario } from '../../interfaces/interface';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {


  coleccion: any=[];


  constructor( public firebaseService: FirebaseService) { }

  ngOnInit() {
    const path = '/usuarios'
    this.firebaseService.getCollection<Usuario>(path).subscribe(res =>{
      console.log(res)
      this.coleccion = res;
    });
  }

}
