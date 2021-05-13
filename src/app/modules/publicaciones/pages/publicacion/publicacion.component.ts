import { Component, OnInit } from '@angular/core';
import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { PQRSService } from './../../../../core/services/pqrs.service';
import { PublicacionesService } from 'src/app/core/services/publicaciones.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss']
})
export class PublicacionComponent implements OnInit {
  fabButtons: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create',
      tooltip: "Agregar Publicacion",
      tooltipPosition: 'left'
    },
    {
      id: 2,
      icon: 'done_all',
      tooltip:"Eliminar",
      tooltipPosition: 'left'
    },
  ];
  publicaciones:any = {}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private publicacionesService: PublicacionesService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.consultarPUBLICACIONESOnce(id);
  }
  consultarPUBLICACIONESOnce(id: any){
    /* firebase.database().ref('PQRS/'+id).once('value',(datos)=>{
       if(datos.exists()){
         this.pqrs = datos.val();
         
         this.pqrs['id']= id;
         //this.consultarRespuestasOnce(id)
       }
     })*/
 
     this.publicacionesService.ConsultarPUBLICACIONESIndividual(id).then((datos)=>{
       this.publicaciones = datos;
       this.publicaciones['id']= id;
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