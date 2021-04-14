import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariobarriosRoutingModule } from './formulariobarrios-routing.module';
import { FormulariobarriosComponent } from './formulariobarrios.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [FormulariobarriosComponent],
  imports: [
    CommonModule,
    FormulariobarriosRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule

  ],
  entryComponents: [
    FormulariobarriosComponent
  ]
})
export class FormulariobarriosModule { }
