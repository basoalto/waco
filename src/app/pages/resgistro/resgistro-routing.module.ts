import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgistroPage } from './resgistro.page';

const routes: Routes = [
  {
    path: '',
    component: ResgistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgistroPageRoutingModule {}
