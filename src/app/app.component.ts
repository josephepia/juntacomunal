import { Component } from '@angular/core';
import firebase from "firebase/app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'juntadeaccioncomunal';
  constructor(){
    firebase.database().ref('prueba').once('value',(datos)=>{
      if(datos.exists()){
        console.log("datos -> ", datos.val());
        
      }else{
        console.log("no hay datos en la base de datos");
        
      }
      
    })
  }
}
