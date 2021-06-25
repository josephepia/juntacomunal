import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisoComponent } from './permiso.component';

const routes: Routes = [{ path: '', component: PermisoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisoRoutingModule { }
