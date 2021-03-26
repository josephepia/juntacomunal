import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
@Component({
  selector: 'app-formulariobarrios',
  templateUrl: './formulariobarrios.component.html',
  styleUrls: ['./formulariobarrios.component.scss']
})
export class FormulariobarriosComponent implements OnInit {

  comuna:any
  estrato:any
  nombre:any
  comunas:any
  constructor() { }

  ngOnInit(): void {
    this.consultarComunas()
  }

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  consultarComunas(){
    firebase.database().ref('comunas').once('value',(datos)=>{
      if(datos.exists()){
        this.comunas = datos.val()
      }else{
        this.comunas = {}
      }
    })
  }

  registrar(){
    console.log("di click en registrar");
    console.log('variables -> ',this.comuna,this.estrato,this.nombre);
    
    firebase.database().ref('barrios').push({
      comuna:this.comuna,
      estrato: this.estrato,
      nombre: this.nombre,
      nombrecomuna: this.comunas[this.comuna].nombre
    })
  }

}
