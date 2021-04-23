import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunasComponent } from './comunas.component';

const routes: Routes = [
  //{ path: '', component: ComunasComponent, redirectTo: 'comunas', pathMatch: 'full'},
  { path: ':id', loadChildren: () => import('./pages/comuna/comuna.module').then(m => m.ComunaModule) },
  { path: '', loadChildren: () => import('./pages/comunas-list/comunas.module').then(m => m.ComunasModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunasRoutingModule { }
