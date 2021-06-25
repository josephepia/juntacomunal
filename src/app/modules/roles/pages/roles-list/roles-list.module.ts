import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesListRoutingModule } from './roles-list-routing.module';
import { RolesListComponent } from './roles-list.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    RolesListComponent
  ],
  imports: [
    CommonModule,
    RolesListRoutingModule,
    MaterialModule
  ]
})
export class RolesListModule { }
