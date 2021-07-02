import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisoRoutingModule } from './permiso-routing.module';
import { PermisoComponent } from './permiso.component';


@NgModule({
  declarations: [
    PermisoComponent
  ],
  imports: [
    CommonModule,
    PermisoRoutingModule
  ]
})
export class PermisoModule { }
