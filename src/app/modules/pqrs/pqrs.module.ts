import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PqrsRoutingModule } from './pqrs-routing.module';
import { PqrsComponent } from './pqrs.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    PqrsComponent
  ],
  imports: [
    CommonModule,
    PqrsRoutingModule,
    MaterialModule
  ]
})
export class PqrsModule { }
