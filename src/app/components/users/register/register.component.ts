import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }
  //we create a variables to save the values
  public email: string='';
  public password: string='';

  ngOnInit() {
  }

  //Method to create a new user
  onAddUser(){
    //we call method from the service, and we assign the properties of email and password
    this.authService.registerUser(this.email,this.password)
    .then((res)=>{
      //if all is ok, show a message and redirect to profile
      swal.fire('Register','Register Correct!','success');
      this.router.navigate(['user/profile'])

    }).catch(err => {
      //if an error occurs, show the message
      console.log('err',err.message)
      swal.fire('Error',`${err.message}`,'error');
    });
  }

}
