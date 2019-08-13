import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { auth } from 'firebase';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingAppwithMosh';
  constructor(private Authservice:AuthService,
              router:Router,
              private userservice:UserService){
   Authservice.user$.subscribe(
     user=>{
       if(user){
         userservice.save(user);
       let returnUrl=localStorage.getItem('returnUrl');
       router.navigateByUrl(returnUrl);
       }
     }
   )
  }

}
