import { MiembroJAC } from './../Modelos/miembro-jac';
import { Injectable,Inject } from '@angular/core';
import firebase from 'firebase/app'
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PQRS } from './../Modelos/pqrs';
import { NotificacionesService } from './notificaciones.service';



export interface Item { name: string; }
@Injectable({
  providedIn: 'root'
})
export class PQRSService {

  constructor(
    private notifi: NotificacionesService
  ) {  }
  database = firebase.database();
  pqrs: PQRS = new PQRS;
  pqrsRef: firebase.database.Reference = firebase.database().ref('pqrs')
  respuestasRef: firebase.database.Reference = firebase.database().ref('respuestas')

  //Crea un nuevo PQRS
  createPQRS(pqrs: any) {
   return this.pqrsRef.push(pqrs);
  }
 
  //no se lo que hace xD
  public getPQRS() {
    var starCountRef = firebase.database().ref('PQRS/' + this.pqrs.pqrsId + '/starCount');
    starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    //updateStarCount(postElement, data);
    });
  }


  async getPqrsListOnce(){
    let pqrsList:any[] = []

    await this.pqrsRef.once('value',(data)=>{
      if(data.exists()){
        data.forEach((pqrsSnap)=>{
          let pqrs = pqrsSnap.val()
          pqrs['id']= pqrsSnap.key
          pqrsList.push(pqrs)
        })
      }
    },
    (error)=>{
      console.log('error al consultar los pqrs', error);
      
    }
    )

    return pqrsList
  }

  //consultar mis propios pqrs
  async getPqrsListOwnerOnce(uid: string){
    let pqrsList:any[] = []

    console.log('uid que llega -> ', uid);
    

    await this.pqrsRef.orderByChild('remitente').equalTo(uid).once('value',(data)=>{
      if(data.exists()){
        data.forEach((pqrsSnap)=>{
          let pqrs = pqrsSnap.val()
          pqrs['id']= pqrsSnap.key
          pqrsList.push(pqrs)
        })
      }
    },
    (error)=>{
      console.log('error al consultar los pqrs', error);
      
    }
    )

    return pqrsList
  }

  async getPqrsOnce(id: string){

    let pqrs:any = {}

    await this.pqrsRef.child(id).once('value',(data)=>{
      if(data.exists()){
      
          pqrs = data.val()
          pqrs['id']= data.key
        
      
      
      }else{
        pqrs= {}
      }
    },
    (error)=>{
      console.log('error al consultar los pqrs', error);
      
    }
    );
    return pqrs
  }

  // consultar respuestar por idPqrs
  async getRespuestasOnce(idPqrs: string){
    let respuestas:any[] = []

    await this.respuestasRef.orderByChild('idPqrs').equalTo(idPqrs).once('value',(data)=>{
      if(data.exists()){
        data.forEach((respuestaSnap)=>{
          let respuesta = respuestaSnap.val()
          respuesta['id']= respuestaSnap.key
          respuestas.push(respuesta)
        })
      }
    },
    (error)=>{
      console.log('error al consultar los pqrs', error);
      
    }
    )

    return respuestas
  }

  //consultar ultimas respuestas de pqrs online
  async getRespuestasLastOn(idPqrs: string){

    return new Observable<any[]>((observer) => {
      
    let respuestas:any[] = []
      
      this.respuestasRef.orderByChild('idPqrs').equalTo(idPqrs).limitToLast(5).on('value',(data)=>{
        respuestas = []
      
      if(data.exists()){
        data.forEach((respuestaSnap)=>{
         let  respuesta = respuestaSnap.val()
          respuesta['id'] = respuestaSnap.key
          respuestas.push(respuesta)
        })
        
      }
      observer.next(respuestas)
      
    }, (er)=>{     
      this.notifi.modalInformativo({titulo: "Atención", errorCode: er.message})
      observer.error(er)
    });
    
      // When the consumer unsubscribes, clean up data ready for next subscription.
      return ()=> {
        this.respuestasRef.off()
      };
    });

  }

  //consultar ultimas respuestas de pqrs online
  async getRespuestasOn(idPqrs: string){

    return new Observable((observer) => {
      
    let respuestas:any[] = []
      
      this.respuestasRef.orderByChild('idPqrs').equalTo(idPqrs).on('value',(data)=>{
      
      if(data.exists()){
        data.forEach((respuestaSnap)=>{
         let  respuesta = respuestaSnap.val()
          respuesta['id'] = respuestaSnap.key
          respuestas.push(respuesta)
        })
        
      }
      observer.next(respuestas)
      
    }, (er)=>{     
      this.notifi.modalInformativo({titulo: "Atención", errorCode: er.message})
      observer.error(er)
    });
    
      // When the consumer unsubscribes, clean up data ready for next subscription.
      return ()=> {
        this.respuestasRef.off()
      };
    });

  }



  //Obtiene todos los PQRS
  getPQRSOn(): any{
  return this.pqrsRef.on('value',(datos)=>{
      if(datos.exists()){
       return datos.val()
      }else{
       return null
      }
    })
  }



  //Obtener un PQRS

  ConsultarPQRSIndividual(id: PQRS){
    const url: firebase.database.Reference = firebase.database().ref('PQRS/'+id)

    return url.once('value').then((datos)=>{
      if(datos.exists()){
        return datos.val();
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
