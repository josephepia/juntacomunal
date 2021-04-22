import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";

@Component({
  selector: 'app-habitantes',
  templateUrl: './habitantes.component.html',
  styleUrls: ['./habitantes.component.scss']
})
export class HabitantesComponent implements OnInit {

  nombrehabitante:any
  apellidohabitante:any
  nacimientohabitante:any
  generohabitante:any
  telefonohabitante:any
  direccionhabitante:any
  constructor() { }

  ngOnInit(): void {
  }
  
  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  registrarhabitante(){
    console.log("di click en registrar");
      
    firebase.database().ref('habitantes').push({
      nombrehabitante:this.nombrehabitante,
      apellidohabitante: this.apellidohabitante,
      nacimientohabitante: this.nacimientohabitante,
      generohabitante:this.generohabitante,
      telefonohabitante:this.telefonohabitante,
      direccionhabitante:this.direccionhabitante,
      rol:"MIEMBRO"
    })
  }
}
