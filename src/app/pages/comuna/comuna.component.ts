import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { FormularioComunaComponent } from 'src/app/components/formulario-comuna/formulario-comuna.component';
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
    const dialogRef = this.dialog.open(FormularioComunaComponent,{data: this.comuna});

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

}
