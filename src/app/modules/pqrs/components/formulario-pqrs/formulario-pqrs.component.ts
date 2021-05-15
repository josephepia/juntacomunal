import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PQRSService } from './../../../../core/services/pqrs.service';


@Component({
  selector: 'app-formulario-pqrs',
  templateUrl: './formulario-pqrs.component.html',
  styleUrls: ['./formulario-pqrs.component.scss']
})
export class FormularioPQRSComponent implements OnInit {

  srcResult: any;

  constructor(private pqrsService:PQRSService, 
    public dialogRef: MatDialogRef<FormularioPQRSComponent>, 
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any
  ){ }

  ngOnInit(): void {
    this.formulario.controls.tituloPQRS.setValue(this.datosEntrada?.pqrs?.tituloPQRS || null);
    this.formulario.controls.descripcion.setValue(this.datosEntrada?.pqrs?.descripcion || null);

    this.formulario.controls.remitente.setValue(this.datosEntrada?.pqrs?.remitente || null);
    
    this.formulario.controls.estadoPQRS.setValue(this.datosEntrada?.pqrs?.estadoPQRS || "PENDIENTE");
    this.formulario.controls.fecha.setValue(this.datosEntrada?.pqrs?.fecha || null);
  }

  formulario = new FormGroup({
    tituloPQRS: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
    descripcion: new FormControl(null, [Validators.required, Validators.maxLength(2000)]),
    //urlImage: new FormControl(null, [Validators.required, Validators.nullValidator]),
    estadoPQRS: new FormControl(null, [Validators.required]),
    remitente: new FormControl(null),
    fecha: new FormControl(null)
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
