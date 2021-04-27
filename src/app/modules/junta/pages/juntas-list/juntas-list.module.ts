import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuntasListRoutingModule } from './juntas-list-routing.module';
import { JuntasListComponent } from './juntas-list.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    JuntasListComponent
  ],
  imports: [
    CommonModule,
    JuntasListRoutingModule,
    MaterialModule
  ]
})
export class JuntasListModule { }
