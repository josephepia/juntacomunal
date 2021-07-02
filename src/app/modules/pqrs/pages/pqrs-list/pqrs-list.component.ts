import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import firebase from "firebase/app"
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PQRSService } from './../../../../core/services/pqrs.service';
import { FormularioPQRSComponent} from './../../components/formulario-pqrs/formulario-pqrs.component'
import { UserAuthService } from 'src/app/core/services/user-auth.service';


@Component({
  selector: 'app-pqrs-list',
  templateUrl: './pqrs-list.component.html',
  styleUrls: ['./pqrs-list.component.scss']
})
export class PqrsListComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
 

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private pqrsService: PQRSService,
    private auth: UserAuthService
  ){}
  
  pqrsList:any[] =[]

  async consultarPqrsOnce(){
   this.pqrsList = await this.pqrsService.getPqrsListOnce()
  }

  userAuth:any = {}
  userDatabase:any = {}
  async consultarPropiosPqrsOnce(){
    this.pqrsList = await this.pqrsService.getPqrsListOwnerOnce(this.userAuth.uid)
  }

  
  async ngOnInit() {
   this.userAuth = await this.auth.currentUser()

   //await this.consultarPqrsOnce();

   
  this.codigo()
  }

  async codigo(){
    let condicion = await this.auth.isOnlyHabitante()
    console.log('es solo habitante_? ', condicion);
   if(condicion){
    this.consultarPropiosPqrsOnce()
    console.log('entr[e al true');
    
   }else{
    this.consultarPqrsOnce();
    console.log('entr[e al false');

   }
  }

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  goToPqrs(pqrs:any) {
    this.router.navigate([pqrs], { relativeTo: this.route });
  }

  modalFormulario() {
    const dialogRef = this.dialog.open(FormularioPQRSComponent, { data: { titulo: "Realizar Petición", pqrs: null }, width: '50%' });

    dialogRef.afterClosed().subscribe(pqrs => {
      console.log('datos ingresados al crear peticiones', pqrs);
      if (pqrs) {
        // registrar datos en firebase
        

        this.pqrsService.createPQRS(pqrs)
          .then(() => {
            console.log("peticion registrada exitosamente");
            // this.consultarPqrsOnce();
            this.codigo()

          })
          .catch((error) => {
            console.log("error al registrar peticion ", error);

          })
      }
    });
  }

}
