import { Component, Inject, OnInit } from '@angular/core';
import { Comuna } from './../../../../core/Modelos/comuna';
import { Publicaciones } from './../../../../core/Modelos/publicaciones';
import { PublicacionesService } from './../../../../core/services/publicaciones.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  srcResult: any;

  constructor(private publicacionesService:PublicacionesService, 
    public dialogRef: MatDialogRef<FormularioComponent>, 
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any) { }

  ngOnInit(): void {
    this.formulario.controls.tituloPublicacion.setValue(this.datosEntrada?.publicaciones.tituloPublicacion || null);
    this.formulario.controls.descripcionPublicacion.setValue(this.datosEntrada?.publicaciones.descripcionPublicacion || null);
    this.formulario.controls.anexosPublicacion.setValue(this.datosEntrada?.publicaciones.anexosPublicacion || null);
    //this.formulario.controls.urlImage.setValue(this.datosEntrada?.publicaciones.urlImage || null);
    
  }
  //estructura para usar formulario reactivo
  formulario = new FormGroup({
    tituloPublicacion: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
    descripcionPublicacion: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
    anexosPublicacion: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
    //urlImage: new FormControl(null, [Validators.required, Validators.nullValidator]),
  
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
