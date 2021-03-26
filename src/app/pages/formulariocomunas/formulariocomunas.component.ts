import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app"
@Component({
  selector: 'app-formulariocomunas',
  templateUrl: './formulariocomunas.component.html',
  styleUrls: ['./formulariocomunas.component.scss']
})
export class FormulariocomunasComponent implements OnInit {
  nombre:any
  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    firebase.database().ref('comunas/').push({
        nombre: this.nombre
    })
  }

}
