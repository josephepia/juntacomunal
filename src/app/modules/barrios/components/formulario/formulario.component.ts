import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import firebase from 'firebase/app'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormularioComponent>, 
    @Inject(MAT_DIALOG_DATA) public datosEntrada: any) { 


    this.formulario.controls.idComuna.valueChanges.subscribe((idcomuna)=>{
      console.log('id de la comuna seleccionada -> ', idcomuna);

      //luego de seleccionar la comuna con su id, se extrae su nombre
      this.formulario.controls.nombreComuna.setValue(this.comunas[idcomuna]?.nombre || null)
      //verificamos la asignacion de nombre
      console.log('nombre de la comuna seleccionada -> ', this.formulario.controls.nombreComuna.value);
      

    });
  }

  async ngOnInit(){
    await this.consultarComunas()

    this.formulario.controls.nombre.setValue(this.datosEntrada?.barrio?.nombre|| null);
    this.formulario.controls.idComuna.setValue(this.datosEntrada?.barrio?.idComuna|| null);
    this.formulario.controls.nombreComuna.setValue(this.datosEntrada?.barrio?.nombreComuna|| null);
    this.formulario.controls.estrato.setValue(this.datosEntrada?.barrio?.estrato|| null);
  }

  formulario = new FormGroup({
    nombre: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    idComuna: new FormControl(null,[Validators.required]),
    nombreComuna: new FormControl(null,[Validators.required]),
    estrato: new FormControl(null,[Validators.required]),
  });

  controlPrueba= new FormControl(null,[Validators.required]);

  comunas:any = {}
  consultarComunas(){
    return firebase.database().ref('comunas').on('value',(datos)=>{
      if(datos.exists()){
        this.comunas = datos.val()
      }else{
        this.comunas = {}
      }
    })
  }

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
