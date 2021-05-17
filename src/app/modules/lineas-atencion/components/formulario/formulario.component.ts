import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LineasAtencionService } from './../../../../core/services/lineas-atencion.service';
import { Component,Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  
  srcResult: any;
  constructor(
    private lineasAtencionService:LineasAtencionService, 
    public dialogRef: MatDialogRef<FormularioComponent>, 
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any) { }

  ngOnInit(): void {

    this.formulario.controls.titulo.setValue(this.datosEntrada?.lineasAtencion.titulo || null);
    this.formulario.controls.descripcion.setValue(this.datosEntrada?.lineasAtencion.descripcion || null);
    this.formulario.controls.contacto.setValue(this.datosEntrada?.lineasAtencion.contacto || null);
    this.formulario.controls.link.setValue(this.datosEntrada?.lineasAtencion.link || null);
    
  }
  //estructura para usar formulario reactivo
  formulario = new FormGroup({
    titulo: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
    descripcion: new FormControl(null, [Validators.required]),
    contacto: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
    link: new FormControl(null, [Validators.required, Validators.nullValidator]),
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
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

}
