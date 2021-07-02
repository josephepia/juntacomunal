import { Component, OnInit, Inject} from '@angular/core';
import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import firebase from 'firebase/app';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { PQRSService } from './../../../../core/services/pqrs.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RespuestaPQRSService } from './../../../../core/services/respuesta-pqrs.service';
import { Observable, Subscription } from 'rxjs';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.scss']
})
export class PqrsComponent implements OnInit {

  //displayedColumns = ['index','nombre','estrato', 'numeroHabitantes'];
  /*
  fabButtons: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create',
      tooltip: "Responder",
      tooltipPosition: 'left'
    },
    {
      id: 2,
      icon: 'done_all',
      tooltip:"Marcar como leido",
      tooltipPosition: 'left'
    },
  ];*/


  pqrs:any = {}
  respuestas:any[] = [] 
  respuestasObserver!: Subscription


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private pqrsService: PQRSService,
    private respuestaService: RespuestaPQRSService,
    private auth: UserAuthService

  ) { }
  public datosEntrada: any
  public respuesta: any


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.consultarPQRSOnce(id);
  

    this.formulario.controls.idPqrs.setValue(id|| null);
    this.formulario.controls.descripcion.setValue(this.respuesta?.descripcion || null);
    // this.formulario.controls.fecha.setValue(this.respuesta?.fecha || null);
    this.formulario.controls.remitente.setValue(this.respuesta?.remitente || "JAC");
  }

  formulario = new FormGroup({
    idPqrs: new FormControl(null),
    descripcion: new FormControl(null, [Validators.required, Validators.maxLength(2000)]),
    remitente: new FormControl(null, [Validators.required]),
    nombreRemitente: new FormControl(null),
  });

  async consultarPQRSOnce(id: any){
    this.pqrs = await this.pqrsService.getPqrsOnce(id)
    console.log('pqrs consultado ', this.pqrs);
    
    //ahora consultaremos todas las respuestas de este pqrs
    this.consultarUltimasRespuestasOn(id)
  }

  pqrsObserver!: Subscription
  

  async consultarUltimasRespuestasOn(id: any){
    this.respuestasObserver = (await this.pqrsService.getRespuestasLastOn(id)).subscribe((respuestas)=>{
        this.respuestas = respuestas
        console.log('respuestas ', this.respuestas);
        
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

  async responder(){

    if (this.formulario.invalid) {
      return;
    }
    console.log('datos ingresados al crear peticiones', this.formulario.value);
    let user = await this.auth.currentUserDatabase()
    this.formulario.value['nombreRemitente'] = user.child('nombre').val()
    this.respuestaService.createRespuesta(this.formulario.value)
          .then(() => {
            console.log("peticion registrada exitosamente");
            this.formulario.controls.descripcion.setValue(null)
          })
          .catch((error) => {
            console.log("error al registrar peticion ", error);
          })
  }

}
