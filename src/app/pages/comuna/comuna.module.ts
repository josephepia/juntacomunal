import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunaRoutingModule } from './comuna-routing.module';
import { ComunaComponent } from './comuna.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [ComunaComponent],
  imports: [
    CommonModule,
    ComunaRoutingModule,
    MatCardModule
  ]
})
export class ComunaModule { }
