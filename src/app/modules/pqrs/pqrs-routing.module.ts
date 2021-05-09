import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PqrsComponent } from './pqrs.component';


const routes: Routes = [
  //{ path: '', component: ComunasComponent, redirectTo: 'comunas', pathMatch: 'full'},
  { path: ':id', loadChildren: () => import('./pages/pqrs/pqrs.module').then(m => m.PqrsModule) },
  { path: '', loadChildren: () => import('./pages/pqrs-list/pqrs-list.module').then(m => m.PqrsListModule) }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PqrsRoutingModule { }
