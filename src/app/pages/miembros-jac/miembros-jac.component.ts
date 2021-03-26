import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormularioMiembrosJACComponent} from '../formulario-miembros-jac/formulario-miembros-jac.component'
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

  miembros:any


  constructor(
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.consultarMiembros()
  }

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  consultarMiembros(){

    firebase.database().ref('habitantes').orderByChild('rol').equalTo("MIEMBRO").once("value",(datos)=>{
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

}
