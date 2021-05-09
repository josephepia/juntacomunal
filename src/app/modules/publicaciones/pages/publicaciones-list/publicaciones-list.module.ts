import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesListRoutingModule } from './publicaciones-list-routing.module';
import { PublicacionesListComponent } from './publicaciones-list.component';


@NgModule({
  declarations: [
    PublicacionesListComponent
  ],
  imports: [
    CommonModule,
    PublicacionesListRoutingModule
  ]
})
export class PublicacionesListModule { }
