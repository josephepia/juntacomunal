import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { FormularioComunaComponent } from 'src/app/components/formulario-comuna/formulario-comuna.component';
import { ModalConfirmacionComponent } from 'src/app/components/modal-confirmacion/modal-confirmacion.component';
import { FormulariocomunasComponent } from '../formulariocomunas/formulariocomunas.component';
@Component({
  selector: 'app-comuna',
  templateUrl: './comuna.component.html',
  styleUrls: ['./comuna.component.scss']
})
export class ComunaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,public dialog: MatDialog) { }

  comuna:any = {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.consultarComunaOne(id);
  
  }

  consultarComunaOne(id: any){
    firebase.database().ref('comunas/'+id).once('value',(datos)=>{
      if(datos.exists()){
        this.comuna = datos.val();
        
        this.comuna['id']= id;
      }
  })
  }

  //metodo para llamar al modal

  modalFormulario(){
    const dialogRef = this.dialog.open(FormularioComunaComponent,{data:  {titulo: "modificar", comuna: this.comuna}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){
         this.modificar(result)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  modificar(datos: Object){
    firebase.database()
    .ref('comunas/'+this.comuna.id).update(datos)
    .then(()=> {
      console.log("modificado correctamente")
      this.consultarComunaOne(this.comuna.id)
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
    firebase.database().ref('comunas/'+this.comuna.id)
    .set(null)
    .then(()=>{
      console.log('comuna eliminada correctamte')
      this.router.navigate(['/comunas']);
    })
    .catch((error)=>console.log('ocurrio un error al intentar eliminar la comuna ',error))
  }

}
