import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisosComponent } from './permisos.component';

const routes: Routes = [{ path: '', component: PermisosComponent }, { path: 'permisos', loadChildren: () => import('./pages/permisos-list/permisos-list.module').then(m => m.PermisosListModule) }, { path: 'permiso', loadChildren: () => import('./pages/permiso/permiso.module').then(m => m.PermisoModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisosRoutingModule { }
