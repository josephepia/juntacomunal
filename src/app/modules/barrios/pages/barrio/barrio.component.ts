import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { FormularioComponent } from '../../components/formulario/formulario.component';

@Component({
  selector: 'app-barrio',
  templateUrl: './barrio.component.html',
  styleUrls: ['./barrio.component.scss']
})
export class BarrioComponent implements OnInit {

  fabButtons: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create',
      tooltip: "editar",
      tooltipPosition: 'left'
    },
    {
      id: 2,
      icon: 'delete',
      tooltip:"eliminar",
      tooltipPosition: 'left'
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  

  barrio:any = {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.consultarBarrioOnce(id);

  }

  consultarBarrioOnce(id: any){
    firebase.database().ref('barrios/'+id).once('value',(datos)=>{
      if(datos.exists()){
        this.barrio = datos.val();
        
        this.barrio['id']= id;
      }
  })
  }

  //metodo para llamar al modal

  modalFormulario(){
    const dialogRef = this.dialog.open(FormularioComponent,{data:  {titulo: "Modificar", barrio: this.barrio}, panelClass: ['row','margin-0','col-sm-8','col-md-4','col-lg-4']});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){

        console.log('datos del barrio a registrar -> ',result);
        
         this.modificar(result)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  modificar(datos: Object){
    firebase.database()
    .ref('barrios/'+this.barrio.id).update(datos)
    .then(()=> {
      console.log("modificado correctamente")
      this.consultarBarrioOnce(this.barrio.id)
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
    firebase.database().ref('barrios/'+this.barrio.id)
    .set(null)
    .then(()=>{
      console.log('barrio eliminada correctamte')
      this.router.navigate(['/barrios']);
    })
    .catch((error)=>console.log('ocurrio un error al intentar eliminar la barrio ',error))
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
    
      default:
        break;
    }
    
  }
}
