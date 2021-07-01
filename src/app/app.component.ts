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

  async ngOnInit(){
 


  }

  userObservable!: Subscription

  

  ngOnDestroy(){

  }

  

}
