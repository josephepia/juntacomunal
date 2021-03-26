import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";

@Component({
  selector: 'app-formulario-miembros-jac',
  templateUrl: './formulario-miembros-jac.component.html',
  styleUrls: ['./formulario-miembros-jac.component.scss']
})
export class FormularioMiembrosJACComponent implements OnInit {

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

  

  registrarhabitante(){
    console.log("di click en registrar");
      
    try{
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
  
      alert("REGISTRO EXITOSO");
    }catch(e){
      alert("ALGO SALIO MAL");
    }
  }

}
