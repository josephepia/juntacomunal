import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionesComponent } from './publicaciones.component';

//const routes: Routes = [{ path: '', component: PublicacionesComponent }];

const routes: Routes = [
  //{ path: '', component: ComunasComponent, redirectTo: 'comunas', pathMatch: 'full'},
  { path: ':id', loadChildren: () => import('./pages/publicacion/publicacion.module').then(m => m.PublicacionModule) },
  { path: '', loadChildren: () => import('./pages/publicaciones-list/publicaciones-list.module').then(m => m.PublicacionesListModule) }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
