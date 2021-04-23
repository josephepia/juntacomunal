import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunasRoutingModule } from './comunas-routing.module';
import { ComunasComponent } from './comunas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    ComunasComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ComunasRoutingModule,
    MaterialModule
  ]
})
export class ComunasModule { }
