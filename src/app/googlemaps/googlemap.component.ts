import { Component, ElementRef, Input, OnInit, ViewChild, Inject, ViewChildren, Renderer2, inject} from '@angular/core';
import { GooglemapsService } from './googlemaps.service';
import { Geolocation } from '@capacitor/geolocation';
import { ModalController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import { map } from 'rxjs/operators';


declare var google: any;

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss'],
})
export class GooglemapComponent implements OnInit {


  //coordenadas
  @Input()position: any
  ={
    lat: -36.818739,
    log: -73.020345
  }
  

  label ={
    titulo: "Ubicacion",
    subtitulo: "Mi ubicacion de envio"
  }

  map: any;
  market: any;
  infowindow: any;
  positionSet: any


  @ViewChild('map') divMap: ElementRef;

  constructor( public modalController: ModalController,
               @Inject(DOCUMENT) private document,
               private renderer: Renderer2,
               private googleMapsService: GooglemapsService) { }

  ngOnInit() {
    this.init()
  }



  async init(){
    this.googleMapsService.init(this.renderer, this.document).then(() =>{
      this.initMaps()
    }).catch( (error)=>{
    })
  }


  initMaps(){

    const position = this.position

    let latLng = new google.maps.LatLng(position.lat,position.log)

    let mapOptions ={
      center: latLng,
      zoom: 15,
      disableDefaultUI: true,
      clickableIcons: false
    }

    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions)
    this.market = new google.maps.Marker({
      map: this.map,
      Animation: google.maps.Animation.DROP,
      graggable: true
    })
    // this.clickHandleEvent();
    // this.infowindow = new google.maps.InfoWindow();

      this.addMarker(position);
      // this.setInfoWindow(this.market, this.label.titulo, this.label.subtitulo)
  }

  addMarker(position: any): void{

    let latLng = new google.maps.LatLng(position.lat, position.log);
    
    this.market.setPosition(latLng);
    // this.map.panTo(position)
    // this.positionSet = position;
  }

  setInfoWindow(){

  }


  async mylocation(){
    console.log('ubicacion')

    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
    
      console.log('Current position:', coordinates);

        const position ={
        lat: coordinates.coords.latitude,
        log: coordinates.coords.longitude,
      }
      this.addMarker(position);
    };
      
    printCurrentPosition()
  }

  aceptar(){
    console.log(this.positionSet)
// dismiss cierra el modal.
    this.modalController.dismiss({pos: this.positionSet})
  }
}