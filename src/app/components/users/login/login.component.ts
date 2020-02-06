import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,private router:Router,private authService:AuthService) { }
  
  //Variable to Save the values 
  public email: string='';
  public password:string ='';

  ngOnInit() {
  }

  //Method for logging in with email and password
  onLogin(): void{

    //The service class method is imported and the form values are assigned
    this.authService.loginEmailUser(this.email,this.password)
    .then((res)=>{

      //A notification is displayed
      swal.fire('Log In','Log In Correct!','success');
      //If everything works correctly the method loginRedirect is called!
      this.onLoginRedirect();
      //If an error occurs, it is displayed on the console and notification
    }).catch(err => {
      console.log('err',err.message)
      swal.fire('Error',`${err.message}`,'error');
    });
  }


  //Logout method
  onLogout(){
    //the service class method is called
    this.authService.logoutUser();

    //the method loginRedirect is called
    this.onLoginRedirect();
  }

  //Method to redirect to the profile page
  onLoginRedirect(): void{
    this.router.navigate(['/user/profile']);
  }

}
