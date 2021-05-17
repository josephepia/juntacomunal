import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitantesComponent } from './habitantes.component';

const routes: Routes = [
  //{ path: '', component: ComunasComponent, redirectTo: 'comunas', pathMatch: 'full'},
  { path: ':id', loadChildren: () => import('./pages/habitante/habitante.module').then(m => m.HabitanteModule) },
  { path: '', loadChildren: () => import('./pages/habitantes-list/habitantes-list.module').then(m => m.HabitantesListModule) }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitantesRoutingModule { }
