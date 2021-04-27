import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { FormularioCargoComponent } from '../../components/formulario-cargo/formulario-cargo.component';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {

  displayedColumns = ['index','identificacion','nombre'];

  fabButtons: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create',
      tooltip: "editar",
      tooltipPosition: 'left'
    },
    {
      id: 2,
      icon: 'person_add',
      tooltip:"Asignar a un usuario",
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



  cargo:any = {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('idCargo');
    this.consultarCargoOnce(id);

    //oyente de menu
    //this.matFabMenu.onFabMenuItemSelected.emit()
  
  }


  consultarCargoOnce(id: any){
    firebase.database().ref('cargos/'+id).once('value',(datos)=>{
      if(datos.exists()){
        this.cargo = datos.val();
        
        this.cargo['id']= id;
        //this.consultarUsuarios(id)
      }
  })
  }

  //metodo para llamar al modal

  modalFormulario(){
    const dialogRef = this.dialog.open(FormularioCargoComponent,{data:  {titulo: "Modificar", cargo: this.cargo}, panelClass: ['row','margin-0','col-sm-8','col-md-4','col-lg-4']});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){
         this.modificar(result)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  modalFormularioHabitante(){
    return 

    //aun por implementar

    const dialogRef = this.dialog.open(FormularioCargoComponent,{data:  {titulo: "Registrar", barrio: {idcargo:this.cargo.id, nombrecargo:this.cargo.nombre}}, panelClass: ['row','margin-0','col-sm-8','col-md-4','col-lg-4']});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){

        console.log('datos del barrio a registrar -> ',result);
        
         this.registrarBarrio(result)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  modificar(datos: Object){
    firebase.database()
    .ref('cargos/'+this.cargo.id).update(datos)
    .then(()=> {
      console.log("modificado correctamente")
      this.consultarCargoOnce(this.cargo.id)
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

  //registrar barrios a esta cargo
  registrarBarrio(barrio: any){
    barrio['idcargo'] = this.cargo['id']
    barrio['nombrecargo'] = this.cargo['nombre']
    firebase.database().ref('barrios/').push(barrio).then(()=>{
      console.log('barrios registrado correctamente');
      
    }).catch((error)=>{
      console.log('error al registrar barrio -> ', error);
      
    })
  }

  //eliminar
  eliminar(){
    firebase.database().ref('cargos/'+this.cargo.id)
    .set(null)
    .then(()=>{
      console.log('cargo eliminada correctamte')
      this.router.navigate(['/cargos']);
    })
    .catch((error)=>console.log('ocurrio un error al intentar eliminar la cargo ',error))
  }

  opcionSeleccionada(item: any){
    console.log("seleccione la opcion -> ",  item);

    switch (item) {
      case 1:
        this.modalFormulario()
        break;
        case 2:
        this.modalFormularioHabitante()
          break;
        case 3:
        this.modalEliminar()
          break;
    
      default:
        break;
    }
    
  }

}
