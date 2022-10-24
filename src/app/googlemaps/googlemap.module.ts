import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {GooglemapComponent} from './googlemap.component'


@NgModule({
  declarations: [
    GooglemapComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],exports:[
    GooglemapComponent
  ]
})
export class GooglemapModule { }
