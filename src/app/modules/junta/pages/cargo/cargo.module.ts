import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoRoutingModule } from './cargo-routing.module';
import { CargoComponent } from './cargo.component';


@NgModule({
  declarations: [
    CargoComponent
  ],
  imports: [
    CommonModule,
    CargoRoutingModule
  ]
})
export class CargoModule { }
