import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-formulario-miembros-jac',
  templateUrl: './formulario-miembros-jac.component.html',
  styleUrls: ['./formulario-miembros-jac.component.scss']
})
export class FormularioMiembrosJACComponent implements OnInit {

  
  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  


  identificacion:any
  nombrehabitante:any
  apellidohabitante:any
  nacimientohabitante:any
  generohabitante:any
  telefonohabitante:any
  direccionhabitante:any

  

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
  
      alert("REGISTRO EXITOSO RECARGAR LA PAGINA PARA VER LOS CAMBIOS");
      this.activeModal.close();
    }catch(e){
      alert("ALGO SALIO MAL");

    }
  }

  onReset(){
    this.activeModal.close();
  }



}
