import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasolicitudhabitantesRoutingModule } from './consultasolicitudhabitantes-routing.module';
import { ConsultasolicitudhabitantesComponent } from './consultasolicitudhabitantes.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ConsultasolicitudhabitantesComponent],
  imports: [
    CommonModule,NgbModule,NgbPaginationModule,NgbAlertModule,
    ConsultasolicitudhabitantesRoutingModule,MatInputModule,MatSelectModule,MatFormFieldModule,FormsModule,MatTableModule,MatButtonModule,MatCardModule
  ]
})
export class ConsultasolicitudhabitantesModule { }
