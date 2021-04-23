import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private router: Router) { }
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

  loginEmail(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email,password)
  }

  async signUpEmail(email: string, password: string){
    return await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      return userCredential.user
    })
    .catch((error) => {
      
      console.log('error al crear cuenta de usuario -> ', error);
      return null
    });
  }

  logOutSession(){

    firebase.auth().signOut()
    .then(()=>{
      console.log('sesion de firebase cerrada');
      //this.router.navigate(['home'])
      
    }).catch((error)=>{
      console.log('error al intentar desconectarse de firebase->', error);
    });

    
  }

}
