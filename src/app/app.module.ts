import { NavprincipalModule } from './pages/navprincipal/navprincipal.module';
import { HomeModule } from './pages/home/home.module';
import { NavprincipalComponent } from './pages/navprincipal/navprincipal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import firebase from 'firebase';
import {MatFormFieldModule} from '@angular/material/form-field';
import { environment } from 'src/environments/environment';
//import { FormularioComunaComponent } from './components/formulario-comuna/formulario-comuna.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    //NavprincipalComponent
   
    //FormularioComunaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    //HomeModule
    //NavprincipalModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
  constructor(){
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebaseConfig);
      
    }
  }
}
