import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import firebase from "firebase/app"
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-comunas',
  templateUrl: './comunas.component.html',
  styleUrls: ['./comunas.component.scss']
})
export class ComunasComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  router: any;

  constructor(public dialog: MatDialog) { 
    firebase.database().ref('comunas').on('value',(datos)=>{
      if(datos.exists()){
        this.comunas = datos.val()
        for(let comuna of this.keys(datos.val())){
           
        }
        console.log("datos val -> ", datos.val());

        console.log("comunas -> ", this.comunas);
        
      }else{
        this.comunas = {}
        console.log('no hay datos');
        
      }
    })
  }

  comunas:any
  barrios:any

  async consultarBarrios(comuna: any){

   await firebase.database().ref('barrios').orderByChild('comuna').equalTo(comuna).once("value",(datos)=>{
        if(datos.exists()){
          this.barrios = datos.val()
          console.log("barrios de "+comuna);
          console.log(this.barrios);
          
          
        }else{
          this.barrios = {}
          
        }
    })

    return Object.keys(this.barrios)
  }

  

  registrarComuna(nombre: string){
    firebase.database().ref('comunas/').push({
        nombre: nombre
    })
  }

  



  ngOnInit(): void {

    

  }

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }
  

}
