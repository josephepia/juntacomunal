import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import firebase from 'firebase/app';
@Component({
  selector: 'app-formulario-miembro',
  templateUrl: './formulario-miembro.component.html',
  styleUrls: ['./formulario-miembro.component.scss']
})
export class FormularioMiembroComponent implements OnInit {

  selectedValue:any
  

 
  constructor(public dialogRef: MatDialogRef<FormularioMiembroComponent>, @Inject(MAT_DIALOG_DATA) public datosEntrada: any) {
    
   }
   

  async ngOnInit(){
    await this.consultarMiembros()
    this.formulario.controls.nombrehabitante.setValue(this.datosEntrada?.MiembrosJAC?.nombrehabitante|| null);
    this.formulario.controls.apellidohabitante.setValue(this.datosEntrada?.MiembrosJAC?.apellidohabitante|| null);
    this.formulario.controls.nacimientohabitante.setValue(this.datosEntrada?.MiembrosJAC?.nacimientohabitante|| null);
    this.formulario.controls.generohabitante.setValue(this.datosEntrada?.MiembrosJAC?.generohabitante|| null);
    this.formulario.controls.telefonohabitante.setValue(this.datosEntrada?.MiembrosJAC?.telefonohabitante|| null);
    this.formulario.controls.direccionhabitante.setValue(this.datosEntrada?.MiembrosJAC?.direccionhabitante|| null);
  }

  formulario = new FormGroup({
    nombrehabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    apellidohabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    nacimientohabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    generohabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    telefonohabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    direccionhabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
  });
 

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }



  cancelar(){
    this.dialogRef.close(null)
  }

  guardar(): void {
    if (this.formulario.invalid) {
      return;
    }
    
    this.dialogRef.close(this.formulario.value);
  }
  miembros:any = {}
  
  consultarMiembros(){

    firebase.database().ref('habitantes').orderByChild('rol').equalTo("MIEMBRO").once("value",(datos)=>{
      if(datos.exists()){
        this.miembros = datos.val()
      }else{
        this.miembros = {}
      }
    })

  }

}
