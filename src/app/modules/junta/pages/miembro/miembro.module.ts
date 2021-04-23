import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiembroRoutingModule } from './miembro-routing.module';
import { MiembroComponent } from './miembro.component';


@NgModule({
  declarations: [
    MiembroComponent
  ],
  imports: [
    CommonModule,
    MiembroRoutingModule
  ]
})
export class MiembroModule { }
