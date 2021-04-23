import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MatDialog } from '@angular/material/dialog';

import { NavigationExtras, Router } from '@angular/router';


import { ActivatedRoute } from '@angular/router';

import { FormularioComunaComponent } from 'src/app/components/formulario-comuna/formulario-comuna.component';
import { ModalConfirmacionComponent } from 'src/app/components/modal-confirmacion/modal-confirmacion.component';
import { FormulariohabitantesComponent } from 'src/app/components/formulariohabitantes/formulariohabitantes.component';



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
  constructor(private router: Router,public dialog: MatDialog) { }

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
  modalFormulario(){
    const dialogRef = this.dialog.open(FormulariohabitantesComponent, {data: {titulo: "Registrar", habitantes: null}});

    dialogRef.afterClosed().subscribe(habitantes => {
      console.log('datos ingresados al crear comuna',habitantes);
      if(habitantes){
         // registrar datos en firebase
        this. registrarhabitantes(habitantes)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }
  registrarhabitantes(datos: Object){
    firebase.database()
    .ref('habitantes/').push(datos)
    .then(()=> {
      console.log("registrada correctamente")
    })
    .catch((error)=>console.log("ocurrio un error al registrar ->",error))
  }
}
