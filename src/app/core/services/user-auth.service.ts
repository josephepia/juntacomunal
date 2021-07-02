import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';
import { NotificacionesService } from './notificaciones.service';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(
    private router: Router,
    private notiService: NotificacionesService
    ) {
      console.log('constructor de user service');
      
      this.userChanges.subscribe((value) => {
        this.user = value
       
        
    });

    this.auth.onAuthStateChanged((user)=>{
     
      if(user){
        this.userChanges.next(user)
      }else{
        this.userChanges.next(null)

      }
    })

     }
  db = firebase.database();
  auth = firebase.auth()
  rootRef = this.db.ref();
  userRef: firebase.database.Reference = this.db.ref('usuarios');
  rolesRef: firebase.database.Reference = this.db.ref('roles');
  permisosRef: firebase.database.Reference = this.db.ref('permisos');
  autorizacionesRef: firebase.database.Reference = this.db.ref('autorizaciones');


  user:any

  async currentUser(){
  let consulta = await new Promise<firebase.User | null>((resolve, reject) => {
      const unsubscribe = this.auth.onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    });

 this.user = (consulta || null)    
 //this.userChanges.next(consulta)
    return consulta
  }

  async currentUserDatabase(){
    await this.currentUser()
    return await this.userRef.child(this.user.uid).get()
  }

  async isOnlyHabitante(){

    console.log('user uid habitante ', this.user.uid);
    
    let roles:any[] = []
    let rolesFiltrados:any[] = []
    await this.userRef.child(this.user.uid).child('roles').once('value',(datos)=>{
      if(datos.exists()){
        //tiene roles 
        datos.forEach((dataRol)=>{
          roles.push(dataRol.key)
        })

        console.log('roles database ', roles);
        
        rolesFiltrados = roles.filter((rol) => {
          console.log('rol consultado ', rol);
          
          if(rol != 'habitante'){
            return true
          }
          return false
        
        } )
       console.log('roles encontrados ', rolesFiltrados);
       
      }else{
        //no tiene roles 
      }
    })

    console.log('tamano roles filtrados ', rolesFiltrados.length);
    
    if(rolesFiltrados.length == 0){
      
      //es solo habitante
      return true
    }else{
      //es funcionario 
      return false
    }

  }


  userChanges: Subject<firebase.User | null> = new Subject<firebase.User | null>()
  //userDatabaseChanges: Subject<any> = new Subject<any>()




  


  //INICIAR SESION
  loginEmail(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email,password)
    .then( res =>{
      
      //ctualizar el estado global de user 
      //this.userChanges.next(res.user)

      this.router.navigate(['/'])
    })
    .catch((error) => {
      console.log('error al iniciar sesion: ', error);
      this.notiService.modalInformativo({titulo: "Atención", errorCode: error.code})
    });
  }
  //Registrarse
  async signUpEmail(email: string, password: string){
    return await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      console.log('user creado');
      this.router.navigate(['/'])

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
      //this.userChanges.next({})
      this.router.navigate(['/'])
      
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
      this.notiService.modalInformativo({titulo: "Atención", errorCode: er.message})
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
      this.notiService.modalInformativo({titulo: "Atención", errorCode: er.message})
    })
    return rol
  }

  ///la funcional
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
      this.notiService.modalInformativo({titulo: "Atención", errorCode: er.message})
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
      this.notiService.modalInformativo({titulo: "Advertencia", errorCode: error.code})
    })
      
  }

  agregarPermiso(rol: Object){
    let agregarPermiso = firebase.functions().httpsCallable('agregarPermiso');
    return agregarPermiso(rol).catch((error)=>{
      this.notiService.modalInformativo({titulo: "Advertencia", errorCode: error.code})
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
