import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiembrosJACRoutingModule } from './miembros-jac-routing.module';
import { MiembrosJACComponent } from './miembros-jac.component';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [MiembrosJACComponent],
  imports: [
    CommonModule,
    MiembrosJACRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MiembrosJACModule { }
