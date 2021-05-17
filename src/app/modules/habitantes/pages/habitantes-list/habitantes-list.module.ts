import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitantesListRoutingModule } from './habitantes-list-routing.module';
import { HabitantesListComponent } from './habitantes-list.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    HabitantesListComponent
  ],
  imports: [
    CommonModule,
    HabitantesListRoutingModule,
    MaterialModule
  ]
})
export class HabitantesListModule { }
