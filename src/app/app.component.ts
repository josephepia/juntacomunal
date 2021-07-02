import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import { Subscription } from 'rxjs';
import { UserAuthService } from './core/services/user-auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'juntadeaccioncomunal';
  constructor(
    private auth: UserAuthService
  ){


  }

  user:any= null
  userDatabase:any= null
  async ngOnInit(){
    
    
    
    //this.isSuperAdmin = this.userDatabase!.child('roles').hasChild('superAdministrador')
    

  }

  userObservable!: Subscription
  isSuperAdmin:boolean = false


  
  

  ngOnDestroy(){

  }

  

}
