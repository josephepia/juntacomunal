import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiembrosJACRoutingModule } from './miembros-jac-routing.module';
import { MiembrosJACComponent } from './miembros-jac.component';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FormularioMiembrosJACComponent} from '../formulario-miembros-jac/formulario-miembros-jac.component'


@NgModule({
  declarations: [MiembrosJACComponent],
  imports: [
    CommonModule,
    MiembrosJACRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule
  ],
  entryComponents: [
    FormularioMiembrosJACComponent
  ]
})
export class MiembrosJACModule { }
