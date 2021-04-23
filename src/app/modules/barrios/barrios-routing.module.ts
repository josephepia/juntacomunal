import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarriosComponent } from './barrios.component';

const routes: Routes = [

  { path: '', loadChildren: () => import('./pages/barrios-list/barrios.module').then(m => m.BarriosModule) },
  { path: ':id', loadChildren: () => import('./pages/barrio/barrio.module').then(m => m.BarrioModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarriosRoutingModule { }
