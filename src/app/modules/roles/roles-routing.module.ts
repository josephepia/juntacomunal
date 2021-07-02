import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles.component';

const routes: Routes = [
  //{ path: '', component: RolesComponent },
  { path: '', loadChildren: () => import('./pages/roles-list/roles-list.module').then(m => m.RolesListModule) },
  { path: ':idRol', loadChildren: () => import('./pages/rol/rol.module').then(m => m.RolModule) },
  //{ path: 'rol', loadChildren: () => import('./pages/role/role.module').then(m => m.RoleModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
