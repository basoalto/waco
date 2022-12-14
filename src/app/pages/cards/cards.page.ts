import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Registro } from 'src/app/interfaces/registro.model';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  scanActive: boolean = false;
  
  constructor(private dataLocal: DataLocalService) { }

  ngOnInit() {
  }
  // ionViewWillEnter(){
  //  this.scan();
  // }

  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        reject(false);
      }
    });
  }

  async scan(){
      const allowed = await this.checkPermission();

      if (!allowed) {
        alert('NOT ALLOWED!');
        return;
      }

      this.scanActive = true;
      BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');

      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.scanActive = false;
        await this.guardarRegistro(result.content)
        
        //The QR content will come out here
        //Handle the data as your heart desires here
      } 
      // else {
        // this.guardarRegistro();
      // }
      BarcodeScanner.showBackground()
      document.querySelector('body').classList.remove('scanner-active');
    }

  
    stopScanner() {
      BarcodeScanner.showBackground()
      BarcodeScanner.stopScan();
      this.scanActive = false;
      document.querySelector('body').classList.remove('scanner-active');
    }

    async guardarRegistro(content: string) {
      const currentUserId = await this.dataLocal.obtenerUserId();
      const registro = new Registro(content, currentUserId);

      this.dataLocal.verificarRegistroExistente(registro, currentUserId).subscribe(existe => {
        if (!existe) {
          this.dataLocal.guardarRegistro(registro)
        }
      })

    } 

    ionViewWillLeave() {
      BarcodeScanner.stopScan();
      this.scanActive = false;
    }
  }















        // const options: CameraOptions = {
        //   quality: 100,
        //   destinationType: this.camara.DestinationType.FILE_URI,
        //   encodingType: this.camara.EncodingType.JPEG,
        //   mediaType: this.camara.MediaType.PICTURE
        // }
        
        // this.camara.getPicture(options).then((imageData) => {
        //  // imageData is either a base64 encoded string or a file URI
        //  // If it's base64 (DATA_URL):
        //  let base64Image = 'data:image/jpeg;base64,' + imageData;
        // }, (err) => {
        //  // Handle error
        // });
        // this.BarcodeScanner.scan().then(barcodeData => {
        //   console.log('Barcode data', barcodeData);
        //  }).catch(err => {
        //      console.log('Error', err);
        //  });