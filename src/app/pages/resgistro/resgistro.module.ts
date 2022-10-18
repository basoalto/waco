import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgistroPageRoutingModule } from './resgistro-routing.module';

import { ResgistroPage } from './resgistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgistroPageRoutingModule
  ],
  declarations: [ResgistroPage]
})
export class ResgistroPageModule {}
