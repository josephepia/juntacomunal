import { MiembroJAC } from './../Modelos/miembro-jac';
import { Injectable,Inject } from '@angular/core';
import firebase from 'firebase/app'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaPQRS } from './../Modelos/respuesta-pqrs';


@Injectable({
  providedIn: 'root'
})
export class RespuestaPQRSService {

  constructor() {  }
  database = firebase.database();
  respuesta: RespuestaPQRS = new RespuestaPQRS;
  pqrsRef: firebase.database.Reference = firebase.database().ref('respuestas')

  //Crea un nuevo PQRS
  createRespuesta(respuesta: any) {
    respuesta['fecha'] = firebase.database.ServerValue.TIMESTAMP
   return this.pqrsRef.push(respuesta);
  }
}
