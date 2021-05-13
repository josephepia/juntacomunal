import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesListRoutingModule } from './publicaciones-list-routing.module';
import { PublicacionesListComponent } from './publicaciones-list.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';
@NgModule({
  declarations: [
    PublicacionesListComponent
  ],
  imports: [
    CommonModule,
    PublicacionesListRoutingModule,MaterialModule
  ]
})
export class PublicacionesListModule { }
