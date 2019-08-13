import { Injectable } from '@angular/core';
//import {  } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router,CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate{
  
  constructor(private AuthService:AuthService,
              private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,
              state:RouterStateSnapshot):Observable<boolean>|Promise<boolean> |boolean{
      return this.AuthService.user$.pipe(map(
        user=>{
          if(user)
          return true;

        this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
        return false;
        }
      ));
  }

}
