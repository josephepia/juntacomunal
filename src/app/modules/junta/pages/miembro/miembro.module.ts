import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiembroRoutingModule } from './miembro-routing.module';
import { MiembroComponent } from './miembro.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    MiembroComponent
  ],
  imports: [
    CommonModule,
    MiembroRoutingModule,
    MaterialModule
  ]
})
export class MiembroModule { }
