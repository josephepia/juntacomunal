import { HabitanteService } from './../../../../core/services/habitante.service';
import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormularioComponent } from '../../components/formulario/formulario.component';

@Component({
  selector: 'app-habitantes',
  templateUrl: './habitantes.component.html',
  styleUrls: ['./habitantes.component.scss']
})
export class HabitantesComponent implements OnInit {

  habitante: any = {}
  habitantes: any

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public modalService: NgbModal,
    private habitantesService: HabitanteService
    ) { }

  ngOnInit(): void {
    this.consultarHabitantesOnce()
  }
  keys(objeto: Object){
    return Object.keys(objeto || {})
  }
   //CREATE SERVICE
   modalFormulario(){
    const dialogRef = this.dialog.open(FormularioComponent, {data: {titulo: "Registrar", habitante: null}, panelClass: ['row','margin-0','col-sm-8','col-md-4','col-lg-4']});
    dialogRef.afterClosed().subscribe(habitante => {
      console.log('datos ingresados al crear habitante',habitante);
      if(habitante){
         // registrar datos en firebase
         this.habitantesService.createHabitante(habitante)
         .then(() => {
           console.log("habitante registrado exitosamente");
           this.consultarHabitantesOnce();
         })
         .catch((error) => {
          console.log("error al registrar habitante ", error);

         })

         //this.registrarBarrio(barrio)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }
  //CONSULTAR SERVICE
  consultarHabitantesOn(){
    console.log('datos devueltos por el metodo consultar habitabte ', this.habitantesService.getHabitantesOn());
  }
  consultarHabitantesOnce() {
    this.habitantesService.getHabitantesOnce().then((habitantes) => {
      if (habitantes) {
        console.log('habitantes segundo then', habitantes);
      } else {
        console.log('no existen habitantes');
      }
      this.habitantes = habitantes || {}
    })
  }

  goToHabitante(habitante: any) {
    this.router.navigate([habitante], { relativeTo: this.route });
  }

  registrarhabitante(){
    console.log("di click en registrar");
      
      firebase.database().ref('habitantes').push({
      rol:"MIEMBRO"
    })
  }
  
  registrarhabitantes(datos: Object){
    firebase.database()
    .ref('habitantes/').push(datos)
    .then(()=> {
      console.log("registrada correctamente")
    })
    .catch((error)=>console.log("ocurrio un error al registrar ->",error))
  }
}
