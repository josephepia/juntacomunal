import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { NotificacionesService } from './notificaciones.service';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(
    private router: Router,
    private notiService: NotificacionesService
    ) { }
  db = firebase.database();
  autenticationRef: firebase.database.Reference = this.db.ref('usuarios');
  rolesRef: firebase.database.Reference = this.db.ref('roles');
  permisosRef: firebase.database.Reference = this.db.ref('permisos');
  autorizacionesRef: firebase.database.Reference = this.db.ref('autorizaciones');


  user:any = {}

  async isAutenticated(){
  let consulta = await new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    });

    this.user = (consulta || null)
    return consulta
  }
  //INICIAR SESION
  loginEmail(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email,password)
    .then( res =>{
      console.log(res);
    })
    .catch((error) => {
      console.log('error al iniciar sesion: ', error);
      this.notiService.modalInformativo({titulo: "Atención", descripcion: error.code})
    });
  }
  //Registrarse
  async signUpEmail(email: string, password: string){
    return await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      console.log('user creado');
      return userCredential.user
     
    })
    .catch((error) => {
      
      console.log('error al crear cuenta de usuario -> ', error);
      return null
    });
  }
  //CERRAR SESION
  logOutSession(){

    firebase.auth().signOut()
    .then(()=>{
      console.log('sesion de firebase cerrada');
      //this.router.navigate(['home'])
      
    }).catch((error)=>{
      console.log('error al intentar desconectarse de firebase->', error);
    });

    
  }

  //listar roles once
  async getRolesOnce(){
    let roles: any[] = []
    await this.rolesRef.once('value',(rolesData)=>{
      
      if(rolesData.exists()){
        rolesData.forEach((dataSnap)=>{
          let rol = dataSnap.val()
          rol['id'] = dataSnap.key
          roles.push(rol)
        })
      }
      
    }, (er)=>{     
      this.notiService.modalInformativo({titulo: "Atención", descripcion: er.message})
    })
    return roles
  }

  async getRolOnce(id: any){
    let rol:any = {}
    await this.rolesRef.child(id).once('value',(rolesData)=>{
      
      if(rolesData.exists()){
        rol = rolesData.val()
        rol[id] = rolesData.key
      }
      
    }, (er)=>{     
      this.notiService.modalInformativo({titulo: "Atención", descripcion: er.message})
    })
    return rol
  }

  async getRolesOn(){

      return new Promise((resolve, reject) => {
        const onError = (error: any) => reject(error);
        const onData = (snap: any) => resolve(snap.val());
    
        this.rolesRef.on("value", onData, onError);
      });
 
    
  }

  agregarRol(rol: Object){
    let agregarRol = firebase.functions().httpsCallable('agregarRol');
    return agregarRol(rol).catch((error)=>{
      this.notiService.modalInformativo({titulo: "Advertencia", descripcion: error.code})
    })
      
  }

  agregarPermiso(rol: Object){
    let agregarPermiso = firebase.functions().httpsCallable('agregarPermiso');
    return agregarPermiso(rol).catch((error)=>{
      this.notiService.modalInformativo({titulo: "Advertencia", descripcion: error.code})
    })
      
  }

  


}
