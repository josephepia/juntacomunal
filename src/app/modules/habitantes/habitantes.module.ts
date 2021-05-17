import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import { HabitantesRoutingModule } from './habitantes-routing.module';
import { HabitantesComponent } from './habitantes.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    HabitantesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    HabitantesRoutingModule,
    MaterialModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class HabitantesModule { }
