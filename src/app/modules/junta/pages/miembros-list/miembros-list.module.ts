import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiembrosListRoutingModule } from './miembros-list-routing.module';
import { MiembrosListComponent } from './miembros-list.component';


@NgModule({
  declarations: [
    MiembrosListComponent
  ],
  imports: [
    CommonModule,
    MiembrosListRoutingModule
  ]
})
export class MiembrosListModule { }
