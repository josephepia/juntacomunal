import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineasAtencionRoutingModule } from './lineas-atencion-routing.module';
import { LineasAtencionComponent } from './lineas-atencion.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    LineasAtencionComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    LineasAtencionRoutingModule,
    MaterialModule
  ]
})
export class LineasAtencionModule { }
