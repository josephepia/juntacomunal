import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionRoutingModule } from './publicacion-routing.module';
import { PublicacionComponent } from './publicacion.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    PublicacionComponent
  ],
  imports: [
    CommonModule,MaterialModule,
    PublicacionRoutingModule
  ]
})
export class PublicacionModule { }
