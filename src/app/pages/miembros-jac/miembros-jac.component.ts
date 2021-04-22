import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormularioMiembrosJACComponent} from '../formulario-miembros-jac/formulario-miembros-jac.component'
import { FormularioJacComponent } from 'src/app/components/formulario-jac/formulario-jac.component';
import { FormulariobarriosComponent} from '../formulariobarrios/formulariobarrios.component'
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-miembros-jac',
  templateUrl: './miembros-jac.component.html',
  styleUrls: ['./miembros-jac.component.scss']
})
export class MiembrosJACComponent implements OnInit {

  identificacion:any
  nombrehabitante:any
  apellidohabitante:any
  nacimientohabitante:any
  generohabitante:any
  telefonohabitante:any
  direccionhabitante:any
  rol:any
  


  constructor(private route: ActivatedRoute,
    private router: Router,public dialog: MatDialog,
    public modalService: NgbModal
  ) {}
  miembros:any = {}
  ngOnInit(): void {
    this.consultarMiembros()
  }
  

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  consultarMiembros(){

    firebase.database().ref('MiembrosJAC').once("value",(datos)=>{
      if(datos.exists()){
        this.miembros = datos.val()
      }else{
        this.miembros = {}
      }
    })

  }

  abrirRegistrarJAC() {
    this.modalService.open(FormularioMiembrosJACComponent, { size: 'lg' });
  }

  modalFormulario(){
    //aca no se puede mandar nada al formulario ya que se va a crear uno nuevo
    const dialogRef = this.dialog.open(FormularioJacComponent, {data: {titulo: "Registrar", miembros: this.miembros}});

    dialogRef.afterClosed().subscribe(miembros => {
      console.log('datos ingresados al crear comuna',miembros);
      if(miembros){
         // registrar datos en firebase
        this.registrarMiembro(miembros)
        
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  registrarMiembro(datos:any){
      firebase.database()
    .ref('MiembrosJAC/').push(datos)
    .then(()=> {
      console.log("registrada correctamente")
    })
    .catch((error)=>console.log("ocurrio un error al registrar ->",error))
  }

}
