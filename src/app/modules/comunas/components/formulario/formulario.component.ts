import { Comuna } from './../../../../core/Modelos/comuna';
import { ComunaService } from './../../../../core/services/comuna.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

 

  constructor(
    private comunaService:ComunaService, 
    public dialogRef: MatDialogRef<FormularioComponent>, 
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any) {
   
   }


  ngOnInit(): void {
    this.formulario.controls.nombre.setValue(this.datosEntrada?.comuna?.nombre || null);
  }

  //estructura para usar formulario reactivo
  formulario = new FormGroup({
    nombre: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
  });

  //al cancelar el modal
  cancelar() {
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
