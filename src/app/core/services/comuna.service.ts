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
  public createComuna(comuna: Comuna) {
    firebase.database().ref('comunas/' + comuna.comunaId).set({
      comunaNombre: comuna.nombreComuna,
      comunaMunicipio: comuna.municipioComuna
    });
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

