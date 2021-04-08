import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
@Component({
  selector: 'app-barrios',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.scss']
})
export class BarriosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.consultarBarrios()
  }
  barrios:any
  
  keys(objeto: Object){
    return Object.keys(objeto|| {})
  }

  consultarBarrios(){
    firebase.database().ref('barrios').on('value',(datos)=>{
      if(datos.exists()){
        this.barrios = datos.val()
       
  
        
      }else{
        this.barrios = {}
        console.log('no hay datos');
        
      }
    })
  }
  

}
