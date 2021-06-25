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
import { MatInputModule } from '@angular/material/input';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { MenuAdminComponent } from './shared/components/menu-admin/menu-admin.component';
import { MenuInvitadoComponent } from './shared/components/menu-invitado/menu-invitado.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacionComponent } from './shared/components/modal-confirmacion/modal-confirmacion.component';
import { CardComponent } from './shared/components/card/card.component';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ModalInformativoComponent } from './shared/components/modal-informativo/modal-informativo.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuAdminComponent,
    MenuInvitadoComponent,
    ModalConfirmacionComponent,
    CardComponent,
    ModalInformativoComponent
    //NavBarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 
    MatCarouselModule,

    FormsModule,
    ReactiveFormsModule,
  
    MaterialModule

  
    ],
    providers: [],
    bootstrap: [AppComponent],
  
})
export class AppModule { 
  constructor(){
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebaseConfig);
    
        if (location.hostname === "localhost") {
         firebase.database().useEmulator(
        "localhost",
        9000
        );
        console.log('RealtimeDatabase local conected')

        firebase.auth().useEmulator(
          "http://localhost:9099/auth",
          );

        console.log('Auth local conected')

        firebase.functions().useEmulator(
          "localhost",
          5001
          );
        console.log('Functions local conected')

        firebase.database().ref('comunas').on('value',(dataSnapshot)=>{
          if(dataSnapshot.exists()){
            console.log('comunas locales => ', dataSnapshot.val());
            
          }else{
            console.log('no existen comunas locales');
            
          }
        })

        console.log('ruta root realtime local => ', firebase.database().ref().toString());

        

        }
        
      
    }
  }
}
