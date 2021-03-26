import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiembrosJACComponent } from './miembros-jac.component';

const routes: Routes = [{ path: '', component: MiembrosJACComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiembrosJACRoutingModule { }
