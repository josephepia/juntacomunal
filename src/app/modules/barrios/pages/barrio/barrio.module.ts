import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarrioRoutingModule } from './barrio-routing.module';
import { BarrioComponent } from './barrio.component';


@NgModule({
  declarations: [
    BarrioComponent
  ],
  imports: [
    CommonModule,
    BarrioRoutingModule
  ]
})
export class BarrioModule { }
