import { Habitante } from './../Modelos/habitante';
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
export class HabitanteService {
  constructor() {  }
  database = firebase.database();
  habitante: Habitante = new Habitante;
  habitanteRef: firebase.database.Reference = firebase.database().ref('habitantes')

  //Crea un nueva Habitante
  public createHabitante(habitante: Object) {
    return this.habitanteRef.push(habitante);
    }
  //Obtiene nueva Habitante
  public getHabitante() {
    
  } //Obtiene todos las Barrios
  getHabitantesOn(): any{
  return this.habitanteRef.on('value',(datos)=>{
      if(datos.exists()){
       return datos.val()
      }else{
       return null
      }
    })
  }
  getHabitantesOnce(){
    return this.habitanteRef.once('value').then((datos)=>{
      if(datos.exists()){       
        return datos.val()
      }else{
        return null
      }
    }).catch((error)=>{
      return null
    })
  }
  //Actualiza  comuHabitantena
  public updateHabitante() {
   
  }
}
