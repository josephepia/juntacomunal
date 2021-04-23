import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudRegistroHabitantesRoutingModule } from './solicitud-registro-habitantes-routing.module';
import { SolicitudRegistroHabitantesComponent } from './solicitud-registro-habitantes.component';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [SolicitudRegistroHabitantesComponent],
  imports: [
    CommonModule,
    SolicitudRegistroHabitantesRoutingModule,NgbModule,
    MatStepperModule,CdkStepperModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,
  ]
})
export class SolicitudRegistroHabitantesModule { }
