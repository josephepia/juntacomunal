import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublicacionesListRoutingModule } from './publicaciones-list-routing.module';
import { PublicacionesListComponent } from './publicaciones-list.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
@NgModule({
  declarations: [
    PublicacionesListComponent
  ],
  imports: [
    CommonModule,
    PublicacionesListRoutingModule,MaterialModule,NgbModule
  ]
})
export class PublicacionesListModule { }
