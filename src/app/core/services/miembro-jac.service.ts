import { MiembroModule } from './../../modules/junta/pages/miembro/miembro.module';
import { MiembroJAC } from './../Modelos/miembro-jac';
import { Injectable, Inject } from '@angular/core';
import firebase from 'firebase/app'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
export interface Item { name: string; }
@Injectable({
  providedIn: 'root'
})
export class MiembroJACService {

  constructor() { }
  database = firebase.database();
  miembro: MiembroJAC = new MiembroJAC;
  miembroRef: firebase.database.Reference = firebase.database().ref('MiembrosJAC')
  //Crea un nueva Miembro
  public createMiembro(miembro: Object) {
    return this.miembroRef.push(miembro);
  }
  //Obtiene nueva Miembro
  public getMiembro() {
    var starCountRef = firebase.database().ref('MiembrosJAC/' + this.miembro.identificacion + '/starCount');
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      //updateStarCount(postElement, data);
    });
  }
  //Obtiene todos las Miembro
  getMiembrosOn(): any {
    return this.miembroRef.on('value', (datos) => {
      if (datos.exists()) {
        return datos.val()
      } else {
        return null
      }
    })
  }
  getMiembrosOnce() {
    return this.miembroRef.once('value').then((datos) => {
      if (datos.exists()) {
        return datos.val()
      } else {
        return null
      }
    }).catch((error) => {
      return null
    })
  }

  //Actualiza  Miembro
  public updateMiembro() {

  }
}

