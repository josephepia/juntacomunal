import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitanteRoutingModule } from './habitante-routing.module';
import { HabitanteComponent } from './habitante.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';



@NgModule({
  declarations: [
    HabitanteComponent
  ],
  imports: [
    CommonModule,
    HabitanteRoutingModule,
    MaterialModule
  ]
})
export class HabitanteModule { }
