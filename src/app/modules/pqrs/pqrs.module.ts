import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PqrsRoutingModule } from './pqrs-routing.module';
import { PqrsComponent } from './pqrs.component';


@NgModule({
  declarations: [
    PqrsComponent
  ],
  imports: [
    CommonModule,
    PqrsRoutingModule
  ]
})
export class PqrsModule { }
