import { MiembroJAC } from './../Modelos/miembro-jac';
import { Injectable,Inject } from '@angular/core';
import firebase from 'firebase/app'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicaciones } from '../Modelos/publicaciones';
export interface Item { name: string; }
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor() { }
  database = firebase.database();
  publicaciones: Publicaciones = new Publicaciones;
  publicacionesRef: firebase.database.Reference = firebase.database().ref('PUBLICACIONES')
  
  createPUBLICACIONES(publicaciones: Object) {
    return this.publicacionesRef.push(publicaciones);
   }
  
  public getPUBLICACIONES() {
    var starCountRef = firebase.database().ref('PUBLICACIONES/' + this.publicaciones.publicacionId + '/starCount');
    starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    //updateStarCount(postElement, data);
    });
  }

  getPUBLICACIONESOn(): any{
    return this.publicacionesRef.on('value',(datos)=>{
        if(datos.exists()){
         return datos.val()
        }else{
         return null
        }
      })
  }
  getPUBLICACIONESOnce(){
    return this.publicacionesRef.once('value').then((datos)=>{
      if(datos.exists()){       
        return datos.val()
      }else{
        return null
      }
      
    }).catch((error)=>{
      return null
    })
  }
  ConsultarPUBLICACIONESIndividual(id: Publicaciones){
    const url: firebase.database.Reference = firebase.database().ref('PUBLICACIONES/'+id)

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

}
