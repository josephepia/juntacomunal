import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { PublicacionesListRoutingModule } from './publicaciones-list-routing.module';
import { PublicacionesListComponent } from './publicaciones-list.component';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    PublicacionesListComponent
  ],
  imports: [
    CommonModule,
    PublicacionesListRoutingModule,MatCarouselModule
  ]
})
export class PublicacionesListModule { }
