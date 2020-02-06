import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {UserInterface} from '../models/user';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserDataApiService {

  constructor(private afs:AngularFirestore) {
    //The collection that you want to access in the firebase database is declared
    this.dataUserCollection=afs.collection<UserInterface>('userdata2');

    //The collection values are assigned to our variable dataUser
    this.dataUser=this.dataUserCollection.valueChanges();
   }

  //Declared Variables to Use using the Userinterface to assign the parameters
  private dataUserCollection: AngularFirestoreCollection<UserInterface>;
  private dataUser: Observable<UserInterface[]>;
  public selectedData:UserInterface={};

  //Simple Method to get All the data from the DB on Firebase
  getAllDatUser(){
    return this.dataUser=this.dataUserCollection.snapshotChanges()
    .pipe(map(changes =>{
     return changes.map(action =>{
       const data = action.payload.doc.data() as UserInterface;
       return data;
     }) 
    }))
  }
//Simple Method to Add Data to Data Base
  addDataUser(dataUser:UserInterface):void{
    //Use the method add from AngularFirestoreCollection to add data
    this.dataUserCollection.add(dataUser);
  }
}
