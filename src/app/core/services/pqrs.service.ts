import { MiembroJAC } from './../Modelos/miembro-jac';
import { Injectable,Inject } from '@angular/core';
import firebase from 'firebase/app'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PQRS } from './../Modelos/pqrs';



export interface Item { name: string; }
@Injectable({
  providedIn: 'root'
})
export class PQRSService {

  constructor() {  }
  database = firebase.database();
  pqrs: PQRS = new PQRS;
  pqrsRef: firebase.database.Reference = firebase.database().ref('PQRS')

  //Crea un nueva comuna
  createPQRS(pqrs: Object) {
   return this.pqrsRef.push(pqrs);
  }
 
  //Obtiene nueva comuna
  public getPQRS() {
    var starCountRef = firebase.database().ref('PQRS/' + this.pqrs.pqrsId + '/starCount');
    starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    //updateStarCount(postElement, data);
    });
  }

  //Obtiene todos las comunas
  getPQRSOn(): any{
  return this.pqrsRef.on('value',(datos)=>{
      if(datos.exists()){
       return datos.val()
      }else{
       return null
      }
    })
  }

  getPQRSOnce(){
    return this.pqrsRef.once('value').then((datos)=>{
      if(datos.exists()){       
        return datos.val()
      }else{
        return null
      }
      
    }).catch((error)=>{
      return null
    })
  }
  
  //Actualiza  comuna
  public updateComuna() {
   
  }
}
