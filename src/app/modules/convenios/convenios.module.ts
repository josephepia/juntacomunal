import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConveniosRoutingModule } from './convenios-routing.module';
import { ConveniosComponent } from './convenios.component';


@NgModule({
  declarations: [
    ConveniosComponent
  ],
  imports: [
    CommonModule,
    ConveniosRoutingModule
  ]
})
export class ConveniosModule { }
