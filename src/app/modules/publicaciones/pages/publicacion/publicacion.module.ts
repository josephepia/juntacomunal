import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionRoutingModule } from './publicacion-routing.module';
import { PublicacionComponent } from './publicacion.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    PublicacionComponent
  ],
  imports: [
    CommonModule,MatCarouselModule,
    PublicacionRoutingModule
  ]
})
export class PublicacionModule { }
