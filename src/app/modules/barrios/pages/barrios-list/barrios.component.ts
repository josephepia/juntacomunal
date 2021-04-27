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
 
  barrios:any = {}
  constructor(
    public dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.consultarBarrios()
  }

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  consultarBarrios(){
    firebase.database().ref('barrios').on('value',(datos)=>{
      if(datos.exists()){
        this.barrios = datos.val()        
      }else{
        this.barrios = {}
        console.log('no hay datos');
        
      }
    })
  }


  
  modalFormulario(){
    const dialogRef = this.dialog.open(FormularioComponent, {data: {titulo: "Registrar", barrio: null}, panelClass: ['row','margin-0','col-sm-8','col-md-4','col-lg-4']});

    dialogRef.afterClosed().subscribe(barrio => {
      console.log('datos ingresados al crear barrio',barrio);
      if(barrio){
         // registrar datos en firebase
        this.registrarBarrio(barrio)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  
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
