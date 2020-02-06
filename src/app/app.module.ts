import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//All de Imports from Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import {HomeComponent} from './components/home/home.component';

import {Routes,RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {environment} from '../environments/environment';

//All de Imports from Angular Fire
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';

//All the routes to all the components 
const routes:Routes=[
  {path:'',redirectTo:'/user/login', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'user/login',component:LoginComponent},
  {path:'user/register',component:RegisterComponent},
  {path:'user/profile',component:ProfileComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AngularFireAuth,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
