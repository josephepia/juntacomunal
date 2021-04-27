import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import firebase from 'firebase/app';
import { FormularioCargoComponent } from '../../components/formulario-cargo/formulario-cargo.component';
@Component({
  selector: 'app-cargos-list',
  templateUrl: './cargos-list.component.html',
  styleUrls: ['./cargos-list.component.scss']
})
export class CargosListComponent implements OnInit {
  cargos:any = {}
  constructor(
    public dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.consultarCargos()
  }

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  consultarCargos(){
    firebase.database().ref('cargos').on('value',(datos)=>{
      if(datos.exists()){
        this.cargos = datos.val()        
      }else{
        this.cargos = {}
        console.log('no hay datos');
        
      }
    })
  }


  
  modalFormulario(){
    const dialogRef = this.dialog.open(FormularioCargoComponent, {data: {titulo: "Registrar", cargo: null}, panelClass: ['row','margin-0','col-sm-8','col-md-4','col-lg-4']});

    dialogRef.afterClosed().subscribe(cargo => {
      console.log('datos ingresados al crear cargo',cargo);
      if(cargo){
         // registrar datos en firebase
        this.registrarcargo(cargo)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  
  registrarcargo(datos: Object){
    firebase.database()
    .ref('cargos/').push(datos)
    .then(()=> {
      console.log("registrada correctamente")
    })
    .catch((error)=>console.log("ocurrio un error al registrar ->",error))
  }

  goTocargo(cargo:any) {
    this.router.navigate([cargo], { relativeTo: this.route });
  }

}
