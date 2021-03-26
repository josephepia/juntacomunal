import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'comunas',
    loadChildren: () => import('./pages/comunas/comunas.module').then(m => m.ComunasModule) },
  { path: 'formulariocomunas', loadChildren: () => import('./pages/formulariocomunas/formulariocomunas.module').then(m => m.FormulariocomunasModule) },
  { path: 'formulariobarrios', loadChildren: () => import('./pages/formulariobarrios/formulariobarrios.module').then(m => m.FormulariobarriosModule) },
  { path: 'barrios', loadChildren: () => import('./pages/barrios/barrios.module').then(m => m.BarriosModule) },
  { path: 'habitantes', loadChildren: () => import('./pages/GestionHabitantes/habitantes/habitantes.module').then(m => m.HabitantesModule) },

  { path: 'navprincipal', loadChildren: () => import('./pages/navprincipal/navprincipal.module').then(m => m.NavprincipalModule) },
  { path: 'MiembrosJAC', loadChildren: () => import('./pages/miembros-jac/miembros-jac.module').then(m => m.MiembrosJACModule) },
  { path: 'FormularioMiembrosJAC', loadChildren: () => import('./pages/formulario-miembros-jac/formulario-miembros-jac.module').then(m => m.FormularioMiembrosJACModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
