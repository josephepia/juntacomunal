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
  //{ path: 'pqrs-list', loadChildren: () => import('./modules/pqrs/pages/pqrs-list/pqrs-list.module').then(m => m.PqrsListModule) },
  
  { path: 'publicaciones', loadChildren: () => import('./modules/publicaciones/publicaciones.module').then(m => m.PublicacionesModule) },
<<<<<<< HEAD
  { path: 'habitantes', loadChildren: () => import('./modules/habitantes/habitantes.module').then(m => m.HabitantesModule) },
=======
  { path: 'convenios', loadChildren: () => import('./modules/convenios/convenios.module').then(m => m.ConveniosModule) },
  { path: 'lineasAtencion', loadChildren: () => import('./modules/lineas-atencion/lineas-atencion.module').then(m => m.LineasAtencionModule) },
>>>>>>> feature/Convenios
  
  //{ path: 'publicaciones-list', loadChildren: () => import('./modules/publicaciones/pages/publicaciones-list/publicaciones-list.module').then(m => m.PublicacionesListModule) },
//{ path: 'publicacion', loadChildren: () => import('./modules/publicaciones/pages/publicacion/publicacion.module').then(m => m.PublicacionModule) },
  
  //{ path: 'pqrs', loadChildren: () => import('./modules/pqrs/pages/pqrs/pqrs.module').then(m => m.PqrsModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
