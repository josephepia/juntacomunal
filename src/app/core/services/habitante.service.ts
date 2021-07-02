import { Habitante } from './../Modelos/habitante';
import { MiembroJAC } from './../Modelos/miembro-jac';
import { Injectable,Inject } from '@angular/core';
import firebase from 'firebase/app'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
export interface Item { name: string; }
@Injectable({
  providedIn: 'root'
})
export class HabitanteService {
  constructor(
    private auth: UserAuthService
  ) {  }
  database = firebase.database();
  habitante: Habitante = new Habitante;
  habitanteRef: firebase.database.Reference = firebase.database().ref('habitantes')
  userRef: firebase.database.Reference = firebase.database().ref('usuarios')

  //Crea un nueva Habitante
  public createHabitante(habitante: Object) {
    return this.userRef.push(habitante);
    }

  async updateProfile(data:any){
    let user = await this.auth.currentUser()
    this.userRef.child(user?.uid ||'').update(data)
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

  ConsultarHabitanteIndividual(id: Habitante){
    const url: firebase.database.Reference = firebase.database().ref('habitantes/'+id)

    return url.once('value').then((datos)=>{
      if(datos.exists()){
        return datos.val();
      }else{
        return null
      }
    }).catch((error)=>{
      return null
    })
  }

  //Actualiza  comuHabitantena
  public eliminarHabitante(id: Habitante) {

    const url: firebase.database.Reference = firebase.database().ref('habitantes/'+id)

    url.set(null)
    .then(()=>{
      console.log('comuna eliminada correctamte')
    })
    .catch((error)=>console.log('ocurrio un error al intentar eliminar la comuna ',error))
  }
}
