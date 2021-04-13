import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulariocomunas',
  templateUrl: './formulariocomunas.component.html',
  styleUrls: ['./formulariocomunas.component.scss']
})
export class FormulariocomunasComponent implements OnInit {
  nombre:any
  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  registrar(){
    try {
      firebase.database().ref('comunas/').push({
        nombre: this.nombre
      })

      alert("REGISTRO EXITOSO");
      this.activeModal.close();
    } catch (error) {
      alert("ALGO SALIO MAL");
    }
    
  }

  onReset(){
    this.activeModal.close();
  }

}
