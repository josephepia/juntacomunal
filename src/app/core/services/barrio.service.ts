import { Barrio } from './../Modelos/barrio';
import { MiembroJAC } from './../Modelos/miembro-jac';
import { Injectable,Inject } from '@angular/core';
import firebase from 'firebase/app'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
export interface Item { name: string; }
@Injectable({
  providedIn: 'root'
})
export class BarrioService {

  constructor() {  }
  database = firebase.database();
  barrio: Barrio = new Barrio;
  barrioRef: firebase.database.Reference = firebase.database().ref('barrios')

  //Crea un nueva Barrio
  public createBarrio(barrio: Object) {
    return this.barrioRef.push(barrio);
  
   }
  //Obtiene nueva Barrio
  public getBarrio() {
    var starCountRef = firebase.database().ref('barrios/' + this.barrio.barrioId + '/starCount');
    starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    //updateStarCount(postElement, data);
    });
  }
  //Obtiene todos las Barrios
  getBarriosOn(): any{
  return this.barrioRef.on('value',(datos)=>{
      if(datos.exists()){
       return datos.val()
      }else{
       return null
      }
    })
  }
  getBarriosOnce(){
    return this.barrioRef.once('value').then((datos)=>{
      if(datos.exists()){       
        return datos.val()
      }else{
        return null
      }
    }).catch((error)=>{
      return null
    })
  }
  //Actualiza  Barrio
  public updateBarrio() {
   
  }
}
