import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,MatCardModule,MatGridListModule,
  ]
})
export class LandingModule { }
