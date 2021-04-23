import { NavprincipalModule } from './pages/navprincipal/navprincipal.module';
import { HomeModule } from './pages/home/home.module';
import { NavprincipalComponent } from './pages/navprincipal/navprincipal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';

import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FormularioComunaComponent } from './components/formulario-comuna/formulario-comuna.component';
import { FormulariocomunasComponent } from './pages/formulariocomunas/formulariocomunas.component';
import { FormulariocomunasModule } from './pages/formulariocomunas/formulariocomunas.module';
import { MatInputModule } from '@angular/material/input';
import { ModalConfirmacionComponent } from './components/modal-confirmacion/modal-confirmacion.component';
import { FormularioBarriosComponent } from './components/formulario-barrios/formulario-barrios.component';

import { FormularioJacComponent } from './components/formulario-jac/formulario-jac.component';

import { FormulariohabitantesComponent } from './components/formulariohabitantes/formulariohabitantes.component';




@NgModule({
  declarations: [
    AppComponent,
    FormularioComunaComponent,
    ModalConfirmacionComponent,
    FormularioBarriosComponent,

    FormularioJacComponent,

    FormulariohabitantesComponent,

    
    
    //NavprincipalComponent
   
    //FormularioComunaComponent,
  ],
  entryComponents: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
   MatSelectModule,
    MatButtonModule,
    

    FormsModule,
    ReactiveFormsModule,
   // Registro-y-consulta-de-solicitud-habitante,
    MatStepperModule,
    CdkStepperModule,
    //HomeModule
    //NavprincipalModule
   // MatFormFieldModule,
    MatToolbarModule,
    NavprincipalModule,

    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule

  
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
