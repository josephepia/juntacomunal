import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineasAtencionComponent } from './lineas-atencion.component';

const routes: Routes = [
 // { path: '', component: LineasAtencionComponent }, { path: 'lineas-atencion', loadChildren: () => import('./pages/lineas-atencion-list/lineas-atencion-list.module').then(m => m.LineasAtencionListModule) }, { path: 'lineas-atencion', loadChildren: () => import('./pages/lineas-atencion/lineas-atencion.module').then(m => m.LineasAtencionModule) }
  { path: ':id', loadChildren: () => import('./pages/lineas-atencion/lineas-atencion.module').then(m => m.LineasAtencionModule) },
  { path: '', loadChildren: () => import('./pages/lineas-atencion-list/lineas-atencion-list.module').then(m => m.LineasAtencionListModule) }
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class LineasAtencionRoutingModule { }
