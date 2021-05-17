import { LineasAtencion } from './../Modelos/lineas-atencion';

import { Injectable,Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LineasAtencionService {

  constructor() { }
  database = firebase.database();
  lineasAtencion: LineasAtencion = new LineasAtencion;
  lineasAtencionref: firebase.database.Reference = firebase.database().ref('lineasAtencion')

  //Crea un nueva lineasAtencion
   createLineasAtencion(lineasAtencion: Object) {
   return this.lineasAtencionref.push(lineasAtencion);
  }
  //Obtiene nueva lineasAtencion
  public getLineasAtencion() {
    var starCountRef = firebase.database().ref('lineasAtencion/' + this.lineasAtencion.lineasAtencionId + '/starCount');
    starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    updateStarCount(postElement, data);
    });
  }
  
  //Obtiene todos las lineasAtencion
  public getLineasAtencio() {
    
  }

  getLineasAtencionOnce(){
    return this.lineasAtencionref.once('value').then((datos)=>{
      if(datos.exists()){       
        return datos.val()
      }else{
        return null
      }
    }).catch((error)=>{
      return null
    })
  }
  //Actualiza  lineasAtencion
  public updateLineasAtencion() {
   
  }
}
function postElement(postElement: any, data: any) {
  throw new Error('Function not implemented.');
}

function updateStarCount(postElement: (postElement: any, data: any) => void, data: any) {
  throw new Error('Function not implemented.');
}