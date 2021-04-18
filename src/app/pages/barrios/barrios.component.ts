import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormulariobarriosComponent} from '../formulariobarrios/formulariobarrios.component'

import { MatDialog } from '@angular/material/dialog';

import { NavigationExtras, Router } from '@angular/router';

import { FormulariocomunasComponent} from '../formulariocomunas/formulariocomunas.component'
import { FormularioComunaComponent } from 'src/app/components/formulario-comuna/formulario-comuna.component';
import { FormularioBarriosComponent } from 'src/app/components/formulario-barrios/formulario-barrios.component';

@Component({
  selector: 'app-barrios',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.scss']
})
export class BarriosComponent implements OnInit {
  comuna:any
  estrato:any
  nombre:any
  comunas:any
  constructor(
    public dialog: MatDialog,

    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.consultarBarrios()
    setTimeout(()=> {
    },1300)
    this.consultarComunas()
  }
  barrios:any
  
  keys(objeto: Object){
    return Object.keys(objeto|| {})
  }

  consultarBarrios(){
    firebase.database().ref('barrios').on('value',(datos)=>{
      if(datos.exists()){
        this.barrios = datos.val()
       
  
        
      }else{
        this.barrios = {}
        console.log('no hay datos');
        
      }
    })
  }

  abrirRegistrarBarrios() {  
    this.modalService.open(FormulariobarriosComponent, { centered: true });
  }

  modalFormulario(){
    //aca no se puede mandar nada al formulario ya que se va a crear uno nuevo
    const dialogRef = this.dialog.open(FormularioBarriosComponent, {data: {titulo: "Registrar", barrio: this.barrios}});

    dialogRef.afterClosed().subscribe(barrio => {
      console.log('datos ingresados al crear comuna',barrio);
      if(barrio){
         // registrar datos en firebase
        this.registrarBarrio(barrio)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }
  
  registrarBarrio(datos: Object){
    firebase.database()
    .ref('barrios/').push(datos)
    .then(()=> {
      console.log("registrada correctamente")
    })
    .catch((error)=>console.log("ocurrio un error al registrar ->",error))
  }
  consultarComunas(){
    firebase.database().ref('comunas').once('value',(datos)=>{
      if(datos.exists()){
        this.comunas = datos.val()
      }else{
        this.comunas = {}
      }
    })
  }

}
