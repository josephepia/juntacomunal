import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormulariobarriosComponent} from '../formulariobarrios/formulariobarrios.component'

@Component({
  selector: 'app-barrios',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.scss']
})
export class BarriosComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.consultarBarrios()
  }
  barrios:any
  
  keys(objeto: Object){
    return Object.keys(objeto|| {})
  }

  consultarBarrios(){
    firebase.database().ref('barrios').on('value',(datos)=>{
      if(datos.exists()){
        this.barrios = datos.val()
       
  
        
      }else{
        this.barrios = {}
        console.log('no hay datos');
        
      }
    })
  }

  abrirRegistrarBarrios() {  
    this.modalService.open(FormulariobarriosComponent, { centered: true });
  }
  

}
