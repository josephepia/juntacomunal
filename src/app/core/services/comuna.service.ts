import { Comuna } from './../Modelos/comuna';
import { MiembroJAC } from './../Modelos/miembro-jac';
import { Injectable,Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { NotificacionesService } from './notificaciones.service';


@Injectable({
  providedIn: 'root'
})

export class ComunaService {

  constructor(
    private notiService: NotificacionesService
  ) {  }
  database = firebase.database();
  comuna: Comuna = new Comuna;
  comunaRef: firebase.database.Reference = firebase.database().ref('comunas')
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

  async getComunasOnce(){
    let comunas: any[] = []
    await this.comunaRef.once('value',(comunasData)=>{
      
      if(comunasData.exists()){
        comunasData.forEach((dataSnap)=>{
          let comuna = dataSnap.val()
          comuna['id'] = dataSnap.key
          comunas.push(comuna)
        })
      }else{
        console.log('no existen comunas');
        
      }
      
    }, (er)=>{     
      this.notiService.modalInformativo({titulo: "Atención", errorCode: er.message})
    })
    return comunas
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

