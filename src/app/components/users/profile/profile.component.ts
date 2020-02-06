import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserInterface} from '../../../models/user';
import {UserDataApiService} from '../../../services/user-data-api.service';
import {NgForm} from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService,private dataApi:UserDataApiService,private router:Router) { }

  //test Variable
  public datausers=[];

  //interface values are initialized
  user:UserInterface={
    email: ''
  };
  
  ngOnInit() {

    //Call getEmailUser() Method on Init of Aplication
    this.getEmailUser();

    //Call getAllData() Method on Init of Aplication
    this.getAllData();
  }

//Simple Method to Show al registers from Data Base on Console
  getAllData(){
    //Use the method alldatuser from service user-data-api ando show on console
    this.dataApi.getAllDatUser().subscribe(datausers =>{
      //console.log('DATA',datausers);
    })
  }

//Simple Method to Get the Email from the User Login
  getEmailUser(){
    //take the value user, from the method isAuth() in authService
    this.authService.isAuth().subscribe(user =>{
      //verify is you are logged ,and get the email from the register
      if(user){
        this.user.email=user.email;
      }
    })
  }

//Simple Method to Save Data on DB FireBase from Form on HTML
  onSaveData(dataForm:NgForm): void{
    //We add info from Form HTML
    this.dataApi.addDataUser(dataForm.value);
    //Simple Alert on display to show al it´s correct
    swal.fire('Save',`Information Save on the Data Base!`,'success');
    this.router.navigate(['home']);
  }

}
