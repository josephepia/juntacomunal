import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariobarriosComponent } from './formulariobarrios.component';

const routes: Routes = [{ path: '', component: FormulariobarriosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariobarriosRoutingModule { }
