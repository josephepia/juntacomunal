import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormulariocomunasComponent } from 'src/app/pages/formulariocomunas/formulariocomunas.component';
@Component({
  selector: 'app-formulariohabitantes',
  templateUrl: './formulariohabitantes.component.html',
  styleUrls: ['./formulariohabitantes.component.scss']
})
export class FormulariohabitantesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormulariohabitantesComponent>, @Inject(MAT_DIALOG_DATA) public datosquellegan: any) { }

  ngOnInit(): void 
  {
  this.formulario.controls.nombrehabitante.setValue(this.datosquellegan?.habitantes?.nombrehabitante|| null); 
  this.formulario.controls.apellidohabitante.setValue(this.datosquellegan?.habitantes?.apellidohabitante|| null);
  this.formulario.controls.nacimientohabitante.setValue(this.datosquellegan?.habitantes?.nacimientohabitante|| null);
  this.formulario.controls.generohabitante.setValue(this.datosquellegan?.habitantes?.generohabitante|| null);
  this.formulario.controls.telefonohabitante.setValue(this.datosquellegan?.habitantes?.telefonohabitante|| null);
  this.formulario.controls.direccionhabitante.setValue(this.datosquellegan?.habitantes?.direccionhabitante|| null);
  }

formulario = new FormGroup({
    nombrehabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    apellidohabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    nacimientohabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    generohabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    telefonohabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    direccionhabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
  });

   //al cancelar el modal
  cancelar(){
    this.dialogRef.close(null)
  }

  //al confirmar el registro
  guardar(): void {
    if (this.formulario.invalid) {
      return;
    }
    
    this.dialogRef.close(this.formulario.value);
  }

}
