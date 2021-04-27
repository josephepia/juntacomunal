import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuntaRoutingModule } from './junta-routing.module';
import { JuntaComponent } from './junta.component';
import { FormularioCargoComponent } from './components/formulario-cargo/formulario-cargo.component';
import { FormularioMiembroComponent } from './components/formulario-miembro/formulario-miembro.component';
import { FormularioJuntaComponent } from './components/formulario-junta/formulario-junta.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    JuntaComponent,
    FormularioCargoComponent,
    FormularioMiembroComponent,
    FormularioJuntaComponent,
  ],
  imports: [
    CommonModule,
    JuntaRoutingModule,
    MaterialModule
  ]
})
export class JuntaModule { }
