import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'comunas',
    loadChildren: () => import('./pages/comunas/comunas.module').then(m => m.ComunasModule) },
  { path: 'formulariocomunas', loadChildren: () => import('./pages/formulariocomunas/formulariocomunas.module').then(m => m.FormulariocomunasModule) },
  { path: 'formulariobarrios', loadChildren: () => import('./pages/formulariobarrios/formulariobarrios.module').then(m => m.FormulariobarriosModule) },
  { path: 'barrios', loadChildren: () => import('./pages/barrios/barrios.module').then(m => m.BarriosModule) },
  { path: 'habitantes', loadChildren: () => import('./pages/GestionHabitantes/habitantes/habitantes.module').then(m => m.HabitantesModule) },
  { path: 'MiembrosJAC', loadChildren: () => import('./pages/miembros-jac/miembros-jac.module').then(m => m.MiembrosJACModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
