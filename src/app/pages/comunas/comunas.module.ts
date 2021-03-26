import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunasRoutingModule } from './comunas-routing.module';
import { ComunasComponent } from './comunas.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [ComunasComponent],
  imports: [
    CommonModule,
    ComunasRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ComunasModule { }
