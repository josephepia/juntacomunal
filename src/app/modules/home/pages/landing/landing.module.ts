import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { PublicacionesListComponent } from 'src/app/modules/publicaciones/pages/publicaciones-list/publicaciones-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import { PublicacionesListRoutingModule } from 'src/app/modules/publicaciones/pages/publicaciones-list/publicaciones-list-routing.module';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    LandingRoutingModule,MatCardModule,MatGridListModule,MatButtonModule,MatRippleModule,NgbModule,PublicacionesListRoutingModule,MaterialModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
