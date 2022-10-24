import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home/home.module';
import {HoraAccesoGuard} from './guards/hora-acceso.guard'
import { AngularFireAuthGuard, canActivate } from '@angular/fire/compat/auth-guard';
import { UserI } from './interfaces/models';
import { map } from 'rxjs/operators';

const uidAdmin = 'g4U1yMwGMmT4LXM921msXs5ShW53'
const onlyAllowSelf = () => map( (user: any) => !!user && user.uid === uidAdmin);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
     path: 'home',
     loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'listas',
    loadChildren: () => import('./pages/listas/listas.module').then( m => m.ListasPageModule),
    ...canActivate(onlyAllowSelf)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
  },
  {
    path: 'resgistro',
    loadChildren: () => import('./pages/resgistro/resgistro.module').then( m => m.ResgistroPageModule)
  },  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
