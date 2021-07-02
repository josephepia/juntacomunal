import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    RolesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MaterialModule
  ]
})
export class RolesModule { }
