import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import firebase from "firebase/app"
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PQRSService } from './../../../../core/services/pqrs.service';
import { FormularioPQRSComponent} from './../../components/formulario-pqrs/formulario-pqrs.component'


@Component({
  selector: 'app-pqrs-list',
  templateUrl: './pqrs-list.component.html',
  styleUrls: ['./pqrs-list.component.scss']
})
export class PqrsListComponent implements OnInit {

  
  comuna:any = {}
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
 

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private pqrsService: PQRSService
  ){}
  
  pqrs_list:any

  consultarPQRSOnce(){
    this.pqrsService.getPQRSOnce().then((pqrs)=>{
     if(pqrs){
      console.log('comunas segundo then', this.pqrs_list);
      
      
     }else{
       console.log('no existen comunas');
       
     }
      this.pqrs_list = pqrs || {}
    })
   
  }

  
  ngOnInit(): void {
    this.consultarPQRSOnce();
  }

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  goToPqrs(pqrs:any) {
    this.router.navigate([pqrs], { relativeTo: this.route });
  }

  modalFormulario() {
    const dialogRef = this.dialog.open(FormularioPQRSComponent, { data: { titulo: "Realizar Petición", pqrs: null } });

    dialogRef.afterClosed().subscribe(pqrs => {
      console.log('datos ingresados al crear peticiones', pqrs);
      if (pqrs) {
        // registrar datos en firebase
        

        this.pqrsService.createPQRS(pqrs)
          .then(() => {
            console.log("peticion registrada exitosamente");
            this.consultarPQRSOnce();

          })
          .catch((error) => {
            console.log("error al registrar peticion ", error);

          })
      }
    });
  }

}
