import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoRoutingModule } from './cargo-routing.module';
import { CargoComponent } from './cargo.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReplacePipe } from 'src/app/shared/pipes/replace.pipe';


@NgModule({
  declarations: [
    CargoComponent,
    ReplacePipe
  ],
  imports: [
    CommonModule,
    CargoRoutingModule,
    MaterialModule
  ]
})
export class CargoModule { }
