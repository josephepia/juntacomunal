import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import firebase from "firebase/app";
@Component({
  selector: 'app-solicitud-registro-habitantes',
  templateUrl: './solicitud-registro-habitantes.component.html',
  styleUrls: ['./solicitud-registro-habitantes.component.scss']
})
export class SolicitudRegistroHabitantesComponent implements OnInit {
  firstFormGroup: any;
  secondFormGroup: any;
  CorreoFormGroup: any;
  ContrasenaFormGroup: any;
  DireccionFormGroup: any;
  ComentarioFormGroup:any;
  isEditable = false;

  cedulahabitante:any;
  correohabitante:any;
  contrasenahabitante:any;
  direccionhabitante:any;
  comentarioshabitante:any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['',[Validators.min(10)]],
        
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.CorreoFormGroup = this._formBuilder.group({
      CorreoCtrl: ['', Validators.email]
        
    });
    this.ContrasenaFormGroup = this._formBuilder.group({
      ContrasenaCtrl: ['', [Validators.required, Validators.minLength(6)]],
        
    });
    this.DireccionFormGroup = this._formBuilder.group({
      DireccionCtrl: ['', Validators.required]
        
    });
    this.ComentarioFormGroup = this._formBuilder.group({
      ComentarioCtrl: ['', Validators.required]
        
    });
    
  }
  images = [1, 2, 3].map((n) => `https://picsum.photos/id/${n}/2000/500`);

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  registrarsolicitudhabitante(){
    console.log("di click en registrar");
      
    firebase.database().ref('solicitudhabitantes').push({
      cedulahabitante: this.cedulahabitante,
      correohabitante: this.correohabitante,
      contrasenahabitante: this.contrasenahabitante,
      direccionhabitante: this.direccionhabitante,
      comentarioshabitante:this.comentarioshabitante,
      rol: "SOLICITUD"
    })
  }
}
