import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasolicitudhabitantesComponent } from './consultasolicitudhabitantes.component';

const routes: Routes = [{ path: '', component: ConsultasolicitudhabitantesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasolicitudhabitantesRoutingModule { }
