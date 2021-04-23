import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitanteComponent } from './habitante.component';

const routes: Routes = [{ path: '', component: HabitanteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitanteRoutingModule { }
