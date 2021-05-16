import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitantesComponent } from './habitantes.component';

const routes: Routes = [{ path: '', component: HabitantesComponent }, { path: 'habitantes', loadChildren: () => import('./pages/habitantes-list/habitantes-list.module').then(m => m.HabitantesListModule) }, { path: 'habitantes', loadChildren: () => import('./pages/habitante/habitante.module').then(m => m.HabitanteModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitantesRoutingModule { }
