import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormulariocomunasComponent } from 'src/app/pages/formulariocomunas/formulariocomunas.component';

@Component({
  selector: 'app-formulario-comuna',
  templateUrl: './formulario-comuna.component.html',
  styleUrls: ['./formulario-comuna.component.scss']
})
export class FormularioComunaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormulariocomunasComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    this.formulario.controls.nombre.setValue(this.data.nombre|| null);
  }

  //estructura para usar formulario reactivo
  formulario = new FormGroup({
    nombre: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
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
