import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarriosRoutingModule } from './barrios-routing.module';
import { BarriosComponent } from './barrios.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';



@NgModule({
  declarations: [
    BarriosComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    BarriosRoutingModule,
    MaterialModule
  ]
})
export class BarriosModule { }
