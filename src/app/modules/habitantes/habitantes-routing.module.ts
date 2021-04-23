import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitantesComponent } from './habitantes.component';

const routes: Routes = [
  //{ path: '', component: HabitantesComponent },
  { path: ':id', loadChildren: () => import('./pages/habitante/habitante.module').then(m => m.HabitanteModule) },
  { path: '', loadChildren: () => import('./pages/habitantes-list/habitantes.module').then(m => m.HabitantesModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitantesRoutingModule { }
