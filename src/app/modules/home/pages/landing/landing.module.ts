import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';






import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,MatCardModule,MatGridListModule,MatButtonModule,MatRippleModule,NgbModule
  ]
})
export class LandingModule { }
