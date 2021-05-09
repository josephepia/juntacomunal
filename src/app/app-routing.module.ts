import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';
//import { LoginComponent } from './pages/login/login.component';

 //d

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'habitantes', loadChildren: () => import('./modules/habitantes/pages/habitantes-list/habitantes.module').then(m => m.HabitantesModule) },
  { path: 'SolicitudRegistroHabitantes', loadChildren: () => import('./modules/solicitudes/pages/solicitud-registro/solicitud-registro-habitantes.module').then(m => m.SolicitudRegistroHabitantesModule) },
  { path: 'Consultasolicitudhabitantes', loadChildren: () => import('./modules/solicitudes/pages/solicitudes-list/consultasolicitudhabitantes.module').then(m => m.ConsultasolicitudhabitantesModule) },
  { path: 'comunas', loadChildren: () => import('./modules/comunas/comunas.module').then(m => m.ComunasModule),
  canActivate:[]
  },
  { path: 'barrios', loadChildren: () => import('./modules/barrios/barrios.module').then(m => m.BarriosModule) },
  
  { 
    path: 'solicitudes',
    loadChildren: () => import('./modules/solicitudes/solicitudes.module').then(m => m.SolicitudesModule),
    canActivate:[]
  
  },
  { path: 'junta', loadChildren: () => import('./modules/junta/junta.module').then(m => m.JuntaModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'autenticacion', loadChildren: () => import('./modules/autenticacion/autenticacion.module').then(m => m.AutenticacionModule) },
  
  
  { path: 'pqrs', loadChildren: () => import('./modules/pqrs/pqrs.module').then(m => m.PqrsModule) },
  { path: 'pqrs-list', loadChildren: () => import('./modules/pqrs/pages/pqrs-list/pqrs-list.module').then(m => m.PqrsListModule) },
  //{ path: 'pqrs', loadChildren: () => import('./modules/pqrs/pages/pqrs/pqrs.module').then(m => m.PqrsModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
