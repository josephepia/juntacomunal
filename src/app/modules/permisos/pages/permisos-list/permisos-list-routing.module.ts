import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisosListComponent } from './permisos-list.component';

const routes: Routes = [{ path: '', component: PermisosListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisosListRoutingModule { }
