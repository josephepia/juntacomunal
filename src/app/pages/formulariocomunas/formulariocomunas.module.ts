import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariocomunasRoutingModule } from './formulariocomunas-routing.module';
import { FormulariocomunasComponent } from './formulariocomunas.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [FormulariocomunasComponent],
  imports: [
    CommonModule,
    FormulariocomunasRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class FormulariocomunasModule { }
