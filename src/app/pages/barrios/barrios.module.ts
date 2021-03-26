import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarriosRoutingModule } from './barrios-routing.module';
import { BarriosComponent } from './barrios.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [BarriosComponent],
  imports: [
    CommonModule,
    BarriosRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class BarriosModule { }
