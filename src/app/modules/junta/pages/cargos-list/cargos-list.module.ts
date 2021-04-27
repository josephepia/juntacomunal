import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargosListRoutingModule } from './cargos-list-routing.module';
import { CargosListComponent } from './cargos-list.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    CargosListComponent
  ],
  imports: [
    CommonModule,
    CargosListRoutingModule,
    MaterialModule
  ]
})
export class CargosListModule { }
