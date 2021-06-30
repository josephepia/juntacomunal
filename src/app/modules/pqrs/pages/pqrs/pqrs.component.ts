import { Component, OnInit } from '@angular/core';
import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { PQRSService } from './../../../../core/services/pqrs.service';


@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.scss']
})
export class PqrsComponent implements OnInit {

  //displayedColumns = ['index','nombre','estrato', 'numeroHabitantes'];

  fabButtons: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create',
      tooltip: "Responder",
      tooltipPosition: 'left'
    },
    {
      id: 2,
      icon: 'done_all',
      tooltip:"Marcar como leido",
      tooltipPosition: 'left'
    },
  ];

  pqrs:any = {}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private pqrsService: PQRSService

  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.consultarPQRSOnce(id);
    this.consultarRespuestasOnce(id);
  }

  consultarPQRSOnce(id: any){
   /* firebase.database().ref('PQRS/'+id).once('value',(datos)=>{
      if(datos.exists()){
        this.pqrs = datos.val();
        
        this.pqrs['id']= id;
        //this.consultarRespuestasOnce(id)
      }
    })*/

    this.pqrsService.ConsultarPQRSIndividual(id).then((datos)=>{
      this.pqrs = datos;
      this.pqrs['id']= id;
    })
  }
  
  consultarRespuestasOnce(id: any){
    firebase.database().ref('respuestas/').orderByChild('idPqrs').equalTo(id).once('value')
    .then((datos)=>{
      if(datos.exists()){
        let respuestas:any[] = []
        datos.forEach(datosChildren => {
          respuestas.push(Object.assign({id: datosChildren.key},datosChildren.val()))
        });
        
        this.pqrs['barrios'] = respuestas
        console.log('datos de todos los barrios -> ', datos.val());
        console.log('datos de todos los barrios dentro de comuna -> ', this.pqrs);
      }
    })
  }

  opcionSeleccionada(item: any){
    console.log("seleccione la opcion -> ",  item);

    switch (item) {
      case 1:
        //this.modalFormulario()
      break;
      
      case 2:
        //this.modalFormularioBarrio()
      break;
      
      case 3:
        //this.modalEliminar()
      break;
    
      default:
      break;
    }
    
  }

}
