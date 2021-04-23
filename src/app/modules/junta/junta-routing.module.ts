import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuntaComponent } from './junta.component';

const routes: Routes = [
  //{ path: '', component: JuntaComponent },
  { path: 'miembros', loadChildren: () => import('./pages/miembros-list/miembros-list.module').then(m => m.MiembrosListModule) },
  { path: ':idMiembro', loadChildren: () => import('./pages/miembro/miembro.module').then(m => m.MiembroModule) },
  { path: ':idCargo', loadChildren: () => import('./pages/cargo/cargo.module').then(m => m.CargoModule) },
  { path: 'cargos', loadChildren: () => import('./pages/cargos-list/cargos-list.module').then(m => m.CargosListModule) },
  { path: '', loadChildren: () => import('./pages/juntas-list/juntas-list.module').then(m => m.JuntasListModule) },
  { path: ':idJunta', loadChildren: () => import('./pages/junta/junta.module').then(m => m.JuntaModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuntaRoutingModule { }
