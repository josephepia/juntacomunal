import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";

@Component({
  selector: 'app-consultasolicitudhabitantes',
  templateUrl: './consultasolicitudhabitantes.component.html',
  styleUrls: ['./consultasolicitudhabitantes.component.scss']
})
export class ConsultasolicitudhabitantesComponent implements OnInit {
  cedulahabitante:any;
  correohabitante:any;
  contrasenahabitante:any;
  direccionhabitante:any;

  solicitudes:any;

  constructor() { }

  ngOnInit(): void {
    this.consultarsolicitudhabitantes()
  }
  keys(objeto: Object){
    return Object.keys(objeto || {})
  }
  consultarsolicitudhabitantes(){

    firebase.database().ref('solicitudhabitantes').orderByChild('rol').equalTo("SOLICITUD").once("value",(datos)=>{
      if(datos.exists()){
        this.solicitudes = datos.val()
     
      }else{
        
        this.solicitudes = {
        
          
        }
      }
    })

  }
}
