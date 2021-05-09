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


    this.formulario.controls.idBarrio.valueChanges.subscribe((idBarrio)=>{
      console.log('id de barrio seleccionado -> ', idBarrio);
      //luego de seleccionar la comuna con su id, se extrae su nombre
      this.formulario.controls.nombreBarrio.setValue(this.barrios[idBarrio]?.nombre || null)
      //verificamos la asignacion de nombre
      console.log('nombre del barrio Seleccionado -> ', this.formulario.controls.nombreBarrio.value);
      

    });
  }

  async ngOnInit(){
    await this.consultarBarrios()
    this.formulario.controls.identificacionHabitante.setValue(this.datosEntrada?.habitante?.idHabitante|| null);
    this.formulario.controls.tipoidentificacioHabitante.setValue(this.datosEntrada?.habitante?.TipoidentificacioHabitante|| null);
    this.formulario.controls.primerNombreHabitante.setValue(this.datosEntrada?.habitante?.primerNombreHabitante|| null);
    this.formulario.controls.segundoNombreHabitante.setValue(this.datosEntrada?.habitante?.segundoNombreHabitante|| null);
    this.formulario.controls.primerApellidoHabitante.setValue(this.datosEntrada?.habitante?.primerApellidoHabitante|| null);
    this.formulario.controls.segundoApellidoHabitante.setValue(this.datosEntrada?.habitante?.segundoApellidoHabitante|| null);
    this.formulario.controls.direccionHabitante.setValue(this.datosEntrada?.habitante?.direccionHabitante|| null);
    this.formulario.controls.generoHabitante.setValue(this.datosEntrada?.habitante?.generoHabitante|| null);
    this.formulario.controls.fechaNacimientoHabitante.setValue(this.datosEntrada?.habitante?.fechaNacimientoHabitante|| null);
    this.formulario.controls.telefonoHabitante.setValue(this.datosEntrada?.habitante?.telefonoHabitante|| null);
    this.formulario.controls.idBarrio.setValue(this.datosEntrada?.habitante?.idBarrio|| null);
    this.formulario.controls.nombreBarrio.setValue(this.datosEntrada?.habitante?.idBarrio|| null);
  }

  formulario = new FormGroup({   
    identificacioHabitante: new FormControl(null,[Validators.required]),
    tipoidentificacioHabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    primerNombreHabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    segundoNombreHabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    primerApellidoHabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    segundoApellidoHabitante: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    direccionHabitante: new FormControl(null,[Validators.required,Validators.maxLength(60)]),
    generoHabitante: new FormControl(null,[Validators.required]),
    fechaNacimientoHabitante: new FormControl(null,[Validators.required]),
    telefonoHabitante: new FormControl(null,[Validators.required]),
    idBarrio: new FormControl(null,[Validators.required]),
    nombreBarrio: new FormControl(null,[Validators.required]),
  });

  controlPrueba= new FormControl(null,[Validators.required]);

  barrios:any = {}
  consultarBarrios(){
    return firebase.database().ref('barrios').on('value',(datos)=>{
      if(datos.exists()){
        this.barrios = datos.val()
      }else{
        this.barrios = {}
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
