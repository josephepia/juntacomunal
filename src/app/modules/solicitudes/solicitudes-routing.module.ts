import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesComponent } from './solicitudes.component';

const routes: Routes = [
  //{ path: '', component: SolicitudesComponent },
  { path: ':id', loadChildren: () => import('./pages/solicitud/solicitud.module').then(m => m.SolicitudModule) },
  { path: '', loadChildren: () => import('./pages/solicitudes-list/consultasolicitudhabitantes.module').then(m => m.ConsultasolicitudhabitantesModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
