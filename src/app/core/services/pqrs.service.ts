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
export class PQRSService {

  constructor() { }
}
