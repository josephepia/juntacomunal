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

  //Crea un nueva Habitante
  public createHabitante() {
   
  }
  //Obtiene nueva Habitante
  public getHabitante() {
    
  }
  //Obtiene todos las Habitantes
  public getHabitantes() {
    
  }
  //Actualiza  comuHabitantena
  public updateHabitante() {
   
  }
}
