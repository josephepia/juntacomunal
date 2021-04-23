import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiembrosListComponent } from './miembros-list.component';

const routes: Routes = [{ path: '', component: MiembrosListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiembrosListRoutingModule { }
