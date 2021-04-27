import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-cargo',
  templateUrl: './formulario-cargo.component.html',
  styleUrls: ['./formulario-cargo.component.scss']
})
export class FormularioCargoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormularioCargoComponent>, @Inject(MAT_DIALOG_DATA) public datosEntrada: any) { 

  }

  async ngOnInit(){
    this.formulario.controls.nombre.setValue(this.datosEntrada?.cargo?.nombre|| null);
    this.formulario.controls.descripcion.setValue(this.datosEntrada?.cargo?.descripcion|| null);
  }

  formulario = new FormGroup({
    nombre: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    descripcion: new FormControl(null,[Validators.required]),
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

}
