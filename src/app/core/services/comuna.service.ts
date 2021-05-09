import { Comuna } from './../Modelos/comuna';
import { MiembroJAC } from './../Modelos/miembro-jac';
import { Injectable,Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})

export class ComunaService {

  constructor() {  }
  database = firebase.database();
  comuna: Comuna = new Comuna;

  //Crea un nueva comuna
   createComuna(comuna: Object) {
   return this.comunaRef.push(comuna);
  }

  //Obtiene nueva comuna
  public getComuna() {
    var starCountRef = firebase.database().ref('comunas/' + this.comuna.comunaId + '/starCount');
    starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    updateStarCount(postElement, data);
    });
  }
  
  //Obtiene todos las comunas
  public getComunas() {
    
  }

  getComunasOnce(){
    return this.comunaRef.once('value').then((datos)=>{
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
function postElement(postElement: any, data: any) {
  throw new Error('Function not implemented.');
}

function updateStarCount(postElement: (postElement: any, data: any) => void, data: any) {
  throw new Error('Function not implemented.');
}

