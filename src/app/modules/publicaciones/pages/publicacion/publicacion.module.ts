import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionRoutingModule } from './publicacion-routing.module';
import { PublicacionComponent } from './publicacion.component';


@NgModule({
  declarations: [
    PublicacionComponent
  ],
  imports: [
    CommonModule,
    PublicacionRoutingModule
  ]
})
export class PublicacionModule { }
