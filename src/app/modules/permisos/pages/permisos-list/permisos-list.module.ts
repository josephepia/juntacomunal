import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosListRoutingModule } from './permisos-list-routing.module';
import { PermisosListComponent } from './permisos-list.component';


@NgModule({
  declarations: [
    PermisosListComponent
  ],
  imports: [
    CommonModule,
    PermisosListRoutingModule
  ]
})
export class PermisosListModule { }
