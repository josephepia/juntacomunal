import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitantesListRoutingModule } from './habitantes-list-routing.module';
import { HabitantesListComponent } from './habitantes-list.component';


@NgModule({
  declarations: [
    HabitantesListComponent
  ],
  imports: [
    CommonModule,
    HabitantesListRoutingModule
  ]
})
export class HabitantesListModule { }
