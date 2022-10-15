import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  coleccion:any=[];
  avatar={
    imagen:'/assets/duoc.png',
    subtexto:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built time machine... out of a DeLorean?! Whoa. This is heavy.',
    fecha: '17-09-2022'
  }
  ngOnInit() {
  }

  doRefresh(evento) {

    setTimeout(() => {
      for (let index = 0; index < 1; index++) {
        this.coleccion[index] = this.avatar;
        
      }
      evento.target.complete();
    }, 2000);
  }

}
