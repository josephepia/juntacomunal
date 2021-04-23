import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudRegistroHabitantesComponent } from './solicitud-registro-habitantes.component';

const routes: Routes = [{ path: '', component: SolicitudRegistroHabitantesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRegistroHabitantesRoutingModule { }
