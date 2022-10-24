import { Injectable} from '@angular/core';
import { environment } from '../../environments/environment';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {


  apiKey = environment.ApiKeygoogleMaps
  mapsLoader = false;

  constructor() { }




init( renderer: any, document: any): Promise<any>{
  
  return new Promise((resolve) =>{

    if(this.mapsLoader){
      console.log('google is preview loader')
      resolve(true)
      return;
    }

    const script = renderer.createElement('script');
    script.id ='googlemaps';

    window['mapInit'] = () => {
      this.mapsLoader = true;
      if(google){
        console.log('google is loader')
      }else{
        console.log('google is not defined')
      }
      resolve(true);
       return
    }
    if(this.apiKey){
      script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
    }else{
      script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
    }

    renderer.appendChild(document.body, script)

  });
}
}