import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariocomunasComponent } from './formulariocomunas.component';

const routes: Routes = [{ path: '', component: FormulariocomunasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariocomunasRoutingModule { }
