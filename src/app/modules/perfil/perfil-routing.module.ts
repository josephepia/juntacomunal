import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil.component';

const routes: Routes = [
 // { path: '', component: PerfilComponent },
  { path: '', loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
