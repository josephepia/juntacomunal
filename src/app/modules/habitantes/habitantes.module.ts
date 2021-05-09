import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HabitantesRoutingModule } from './habitantes-routing.module';
import { HabitantesComponent } from './habitantes.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    HabitantesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    HabitantesRoutingModule,
    MaterialModule
  ], entryComponents: [
    //FormularioComunaComponent
  ]
})
export class HabitantesModule { }
