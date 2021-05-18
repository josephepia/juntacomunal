import { Component, OnInit } from '@angular/core';
import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { PQRSService } from './../../../../core/services/pqrs.service';
import { PublicacionesService } from 'src/app/core/services/publicaciones.service';
import { FormularioComponent } from '../../components/formulario/formulario.component';

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
      tooltip: "Editar Publicacion",
      tooltipPosition: 'left'
    },
    {
      id: 2,
      icon: 'delete',
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
   eliminar(){
    firebase.database().ref('PUBLICACIONES/'+this.publicaciones.id)
    .set(null)
    .then(()=>{
      console.log('Publicacion eliminada correctamte')
      this.router.navigate(['/PUBLICACIONES']);
    })
    .catch((error)=>console.log('ocurrio un error al intentar eliminar la Publicacion ',error))
  }
   modalEliminar(){
    const dialogRef = this.dialog.open(ModalConfirmacionComponent,{data: {titulo:"Seguro desea eliminar la publicacion?",detalle:"esta accion es irreversible"}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){
         this.eliminar()
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }
  modificar(datos: Object){
    firebase.database()
    .ref('PUBLICACIONES/'+this.publicaciones.id).update(datos)
    .then(()=> {
      console.log("modificado correctamente")
      this.consultarPUBLICACIONESOnce(this.publicaciones.id)
    })
    .catch((error)=>console.log("ocurrio un error al modificar ->",error))
  }

  modalFormularioModificar(){
    const dialogRef = this.dialog.open(FormularioComponent,{data:  {titulo: "modificar", publicaciones: this.publicaciones}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){
         this.modificar(result)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

   opcionSeleccionada(item: any){
    console.log("seleccione la opcion -> ",  item);

    switch (item) {
      case 1:
        this.modalFormularioModificar();
      break;
      
      case 2:
        this.modalEliminar()
      break;
      
      case 3:
        
      break;
    
      default:
      break;
    }
    
  }
  }