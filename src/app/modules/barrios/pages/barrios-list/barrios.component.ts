import { BarrioService } from './../../../../core/services/barrio.service';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FormularioComponent } from '../../components/formulario/formulario.component';

@Component({
  selector: 'app-barrios',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.scss']
})
export class BarriosComponent implements OnInit {
 
  barrio: any = {}
  barrios: any[] = []

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    public modalService: NgbModal,
    private barrioService: BarrioService
  ) { }
  ngOnInit(): void {
    this.consultarBarriosOnce()
  }
  keys(objeto: Object){
    return Object.keys(objeto || {})
  }
  //CREATE SERVICE
  modalFormulario(){
    const dialogRef = this.dialog.open(FormularioComponent, {data: {titulo: "Registrar", barrio: null}, panelClass: ['row','margin-0','col-sm-8','col-md-4','col-lg-4']});

    dialogRef.afterClosed().subscribe(barrio => {
      console.log('datos ingresados al crear barrio',barrio);
      if(barrio){
         // registrar datos en firebase
         this.barrioService.createBarrio(barrio)
         .then(() => {
           console.log("Barrio registrado exitosamente");
           this.consultarBarriosOnce();
         })
         .catch((error) => {
           console.log("error al registrar Barrio ", error);

         })

         //this.registrarBarrio(barrio)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }
  //CONSULTAR SERVICE
  consultarBarriosOn(){
    console.log('datos devueltos por el metodo consultar Barriosson ', this.barrioService.getBarriosOn());
  }
  consultarBarriosOnce() {
    this.barrioService.getBarriosOnce().then((barrios) => {
      if (barrios) {
        console.log('barrios segundo then', barrios);
      } else {
        console.log('no existen comunas');
      }
      this.barrios = barrios || {}
    })
  }
  //REVISAR
  registrarBarrio(datos: Object){
    firebase.database()
    .ref('barrios/').push(datos)
    .then(()=> {
      console.log("registrada correctamente")
    })
    .catch((error)=>console.log("ocurrio un error al registrar ->",error))
  }
  goToBarrio(barrio:any) {
    this.router.navigate([barrio], { relativeTo: this.route });
  }

}
