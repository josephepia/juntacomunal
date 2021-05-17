import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineasAtencionListRoutingModule } from './lineas-atencion-list-routing.module';
import { LineasAtencionListComponent } from './lineas-atencion-list.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    LineasAtencionListComponent
  ],
  imports: [
    CommonModule,
    LineasAtencionListRoutingModule,
    MaterialModule
  ]
})
export class LineasAtencionListModule { }
