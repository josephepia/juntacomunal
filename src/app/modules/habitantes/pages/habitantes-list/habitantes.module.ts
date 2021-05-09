import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitantesRoutingModule } from './habitantes-routing.module';
import { HabitantesComponent } from './habitantes.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HabitantesComponent],
  imports: [
    CommonModule,
    HabitantesRoutingModule,
    MatGridListModule,
    MaterialModule,
    FormsModule
  ],entryComponents: [
    //FormularioComunaComponent
  ]
})
export class HabitantesModule { }
