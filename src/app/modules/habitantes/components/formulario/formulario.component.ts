import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HabitanteService } from './../../../../core/services/habitante.service';
import { BarrioService} from '../../../../core/services/barrio.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(
    
    private barrioService: BarrioService,
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
    this.formulario.controls.identificacion.setValue(this.datosEntrada?.habitante?.identificacion|| null);
    this.formulario.controls.tipoidentificacion.setValue(this.datosEntrada?.habitante?.tipoidentificacion|| null);
    this.formulario.controls.nombre.setValue(this.datosEntrada?.habitante?.nombre|| null);
    this.formulario.controls.apellido.setValue(this.datosEntrada?.habitante?.apellido|| null);
    this.formulario.controls.direccion.setValue(this.datosEntrada?.habitante?.direccion|| null);
    this.formulario.controls.genero.setValue(this.datosEntrada?.habitante?.genero|| null);
    this.formulario.controls.fechaNacimiento.setValue(this.datosEntrada?.habitante?.fechaNacimiento|| null);
    this.formulario.controls.telefono.setValue(this.datosEntrada?.habitante?.telefono|| null);
    this.formulario.controls.idBarrio.setValue(this.datosEntrada?.habitante?.idBarrio|| null);
    this.formulario.controls.nombreBarrio.setValue(this.datosEntrada?.habitante?.nombreBarrio|| null);
  }

  formulario = new FormGroup({   
    identificacion: new FormControl(null,[Validators.required]),
    tipoidentificacion: new FormControl(null,[Validators.required]),
    nombre: new FormControl(null,[Validators.required]),
    apellido: new FormControl(null,[Validators.required]),
    direccion: new FormControl(null,[Validators.required]),
    genero: new FormControl(null,[Validators.required]),
    fechaNacimiento: new FormControl(null,[Validators.required]),
    telefono: new FormControl(null,[Validators.required]),
    idBarrio: new FormControl(null,[Validators.required]),
    nombreBarrio: new FormControl(null,[Validators.required])
  });

  controlPrueba= new FormControl(null,[Validators.required]);

  barrios:any = {}


  consultarBarrios(){
    this.barrioService.getBarriosOnce().then((barrios) => {
      if (barrios) {
        console.log('barrios segundo then', barrios);
      } else {
        console.log('no existen comunas');
      }
      this.barrios = barrios || {}
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
