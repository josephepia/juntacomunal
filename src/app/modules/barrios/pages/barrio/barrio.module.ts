import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarrioRoutingModule } from './barrio-routing.module';
import { BarrioComponent } from './barrio.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    BarrioComponent
  ],
  imports: [
    CommonModule,
    BarrioRoutingModule,
    MaterialModule
  ]
})
export class BarrioModule { }
