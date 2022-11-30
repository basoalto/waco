import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HoraAccesoGuard implements CanActivate {
// Ya que vamos a hacer un redirección si la hora es mayor de 22
// Necesitamos importar el Router e inyectarlo al construictor
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    
    //obtener la hora actual
    const hora = new Date().getHours();

    //compraremos la hora con el maximo permitido

    if (hora >= 16){
    // Si la hora es mayor o igual redireccionamos al home
      this.router.navigate(['']);
    // Si devolvemos FALSE no de permitirá el acceso  
      return false;
    }
    // Si devolvemos TRUE si se permitirá el acceso.
    return true;
  }
  
}
