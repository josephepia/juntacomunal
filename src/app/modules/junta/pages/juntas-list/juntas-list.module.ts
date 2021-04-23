import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuntasListRoutingModule } from './juntas-list-routing.module';
import { JuntasListComponent } from './juntas-list.component';


@NgModule({
  declarations: [
    JuntasListComponent
  ],
  imports: [
    CommonModule,
    JuntasListRoutingModule
  ]
})
export class JuntasListModule { }
