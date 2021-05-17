import { ModalConfirmacionComponent } from './../../../../shared/components/modal-confirmacion/modal-confirmacion.component';
import { FormularioComponent } from './../../../lineas-atencion/components/formulario/formulario.component';
import firebase from 'firebase/app';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lineas-atencion',
  templateUrl: './lineas-atencion.component.html',
  styleUrls: ['./lineas-atencion.component.scss']
})
export class LineasAtencionComponent implements OnInit {
  displayedColumns = ['index','nombre','estrato', 'numeroHabitantes'];

  fabButtons: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create',
      tooltip: "editar",
      tooltipPosition: 'left'
    },
    {
      id: 2,
      icon: 'location_city',
      tooltip:"Registrar barrio",
      tooltipPosition: 'left'
    },
    {
      id: 3,
      icon: 'delete',
      tooltip:"eliminar",
      tooltipPosition: 'left'
    },
  ];
  constructor(private route: ActivatedRoute,
    private router: Router,public dialog: MatDialog) { 

    }

  lineasAtencion:any = {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.consultarLineasAtencionOnce(id);
    //oyente de menu
    //this.matFabMenu.onFabMenuItemSelected.emit()
  }

  consultarLineasAtencionOnce(id: any){
    firebase.database().ref('lineasAtencion/'+id).once('value',(datos)=>{
      if(datos.exists()){
        this.lineasAtencion = datos.val();
        
        this.lineasAtencion['id']= id;
      }
  })
  }
  
  modalFormulario(){
    const dialogRef = this.dialog.open(FormularioComponent,{data:  {titulo: "modificar", comuna: this.lineasAtencion}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){
         this.modificar(result)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }
  //Modificar
  modificar(datos: Object){
    firebase.database()
    .ref('lineasAtencion/'+this.lineasAtencion.id).update(datos)
    .then(()=> {
      console.log("modificado correctamente")
      this.consultarLineasAtencionOnce(this.lineasAtencion.id)
    })
    .catch((error)=>console.log("ocurrio un error al modificar ->",error))
  }
  modalEliminar(){
    const dialogRef = this.dialog.open(ModalConfirmacionComponent,{data: {titulo:"Seguro desea eliminar?",detalle:"esta accion es irreversible"}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){
         this.eliminar()
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }
  //eliminar
  eliminar(){
    firebase.database().ref('lineasAtencion/'+this.lineasAtencion.id)
    .set(null)
    .then(()=>{
      console.log('lineas de Atencion eliminada correctamte')
      this.router.navigate(['/lineasAtencion']);
    })
    .catch((error)=>console.log('ocurrio un error al intentar eliminar la comuna ',error))
  }

  opcionSeleccionada(item: any){
    console.log("seleccione la opcion -> ",  item);
    switch (item) {
      case 1:
        this.modalFormulario()
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
