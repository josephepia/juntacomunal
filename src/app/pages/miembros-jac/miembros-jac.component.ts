import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";

@Component({
  selector: 'app-miembros-jac',
  templateUrl: './miembros-jac.component.html',
  styleUrls: ['./miembros-jac.component.scss']
})
export class MiembrosJACComponent implements OnInit {

  identificacion:any
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
      identificacion: this.identificacion,
      nombrehabitante:this.nombrehabitante,
      apellidohabitante: this.apellidohabitante,
      nacimientohabitante: this.nacimientohabitante,
      generohabitante:this.generohabitante,
      telefonohabitante:this.telefonohabitante,
      direccionhabitante:this.direccionhabitante,
      rol: "MIEMBRO"
    })
  }

}
