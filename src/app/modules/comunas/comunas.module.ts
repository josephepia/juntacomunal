import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunasRoutingModule } from './comunas-routing.module';
import { ComunasComponent } from './comunas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
//import { FormularioComponent as FormularioBarrioComponent}  from 'src/app/modules/barrios/components/formulario/formulario.component';

@NgModule({
  declarations: [
    ComunasComponent,
    FormularioComponent,
    //FormularioBarrioComponent
  ],
  imports: [
    CommonModule,
    ComunasRoutingModule,
    MaterialModule
  ]
})
export class ComunasModule { }
