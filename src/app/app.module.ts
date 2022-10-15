import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [AngularFirestoreModule,AngularFireModule.initializeApp(environment.firebaseConfig),BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    AngularFireAuth,
    Camera,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
