import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { MatFabMenuComponent } from '@angular-material-extensions/fab-menu';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { FormularioComponent as FormualrioBarrioComponent } from '../../../barrios/components/formulario/formulario.component';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
@Component({
  selector: 'app-comuna',
  templateUrl: './comuna.component.html',
  styleUrls: ['./comuna.component.scss']
})
export class ComunaComponent implements OnInit {
  // @ViewChild('matFabMenu', { static: false }) matFabMenu!: MatFabMenuComponent;

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



  comuna:any = {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.consultarComunaOnce(id);

    //oyente de menu
    //this.matFabMenu.onFabMenuItemSelected.emit()
  
  }

  consultarBarriosOnce(id: any){
    firebase.database().ref('barrios/').orderByChild('idComuna').equalTo(id).once('value')
    .then((datos)=>{
      if(datos.exists()){
        let barrios:any[] = []
        datos.forEach(datosChildren => {
          barrios.push(Object.assign({id: datosChildren.key},datosChildren.val()))
        });
        
        this.comuna['barrios'] = barrios
        console.log('datos de todos los barrios -> ', datos.val());
        console.log('datos de todos los barrios dentro de comuna -> ', this.comuna);
      }
    })
  }

  consultarComunaOnce(id: any){
    firebase.database().ref('comunas/'+id).once('value',(datos)=>{
      if(datos.exists()){
        this.comuna = datos.val();
        
        this.comuna['id']= id;
        this.consultarBarriosOnce(id)
      }
  })
  }

  //metodo para llamar al modal

  modalFormulario(){
    const dialogRef = this.dialog.open(FormularioComponent,{data:  {titulo: "modificar", comuna: this.comuna}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){
         this.modificar(result)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  modalFormularioBarrio(){
    const dialogRef = this.dialog.open(FormualrioBarrioComponent,{data:  {titulo: "Registrar", barrio: {idComuna:this.comuna.id, nombreComuna:this.comuna.nombre}}, panelClass: ['row','margin-0','col-sm-8','col-md-4','col-lg-4']});

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
    .ref('comunas/'+this.comuna.id).update(datos)
    .then(()=> {
      console.log("modificado correctamente")
      this.consultarComunaOnce(this.comuna.id)
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

  //registrar barrios a esta comuna
  registrarBarrio(barrio: any){
    barrio['idComuna'] = this.comuna['id']
    barrio['nombreComuna'] = this.comuna['nombre']
    firebase.database().ref('barrios/').push(barrio).then(()=>{
      console.log('barrios registrado correctamente');
      this.consultarBarriosOnce(this.comuna['id'])
    }).catch((error)=>{
      console.log('error al registrar barrio -> ', error);
      
    })
  }

  //eliminar
  eliminar(){
    firebase.database().ref('comunas/'+this.comuna.id)
    .set(null)
    .then(()=>{
      console.log('comuna eliminada correctamte')
      this.router.navigate(['/comunas']);
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
        this.modalFormularioBarrio()
          break;
        case 3:
        this.modalEliminar()
          break;
    
      default:
        break;
    }
    
  }

}
