import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitanteRoutingModule } from './habitante-routing.module';
import { HabitanteComponent } from './habitante.component';


@NgModule({
  declarations: [
    HabitanteComponent
  ],
  imports: [
    CommonModule,
    HabitanteRoutingModule
  ]
})
export class HabitanteModule { }
