import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioMiembrosJACComponent } from './formulario-miembros-jac.component';

const routes: Routes = [{ path: '', component: FormularioMiembrosJACComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioMiembrosJACRoutingModule { }
