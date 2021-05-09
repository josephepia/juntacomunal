import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PqrsListRoutingModule } from './pqrs-list-routing.module';
import { PqrsListComponent } from './pqrs-list.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [PqrsListComponent],
  imports: [
    CommonModule,
    PqrsListRoutingModule,
    MaterialModule
  ]
})
export class PqrsListModule { }
