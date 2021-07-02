import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { UserAuthService } from '../services/user-auth.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: UserAuthService
  ){

  }
  async canActivate(){
    return this.authService.currentUser().then((user)=>{
      if(user){
        console.log('usuario logueaado', user);
        
        return true
      }else{
        console.log('usuario no logeado');
        // this.router.navigate(['registro'])
        return false
      }
    }).catch((error)=>{
      console.log('error al consultar la sesion del usuario ', error);
      
      return false
    })
  }
  
}
