import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { RolComponent } from './rol.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    RolComponent
  ],
  imports: [
    CommonModule,
    RolRoutingModule,
    MaterialModule
  ]
})
export class RolModule { }
