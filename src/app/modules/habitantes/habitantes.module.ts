import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitantesRoutingModule } from './habitantes-routing.module';
import { HabitantesComponent } from './habitantes.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';



@NgModule({
  declarations: [
    HabitantesComponent
  ],
  imports: [
    CommonModule,
    HabitantesRoutingModule,
    MaterialModule
  ]
})
export class HabitantesModule { }