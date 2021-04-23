import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuntaRoutingModule } from './junta-routing.module';
import { JuntaComponent } from './junta.component';


@NgModule({
  declarations: [
    JuntaComponent
  ],
  imports: [
    CommonModule,
    JuntaRoutingModule
  ]
})
export class JuntaModule { }
