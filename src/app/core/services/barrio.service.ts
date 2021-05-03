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

  //Crea un nueva Barrio
  public createBarrio() {
   
  }
  //Obtiene nueva Barrio
  public getBarrio() {
    
  }
  //Obtiene todos las Barrios
  public getBarrios() {
    
  }
  //Actualiza  Barrio
  public updateBarrio() {
   
  }
}
