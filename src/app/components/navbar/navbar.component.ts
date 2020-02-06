import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,private afsAuth:AngularFireAuth) { }
  //Create a boolean variable to verify if a user is logged 
  public isLogged: boolean = false;

  ngOnInit() {
    this.getCurrentUser();
  }

  //Simple method to verify if the user is logged
  getCurrentUser(){
    //Call the method isAuth() from the Class Service
    this.authService.isAuth().subscribe( auth =>{
      //check the status, and set the variable islogged acording the value
      if(auth){
        //console.log('user logged');
        this.isLogged=true;
      }else{
        //console.log('NOT user logged');
        this.isLogged=false;
      }
    });
  }

  //Simple Method to logout called from afsAuth
  onLogout(){
    this.afsAuth.auth.signOut();
  }

}
