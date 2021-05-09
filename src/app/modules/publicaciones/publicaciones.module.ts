import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones.component';


@NgModule({
  declarations: [
    PublicacionesComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule
  ]
})
export class PublicacionesModule { }
