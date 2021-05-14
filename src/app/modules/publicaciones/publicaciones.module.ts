import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones.component';
import { FormularioComponent } from './components/formulario/formulario.component';





import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    PublicacionesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule,MatCardModule,MaterialModule
  ]
})
export class PublicacionesModule { }
