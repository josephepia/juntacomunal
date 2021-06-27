import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
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
  rootRef = this.db.ref();
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

  

  async getRolesOn(){

      return new Promise((resolve, reject) => {
        const onError = (error: any) => reject(error);
        const onData = (snap: any) => resolve(snap.val());
    
        this.rolesRef.on("value", onData, onError);
      });
 
    
  }

  async getRolOnce(id: any){
    let rol:any = {}
    await this.rolesRef.child(id).once('value',(rolesData)=>{
      
      if(rolesData.exists()){
        rol = rolesData.val()
        rol['id'] = rolesData.key
      }
      
    }, (er)=>{     
      this.notiService.modalInformativo({titulo: "Atención", descripcion: er.message})
    })
    return rol
  }
  async getRolOn(id: any){
  

    return new Observable((observer) => {
      
      let rol:any = {}
      this.rolesRef.child(id).on('value',(rolesData)=>{
      
      if(rolesData.exists()){
        rol = rolesData.val()
        rol['id'] = rolesData.key
      }
      observer.next(rol)
      
    }, (er)=>{     
      this.notiService.modalInformativo({titulo: "Atención", descripcion: er.message})
      observer.error(er)
    });
    
      // When the consumer unsubscribes, clean up data ready for next subscription.
      return ()=> {
        this.rolesRef.off()
      };
    });

  }

   //listar permisos once
   async getPermisosOnce(){
    let permisos: any[] = []
    await this.permisosRef.once('value',(permisosData)=>{
      
      if(permisosData.exists()){
        permisosData.forEach((dataSnap)=>{
          let permiso = dataSnap.val()
          permiso['id'] = dataSnap.key
          permisos.push(permiso)
        })
      }
      
    }, (er)=>{     
      this.notiService.modalInformativo({titulo: "Atención", errorCode: er.message})
    })
    return permisos
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

  updatePermisosIntoRol(idRol:any, idPermiso:any, data:any){
    console.log('datos que llegan  idrol',idRol);
    console.log('datos que llegan  idPermiso',idPermiso);
    console.log('datos que llegan  data',data);
    
    this.rolesRef.child(idRol).child('permisos').child(idPermiso).update(data,(er)=>{
      console.log('completado ', er);
      
    })
  }

  updateAllPermisosIntoRol(idRol:any, idPermisos:any[], type: string, data:boolean){
    console.log('datos que llegan  idrol',idRol);
    console.log('datos que llegan  idPermisos',idPermisos);
    console.log('datos que llegan  data',data);
    
    let updates:any = {}

    for(let permiso of idPermisos){
      updates['roles/'+idRol+'/permisos/'+permiso+(type == 'read' ? '/read': '/write')] = data
    }
    this.rootRef.update(updates,(er)=>{
      console.log('completado ', er);
      
    })
  }

  


}
