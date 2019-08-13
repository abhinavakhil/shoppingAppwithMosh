import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user$:Observable<firebase.User>;
  constructor(private afauth:AngularFireAuth,
              private route:ActivatedRoute) {
     this.user$=afauth.authState;
   }

  login(){
  //  let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  //  localStorage.setItem('returnUrl',returnUrl);
   let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   localStorage.setItem('returnUrl',returnUrl);
   return this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
  return this.afauth.auth.signOut();
  }
 
}
