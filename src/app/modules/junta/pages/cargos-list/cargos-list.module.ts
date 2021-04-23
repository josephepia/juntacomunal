import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargosListRoutingModule } from './cargos-list-routing.module';
import { CargosListComponent } from './cargos-list.component';


@NgModule({
  declarations: [
    CargosListComponent
  ],
  imports: [
    CommonModule,
    CargosListRoutingModule
  ]
})
export class CargosListModule { }
