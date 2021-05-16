import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitantesRoutingModule } from './habitantes-routing.module';
import { HabitantesComponent } from './habitantes.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    HabitantesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    HabitantesRoutingModule
  ]
})
export class HabitantesModule { }
