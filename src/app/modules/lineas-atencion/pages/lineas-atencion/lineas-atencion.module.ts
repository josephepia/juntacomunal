import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineasAtencionRoutingModule } from './lineas-atencion-routing.module';
import { LineasAtencionComponent } from './lineas-atencion.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    LineasAtencionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LineasAtencionRoutingModule
  ]
})
export class LineasAtencionModule { }
