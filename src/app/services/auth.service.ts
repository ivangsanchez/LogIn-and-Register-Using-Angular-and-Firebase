import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {auth} from 'firebase/app';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth:AngularFireAuth) { }

  //Method to Register a New User
  registerUser(email:string,pass:string){
    return new Promise((resolve,reject)=>{
      //we use method createuserwithemailandpassword from AngularFireAuth assigning 2 parameters(email and password) 
      this.afsAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then(userData =>resolve(userData),
      err => reject(err));
    });
  }

  //Method to register a user with email and password
  loginEmailUser(email: string,pass:string){
    return new Promise((resolve,reject)=>{
       //we use method signInWithEmailandPassword from AngularFireAuth assigning 2 parameters(email and password)
      this.afsAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  //Method for a user to log out
  logoutUser(){
    //Use signOut method from AngularFireAuth to logout
    return this.afsAuth.auth.signOut();
  }

  //Method to identify if the user is log in
  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
}
