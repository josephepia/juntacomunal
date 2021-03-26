import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioMiembrosJACRoutingModule } from './formulario-miembros-jac-routing.module';
import { FormularioMiembrosJACComponent } from './formulario-miembros-jac.component';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [FormularioMiembrosJACComponent],
  imports: [
    CommonModule,
    FormularioMiembrosJACRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class FormularioMiembrosJACModule { }
