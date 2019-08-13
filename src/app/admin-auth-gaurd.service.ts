import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { switchMap, map } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AppUser } from './models/app-users';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService{

  constructor(private authservice:AuthService,
              private userService:UserService
              ) { }
  // canActivate():Observable<boolean>{
  // //    return this.authservice.user$
  // //    .pipe(switchMap( user=> this.userService.get(user.uid)
      
  // //   ))
  // //   .pipe(map(appUser => appUser.isAdmin));
  // // }
}
